import { TextProps, StyleProp, TextStyle } from "react-native";
import { typography } from "../theme/typography";

type Variant = keyof typeof typography;

export type TypographyProps = TextProps & {
  variant?: Variant;
  color?: string;
  fontWeight?: 
  "normal" | "bold" | "condensed" |
  "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" |
  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
  undefined;
  style?: StyleProp<TextStyle>;
};