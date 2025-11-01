import React from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ViewStyle,
  Text,
} from "react-native";
import { useThemeStore } from "@/src/stores/themeStore";

type SwitchSize = "small" | "medium" | "large";
type Variant =
  | "primary"
  | "accent"
  | "success"
  | "error"
  | "warning"
  | "secondary"
  | "info";

interface SwitchProps {
  value: boolean;
  onValueChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  style?: ViewStyle;
  label?: string;
  colors?: {
    active: string;
    inactive: string;
    thumb: string;
    disabled: string;
    text: string;
  };
  variant?: Variant;
}

const sizeConfig = {
  small: { width: 36, height: 22, thumb: 18, font: 12, padding: 2 },
  medium: { width: 48, height: 28, thumb: 24, font: 15, padding: 3 },
  large: { width: 64, height: 38, thumb: 32, font: 19, padding: 4 },
};

const getVariantColors = (themeColors: any, variant: Variant) => ({
  active: themeColors[variant],
  inactive: themeColors.bgBorder,
  thumb: themeColors.white,
  disabled: themeColors.stateDisabled,
  text: themeColors.textBody,
});

const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  size = "medium",
  style,
  label,
  colors,
  variant = "primary",
}) => {
  const themeColors = useThemeStore((s) => s.colors);
  const colorSet = colors || getVariantColors(themeColors, variant);
  const s = sizeConfig[size];

  return (
    <TouchableOpacity
      onPress={() => !disabled && onValueChange?.(!value)}
      activeOpacity={disabled ? 1 : 0.8}
      style={[
        styles.row,
        style,
        { opacity: disabled ? 0.6 : 1, padding: s.padding },
      ]}
      disabled={disabled}
    >
      {label && (
        <Text
          style={{
            marginRight: 8,
            fontSize: s.font,
            color: colorSet.text,
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          {
            width: s.width,
            height: s.height,
            borderRadius: s.height / 2,
            backgroundColor: disabled
              ? colorSet.disabled
              : value
              ? colorSet.active
              : colorSet.inactive,
            justifyContent: "center",
          },
        ]}
      >
        <Animated.View
          style={{
            width: s.thumb,
            height: s.thumb,
            borderRadius: s.thumb / 2,
            backgroundColor: colorSet.thumb,
            position: "absolute",
            left: value ? s.width - s.thumb - s.padding : s.padding,
            top: (s.height - s.thumb) / 2,
            shadowColor: colorSet.thumb,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Switch;