// AUTO-GENERATED FILE - DO NOT EDIT! Run generateSelectors.ts to update
import { RootState } from "../stores/reduxStore";

export const selectors = {
  progression: {
    _: (state: RootState) => state.progression,
    points: (state: RootState) => state.progression.points,
    coins: (state: RootState) => state.progression.coins,
    level: (state: RootState) => state.progression.level,
    tier: (state: RootState) => state.progression.tier,
    achievements: (state: RootState) => state.progression.achievements,
    dailyStreak: (state: RootState) => state.progression.dailyStreak,
    redemptions: (state: RootState) => state.progression.redemptions,
  },
  inventory: {
    _: (state: RootState) => state.inventory,
    items: (state: RootState) => state.inventory.items,
  },
  social: {
    _: (state: RootState) => state.social,
    friends: (state: RootState) => state.social.friends,
    requests: (state: RootState) => state.social.requests,
    guilds: (state: RootState) => state.social.guilds,
  },
  gameStats: {
    _: (state: RootState) => state.gameStats,
    stats: (state: RootState) => state.gameStats.stats,
  },
} as const;


// Flattened selector map
export const selectorMap = {} as Record<SelectorKeys, (state: RootState) => any>;
type SelObj = typeof selectors;
export type SelectorKeys =
  { [S in keyof SelObj]: `${S & string}.${keyof SelObj[S] & string}` }[keyof SelObj];

(Object.keys(selectors) as Array<keyof SelObj>).forEach(slice => {
  const fields = selectors[slice];
  (Object.keys(fields) as Array<keyof typeof fields>).forEach(field => {
    const key = `${slice}.${field}` as SelectorKeys;
    selectorMap[key] = fields[field];
  });
});








import * as fs from 'fs';
import * as path from 'path';

// Types
type SliceFieldMap = Record<string, string[]>;

// Helpers
function resolveImportPath(importPath: string): string {
    if (importPath.startsWith('@/')) {
        return path.resolve(__dirname, '../../' + importPath.slice(2) + '.ts');
    }
    return path.resolve(__dirname, '../' + importPath + '.ts');
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Script Bussiness Logic
const rootStatePath = path.resolve(__dirname, "../stores/reduxStore.ts");
const fileContent = fs.readFileSync(rootStatePath, "utf8");

// 1. Parse import paths for slice reducers
const importPattern = /import (\w+) from ["']([^"']+)["']/g;
const importPaths: Record<string, string> = {};
let impMatch: RegExpExecArray | null;
while ((impMatch = importPattern.exec(fileContent))) {
    if (impMatch[1].includes('Reducer')) {
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

// 3. Extract fields from initialState of each slice file
const fieldMapping: SliceFieldMap = {};
Object.entries(sliceMap).forEach(([slice, reducerVar]) => {
    const importPath = importPaths[reducerVar];
    if (!importPath) return;
    const absSliceFile = resolveImportPath(importPath);
    if (!fs.existsSync(absSliceFile)) {
        console.warn(`Slice file not found: ${absSliceFile}`);
        return;
    }
    const sliceContent = fs.readFileSync(absSliceFile, "utf8");
    const stateMatch = sliceContent.match(/const initialState\s*[:=][^{]*{([\s\S]*?)}/);
    if (!stateMatch) {
        console.warn(`No initialState found in: ${absSliceFile}`);
        return;
    }
    const propPattern = /(\w+)\s*:/g;
    let fieldArr: string[] = [];
    let propMatch: RegExpExecArray | null;
    while ((propMatch = propPattern.exec(stateMatch[1])) !== null) {
        fieldArr.push(propMatch[1]);
    }
    fieldMapping[slice] = fieldArr;
});

// 4. Generate the selectors file
const outputPath = path.resolve(__dirname, "../redux/autoSelectors.ts");
let result = `// AUTO-GENERATED FILE - DO NOT EDIT! Run generateSelectors.ts to update
import { RootState } from "../stores/reduxStore";

export const selectors = {
`;

for (const slice of Object.keys(fieldMapping)) {
    result += `  ${slice}: {\n`;
    result += `    _: (state: RootState) => state.${slice},\n`;
    for (const field of fieldMapping[slice]) {
        result += `    ${field}: (state: RootState) => state.${slice}.${field},\n`;
    }
    result += `  },\n`;
}

result += `} as const;\n`;
result += `
// Flattened selector map
export const selectorMap = {} as Record<SelectorKeys, (state: RootState) => any>;
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

// Generate the SelectorResult type
let selectorResultString = `type SelectorResult<K extends SelectorKeys> =\n`;

for (const slice of Object.keys(fieldMapping)) {
    selectorResultString += `  K extends "${slice}._" ? ${capitalize(slice)}State :\n`;
    for (const field of fieldMapping[slice]) {
        // Infer field type as string for now (replace this with logic from your slice types if needed)
        // You can parse via regex from the slice file to get the correct type!
        // For demonstration, use 'any' or hardcode types:
        let fieldType = "any";
        selectorResultString += `  K extends "${slice}.${field}" ? ${fieldType} :\n`;
    }
}

// End with fallback
selectorResultString += "  any;\n";

result += selectorResultString;


fs.writeFileSync(outputPath, result, "utf8");
console.log("Selectors generated in", outputPath);