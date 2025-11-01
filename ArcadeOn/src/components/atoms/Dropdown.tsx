import React, { ComponentType } from "react";
import { Dimensions, View, Pressable, StyleSheet } from "react-native";
import { Portal } from "react-native-portalize";
import Typography from "../typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";
import { IconProps } from "@/src/types/icons";

const { width: screenWidth } = Dimensions.get("screen");

export interface DropdownProps {
  open: boolean;
  options: {
    label: string;
    icon?: ComponentType<IconProps>;
  }[];
  onSelect: (option: any) => void;
  onClose: () => void;
  top?: number;
  left?: number;
  width?: number
}

const Dropdown: React.FC<DropdownProps> = ({
  open,
  options,
  onSelect,
  onClose,
  top = 100,
  left = 16,
  width
}) => {
  const textHigh = useThemeStore(s => s.colors.textHigh);
  const red = useThemeStore(s => s.colors.error);

  return  (
    <Portal>
      {open && (
        <View
          style={{
            position: "absolute",
            top,
            left,
            backgroundColor: "white",
            borderRadius: 8,
            elevation: 8,
            zIndex: 9999,
            minWidth: width ?? screenWidth * 0.4,
            maxWidth: width ?? screenWidth - 32,
          }}
        >
          {options.map((opt, index) => {
            const optLabel = typeof opt === "string" ? opt : opt.label || String(opt);
            const isSeparator = optLabel.startsWith("sep-");
            const displayLabel = isSeparator ? optLabel.replace(/^sep-/, "") : optLabel;

            const IconComponent =  opt?.icon ? opt?.icon : undefined;
            const logoutColour = displayLabel.toLowerCase() === "logout" ? red : textHigh
            return (
              <View key={index} style={{paddingBottom: 12, paddingTop: index === 0 ? 12 : 0}}>
              {isSeparator && (
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#eee",
                    width: "100%",
                    alignSelf: "center",
                    marginBottom: 12,
                  }}
                />
              )}
              <View style={{ paddingHorizontal: 24}}>
                <Pressable
                  onPress={() => {
                    onSelect(opt);
                    onClose();
                  }} style={styles.dropdownItem}>
                    {typeof IconComponent === "function" ? <IconComponent size={16} color={logoutColour} /> : null}
                    
                  <Typography color={logoutColour} variant="b3">{displayLabel}</Typography>
                </Pressable>
              </View>
            </View>
            );
          })}
        </View>
      )}
    </Portal>
  )
};

const styles = StyleSheet.create({
  dropdownItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  }
})

export default Dropdown;