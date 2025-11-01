import React, { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "../../typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";
import Cross from "../../icons/Cross";
import Chevron from "../../icons/Chevron";
import Dropdown from "../../atoms/Dropdown";

export type FilterType = {
    value: string;
    options: any[];
    selected?: boolean;
    selectedLabel?: string;
};

export interface FilterProps {
    f: FilterType;
    selected?: boolean;
    setFilters: React.Dispatch<React.SetStateAction<FilterType[]>>;
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
}

export const Filter: React.FC<FilterProps> = ({
    f,
    selected = false,
    setFilters,
    dropdownOpen,
    setDropdownOpen,
}) => {
    const { width: screenWidth } = Dimensions.get("window");

    const borderDefault = useThemeStore((s) => s.colors.borderDefault);
    const bgFocus = useThemeStore((s) => s.colors.primary);
    const text = useThemeStore((s) => s.colors.white);
    const textHigh = useThemeStore((s) => s.colors.textHigh);

    const isDropdown = f.options && f.options.length > 0;
    const chipRef = useRef<View | null>(null);
    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);

    const handlePress = () => {
        if (isDropdown && chipRef.current) {
            if (dropdownOpen) {
                setDropdownOpen(false);
            } else {
                chipRef.current.measureInWindow((x, y, width, height) => {
                    const dropdownWidth = Math.max(screenWidth * 0.4, 200);
                    const chipRight = x + width;
                    const roomRight = screenWidth - chipRight;
                    let left = x;
                    if (roomRight < dropdownWidth) {
                        left = Math.max(chipRight - dropdownWidth, 8);
                    }
                    setDropdownPos({ top: y + height + 32, left });
                    setDropdownOpen(true);
                });
            }
        } else if (!selected) {
            setFilters((prev) =>
                prev.map((filter) =>
                    filter.value === f.value ? { ...filter, selected: true } : filter
                )
            );
        }
    };

    const handleSelect = (opt: any) => {
        const isNone = (typeof opt === "string" ? opt : opt.label || String(opt)) === "none";
        setFilters((prev) =>
            prev.map((filter) =>
                filter.value === f.value
                    ? isNone
                        ? { ...filter, selected: false, selectedLabel: undefined }
                        : {
                            ...filter,
                            selected: true,
                            selectedLabel: typeof opt === "string" ? opt : opt.label || String(opt),
                        }
                    : filter
            )
        );
        setDropdownOpen(false);
    };

    return (
        <>
            <Pressable
                ref={chipRef}
                style={[
                    styles.chip,
                    selected || dropdownOpen
                        ? { backgroundColor: bgFocus, borderColor: bgFocus, borderWidth: 1 }
                        : { backgroundColor: "transparent", borderColor: borderDefault, borderWidth: 1 },
                ]}
                onPress={handlePress}
            >
                <Typography variant="b2" color={selected || dropdownOpen ? text : undefined}>
                    {f.selectedLabel ?? f.value}
                </Typography>
                {isDropdown ? (
                    <Chevron
                        size={16}
                        color={selected || dropdownOpen ? text : textHigh}
                        style={{ transform: [{ rotate: dropdownOpen ? "180deg" : "0deg" }] }}
                    />
                ) : (
                    selected && (
                        <TouchableOpacity
                            onPress={() =>
                                setFilters((prev) =>
                                    prev.map((filter) =>
                                        filter.value === f.value ? { ...filter, selected: false, selectedLabel: undefined } : filter
                                    )
                                )
                            }
                        >
                            <Cross color={text} size={16} />
                        </TouchableOpacity>
                    )
                )}
            </Pressable>
            <Dropdown
                open={dropdownOpen}
                options={f.options}
                onSelect={handleSelect}
                onClose={() => setDropdownOpen(false)}
                top={dropdownPos?.top}
                left={dropdownPos?.left}
            />
        </>
    );
};

const styles = StyleSheet.create({
    chip: {
        borderRadius: 48,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
});