import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Filter } from "./Filter";
import { FiltersGroupProps } from "@/src/types/filters";

export const FilterGroup: React.FC<FiltersGroupProps> = ({ filters, setFilters }) => {
    const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);

    return (
        <FlatList
            data={filters}
            horizontal
            keyExtractor={(item) => item.value}
            contentContainerStyle={styles.filterGroup}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Filter
                    f={item}
                    selected={item.selected}
                    setFilters={setFilters}
                    dropdownOpen={openDropdownKey === item.value}
                    setDropdownOpen={(open) => setOpenDropdownKey(open ? item.value : null)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    filterGroup: {
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        paddingVertical: 8,
    },
});