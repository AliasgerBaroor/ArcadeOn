import * as fs from "fs";
import * as path from "path";

// --------- Types ----------
type SliceFieldMap = Record<string, string[]>;
type SliceFieldTypeMap = Record<string, Record<string, string>>;

// --------- Helpers ----------
function resolveImportPath(importPath: string): string {
    if (importPath.startsWith("@/")) {
        return path.resolve(__dirname, "../../" + importPath.slice(2) + ".ts");
    }
    return path.resolve(__dirname, "../" + importPath + ".ts");
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --------- Script Logic ----------

const rootStatePath = path.resolve(__dirname, "../stores/reduxStore.ts");
const fileContent = fs.readFileSync(rootStatePath, "utf8");

// 1. Parse import paths for slice reducers
const importPattern = /import (\w+) from ["']([^"']+)["']/g;
const importPaths: Record<string, string> = {};
let impMatch: RegExpExecArray | null;
while ((impMatch = importPattern.exec(fileContent))) {
    if (impMatch[1].includes("Reducer")) {
        importPaths[impMatch[1]] = impMatch[2];
    }
}

// 2. Parse reducer object to map: sliceKey → reducerVar
const reducerPattern = /reducer:\s*{([\s\S]*?)}/;
const reducerMatch = fileContent.match(reducerPattern);
const sliceMap: Record<string, string> = {};
if (reducerMatch) {
    const entriesPattern = /(\w+):\s*(\w+),?/g;
    let entry;
    while ((entry = entriesPattern.exec(reducerMatch[1]))) {
        sliceMap[entry[1]] = entry[2];
    }
}

// 3. Extract field names, field types, and map type → slice file
const fieldMapping: SliceFieldMap = {};
const fieldTypeMapping: SliceFieldTypeMap = {};
const sliceTypeNames: Record<string, string> = {};
const typeToFile: Record<string, string> = {};

Object.entries(sliceMap).forEach(([slice, reducerVar]) => {
    const importPath = importPaths[reducerVar];
    if (!importPath) return;
    const absSliceFile = resolveImportPath(importPath);
    if (!fs.existsSync(absSliceFile)) {
        console.warn(`Slice file not found: ${absSliceFile}`);
        return;
    }
    const sliceContent = fs.readFileSync(absSliceFile, "utf8");

    // Find state type, e.g.: type ProgressionState = { ...
    const typeMatch = sliceContent.match(/type\s+([A-Za-z0-9_]+State)\s*=\s*{([^}]*)}/s);
    const typeName = typeMatch ? typeMatch[1] : capitalize(slice) + "State";
    sliceTypeNames[slice] = typeName;
    if (typeMatch) {
        typeToFile[typeName] = absSliceFile;
    }

    // Find all utility types declared in each slice file
    const typeDeclPattern = /type\s+([A-Za-z0-9_]+)\s*=/g;
    let typeDeclMatch;
    while ((typeDeclMatch = typeDeclPattern.exec(sliceContent))) {
        const utilTypeName = typeDeclMatch[1];
        typeToFile[utilTypeName] = absSliceFile;
    }

    // Parse state type fields for each field type
    fieldTypeMapping[slice] = {};
    if (typeMatch) {
        const fieldsBlock = typeMatch[2];
        fieldsBlock.split("\n").forEach((line) => {
            const lineMatch = line.match(/^\s*(\w+)\??\s*:\s*([^;]+);?/);
            if (lineMatch) {
                fieldTypeMapping[slice][lineMatch[1]] = lineMatch[2].trim();
            }
        });
    }

    // fieldMapping from initialState (just keys)
    const stateMatch = sliceContent.match(/const initialState\s*[:=][^{]*{([\s\S]*?)}/);
    let fieldArr: string[] = [];
    if (stateMatch) {
        const propPattern = /(\w+)\s*:/g;
        let propMatch: RegExpExecArray | null;
        while ((propMatch = propPattern.exec(stateMatch[1])) !== null) {
            fieldArr.push(propMatch[1]);
        }
    }
    fieldMapping[slice] = fieldArr;
});

// 4. Generate the selectors file
const outputPath = path.resolve(__dirname, "../redux/autoSelectors.ts");
let result = `// AUTO-GENERATED FILE - DO NOT EDIT! Run generateSelectors.ts to update\n`;

// Always import RootState (assume central)
result += `import { RootState } from "../stores/reduxStore";\n`;

// Import all main slice state types from their correct location
for (const [slice, typeName] of Object.entries(sliceTypeNames)) {

    if (typeToFile[typeName]) {
        
        let relPath = path.relative(path.dirname(outputPath), typeToFile[typeName])
            .replace(/\\/g, "/")
            .replace(/\.ts$/, "");
        if (!relPath.startsWith(".")) relPath = "./" + relPath;
        result += `import { ${typeName} } from "${relPath}";\n`;
    }
}

// Gather extra types for all utility field types
const extraTypes: Set<string> = new Set();
Object.values(fieldTypeMapping).forEach((fieldTypes) => {
    Object.values(fieldTypes).forEach((typeStr) => {
        (typeStr.match(/\b[A-Za-z_][A-Za-z0-9_]+/g) || []).forEach((found) => {
            if (
                !["number", "string", "boolean", "any", "null"].includes(found) &&
                !found.endsWith("State")
            ) {
                extraTypes.add(found.replace(/\[\]$/, ""));
            }
        });
    });
});

extraTypes.forEach((type) => {
    if (typeToFile[type]) {
        let relPath = path.relative(path.dirname(outputPath), typeToFile[type])
            .replace(/\\/g, "/")
            .replace(/\.ts$/, "");
        if (!relPath.startsWith(".")) relPath = "./" + relPath;
        result += `import { ${type} } from "${relPath}";\n`;
    } else {
        // fallback: import from central store
        result += `import { ${type} } from "../stores/reduxStore";\n`;
    }
});

result += `\nexport const selectors = {\n`;
for (const slice of Object.keys(fieldMapping)) {
    result += `  ${slice}: {\n`;
    result += `    _: (state: RootState) => state.${slice},\n`;
    for (const field of fieldMapping[slice]) {
        result += `    ${field}: (state: RootState) => state.${slice}.${field},\n`;
    }
    result += `  },\n`;
}
result += `} as const;\n`;

// Flattened selector map
result += `\n// Flattened selector map\nexport const selectorMap = {} as Record<SelectorKeys, (state: RootState) => any>;
type SelObj = typeof selectors;
export type SelectorKeys =
  { [S in keyof SelObj]: \`\${S & string}.\${keyof SelObj[S] & string}\` }[keyof SelObj];

(Object.keys(selectors) as Array<keyof SelObj>).forEach(slice => {
  const fields = selectors[slice];
  (Object.keys(fields) as Array<keyof typeof fields>).forEach(field => {
    const key = \`\${slice}.\${field}\` as SelectorKeys;
    selectorMap[key] = fields[field];
  });
});
`;

// Generate SelectorResult type
let selectorResultString = `export type SelectorResult<K extends SelectorKeys> =\n`;
for (const slice of Object.keys(fieldMapping)) {
    selectorResultString += `  K extends "${slice}._" ? ${sliceTypeNames[slice]} :\n`;
    for (const field of fieldMapping[slice]) {
        let fieldType = fieldTypeMapping[slice][field] || "any";
        selectorResultString += `  K extends "${slice}.${field}" ? ${fieldType} :\n`;
    }
}
selectorResultString += "  any;\n";
result += selectorResultString;

// Write result to file
fs.writeFileSync(outputPath, result, "utf8");
console.log("Selectors generated in", outputPath);