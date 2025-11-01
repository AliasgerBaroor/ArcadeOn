import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function MinimizedAnimations({
  color = "#242a2a",
  size = 24,
  style,
  ...props
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      {...props}
    >
      <Path
        fill="#cfd8dc"
        d="M22.25 0H9.75C8.785 0 8 .785 8 1.75v5.5C8 8.215 8.785 9 9.75 9h12.5C23.215 9 24 8.215 24 7.25v-5.5C24 .785 23.215 0 22.25 0z"
        data-original="#cfd8dc"
      />
      <Path
        fill="#90a4ae"
        d="M23.25 10.5H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zm0 3H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zm0 3H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zm0 3H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zm0 3H8.75a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5zM1.75 24h2.5C5.215 24 6 23.215 6 22.25V1.75C6 .785 5.215 0 4.25 0h-2.5C.785 0 0 .785 0 1.75v20.5C0 23.215.785 24 1.75 24z"
        data-original="#90a4ae"
      />
      <Path
        fill="#b4bcc0"
        d="M16 0H9.75C8.785 0 8 .785 8 1.75v5.5C8 8.215 8.785 9 9.75 9H16V0z"
        data-original="#b4bcc0"
      />
      <Path
        fill="#7d8f97"
        d="M16 10.5H8.75a.75.75 0 000 1.5H16v-1.5zm0 3H8.75a.75.75 0 000 1.5H16v-1.5zm0 3H8.75a.75.75 0 000 1.5H16v-1.5zm0 3H8.75a.75.75 0 000 1.5H16v-1.5zm0 3H8.75a.75.75 0 000 1.5H16v-1.5zM3 0H1.75C.785 0 0 .785 0 1.75v20.5C0 23.215.785 24 1.75 24H3V0z"
        data-original="#7d8f97"
      />
    </Svg>
  );
}
