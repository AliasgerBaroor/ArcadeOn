import React, { useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Typography from "../../typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";
import Cross from "../../icons/Cross";
import Chevron from "../../icons/Chevron";
import Dropdown from "../../atoms/Dropdown";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
  flatListRef?: React.RefObject<any>;
}

export const Filter: React.FC<FilterProps> = ({
  f,
  selected = false,
  setFilters,
  dropdownOpen,
  setDropdownOpen,
}) => {
  const { width: screenWidth } = Dimensions.get("window");
  const insets = useSafeAreaInsets();

  const borderDefault = useThemeStore((s) => s.colors.borderDefault);
  const bgFocus = useThemeStore((s) => s.colors.primary);
  const text = useThemeStore((s) => s.colors.white);
  const textHigh = useThemeStore((s) => s.colors.textHigh);

  const isDropdown = f.options && f.options.length > 0;
  const chipRef = useRef<View | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

const handlePress = () => {
  if (isDropdown && chipRef.current) {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      chipRef.current.measureInWindow((x, y, width, height) => {
        const dropdownWidth = width;
        const dropdownHeightOffset = 45;
        const dropdownY = y + height + dropdownHeightOffset;

        const availableLeft = insets.left + 8;
        const availableRight = screenWidth - insets.right - 8;

        let dropdownX = x;


        if (x + dropdownWidth > availableRight) {
          dropdownX = availableRight - dropdownWidth;
        }
        if (dropdownX < availableLeft) {
          dropdownX = availableLeft;
        }

        setDropdownPos({
          top: dropdownY,
          left: dropdownX,
          width: dropdownWidth,
        });
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

  return (
    <SafeAreaView edges={["right", "left"]}>
      <Pressable
        ref={chipRef}
        style={[
          styles.chip,
          selected || dropdownOpen
            ? { backgroundColor: bgFocus, borderColor: bgFocus, borderWidth: 1 }
            : {
                backgroundColor: "transparent",
                borderColor: borderDefault,
                borderWidth: 1,
              },
        ]}
        onPress={handlePress}
      >
        <Typography
          variant="b2"
          color={selected || dropdownOpen ? text : undefined}
        >
          {f.selectedLabel ?? f.value}
        </Typography>

        {isDropdown ? (
          <Chevron
            size={16}
            color={selected || dropdownOpen ? text : textHigh}
            style={{
              transform: [{ rotate: dropdownOpen ? "180deg" : "0deg" }],
            }}
          />
        ) : (
          selected && (
            <TouchableOpacity
              onPress={() =>
                setFilters((prev) =>
                  prev.map((filter) =>
                    filter.value === f.value
                      ? { ...filter, selected: false, selectedLabel: undefined }
                      : filter
                  )
                )
              }
            >
              <Cross color={text} size={16} />
            </TouchableOpacity>
          )
        )}
      </Pressable>
      {dropdownOpen && (
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={() => setDropdownOpen(false)}
        >
          <View pointerEvents="box-none">
            <SafeAreaView edges={["left", "right"]}>
              <Dropdown
                open={dropdownOpen}
                options={f.options}
                onSelect={(opt) => {
                  const label =
                    typeof opt === "string" ? opt : opt.label || String(opt);
                  const isNone = label === "None";

                  setFilters((prev) =>
                    prev.map((filter) => {
                      if (filter.value !== f.value) return filter;

                      if (isNone) {
                        return {
                          ...filter,
                          selected: false,
                          selectedLabel: undefined,
                        };
                      }

                      return {
                        ...filter,
                        selected: true,
                        selectedLabel: `${f.value} - ${label}`,
                      };
                    })
                  );

                  setDropdownOpen(false);
                }}
                onClose={() => setDropdownOpen(false)}
                top={dropdownPos?.top}
                left={dropdownPos?.left}
                width={dropdownPos?.width}
              />
            </SafeAreaView>
          </View>
        </Pressable>
      )}
    </SafeAreaView>
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
