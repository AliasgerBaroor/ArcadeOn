import React, { ComponentType } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import Typography from "../typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";
import { IconProps } from "@/src/types/icons";

type ButtonWidth = "full" | "half" | "content";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "success"
  | "warning"
  | "outline"
  | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  width?: ButtonWidth;
  icon?: ComponentType<IconProps>;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  btnStyle?: ViewStyle;
  textStyle?: object;
  testID?: string;
  typographyVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b1"
    | "b2"
    | "b3"
    | "b4"
    | "b5"
    | "b6";
}

type WithCustomButton = ButtonBaseProps & {
  customButton: React.ReactElement;
  children?: React.ReactNode; 
};

type WithDefaultButton = ButtonBaseProps & {
  customButton?: undefined;
  children: React.ReactNode;
};

type ButtonProps = WithCustomButton | WithDefaultButton;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  width = "content",
  icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  onPress,
  style,
  btnStyle,
  textStyle,
  testID,
  customButton = null,
  typographyVariant = "b2",
}) => {
  const colors = useThemeStore((s) => s.colors);
  const Icon = icon;

  const getVariantColor = () => {
    switch (variant) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.accent;
      case "error":
        return colors.error;
      case "success":
        return colors.success;
      case "warning":
        return colors.warning;
      case "outline":
        return colors.bgCard;
      case "ghost":
        return "transparent";
      default:
        return colors.primary;
    }
  };

  const backgroundColor = getVariantColor();
  const borderColor =
    variant === "outline" ? colors.borderStrong : "transparent";
  const textColor =
    variant === "ghost"
      ? colors.textHigh
      : variant === "outline"
      ? colors.primary
      : colors.textInverse;

  let btnWidthStyle = {};
  if (width === "full") btnWidthStyle = { width: "100%" };
  else if (width === "half") btnWidthStyle = { width: "50%" };

  // --- Custom Button ---
if (customButton) {
  return React.cloneElement(customButton as React.ReactElement<any>, {
    onPress: disabled || loading ? undefined : onPress,
    testID,
    disabled: disabled || loading,
    style: [
      btnStyle,
      style,
      (customButton as React.ReactElement<any>).props.style,
    ],
    children: loading ? (
      <ActivityIndicator color={textColor} size="small" />
    ) : (
      (customButton as React.ReactElement<any>).props.children ?? children
    ),
    ...(customButton as React.ReactElement<any>).props,
  });
}

  // --- Default Button ---
  return (
    <View style={[{ alignItems: "center" }, btnStyle]}>
      <TouchableOpacity
        testID={testID}
        onPress={disabled || loading ? undefined : onPress}
        style={[
          styles.button,
          { backgroundColor, borderColor },
          btnWidthStyle,
          disabled && styles.disabled,
          style,
        ]}
        activeOpacity={disabled || loading ? 1 : 0.7}
        accessibilityRole="button"
        accessibilityState={{ disabled, busy: loading }}
        disabled={disabled || loading}
      >
        {loading ? (
          <ActivityIndicator color={textColor} size="small" />
        ) : (
          <View
            style={[
              styles.inner,
              iconPosition === "right" && { flexDirection: "row-reverse" },
            ]}
          >
            {Icon && <Icon size={20} color={textColor} style={styles.icon} />}
            <Typography
              variant={typographyVariant}
              color={textColor}
              style={[styles.text, textStyle]}
            >
              {children}
            </Typography>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 44,
  },
  disabled: {
    opacity: 0.5,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button;