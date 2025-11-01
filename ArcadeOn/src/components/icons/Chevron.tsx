import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Chevron({
  color = "#242a2a",
  size = 24,
  rotate = 0,
  style,
  strokeWidth = 1.5,
  ...props
}: IconProps & { strokeWidth?: number }) {
  const rotateAngle = typeof rotate === "number" ? `${rotate}deg` : rotate;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      style={[style, { transform: [{ rotate: rotateAngle }] }]}
      {...props}
    >
      <Path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit={16}
      />
    </Svg>
  );
}
