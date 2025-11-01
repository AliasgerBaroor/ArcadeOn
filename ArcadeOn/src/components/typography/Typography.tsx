import React from "react";
import { Text } from "react-native";
import { typography } from "../../theme/typography";
import { TypographyProps } from "@/src/types/typography";

export default function Typography({ variant = "b3", color = "textHigh", style, children, fontWeight, ...rest }: TypographyProps) {
  return (
    <Text
  style={[
    typography[variant],
    style,
    { color },
    fontWeight !== undefined ? { fontWeight } : null,
  ]}
  {...rest}
>
  {children}
</Text>

  );
}
