import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Filter } from "./Filter";
import { FiltersGroupProps } from "@/src/types/filters";
<<<<<<< HEAD

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
=======
import { SafeAreaView } from "react-native-safe-area-context";

export const FilterGroup: React.FC<FiltersGroupProps> = ({
  filters,
  setFilters,
}) => {
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
          setDropdownOpen={(open) =>
            setOpenDropdownKey(open ? item.value : null)
          }
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
>>>>>>> 7f535493530cb308795cc864f5ee2e864e3ab4cd
