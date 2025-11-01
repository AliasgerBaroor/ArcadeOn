import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function GlobalPrivacyControls({
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
        fill="#90a4ae"
        d="M12 8.75a1 1 0 01-1-1V5c0-1.654-1.346-3-3-3S5 3.346 5 5v2.75a1 1 0 11-2 0V5c0-2.757 2.243-5 5-5s5 2.243 5 5v2.75a1 1 0 01-1 1z"
        data-original="#90a4ae"
      />
      <Path
        fill="#ffc107"
        d="M13.75 20H2.25C1.01 20 0 18.99 0 17.75v-8.5C0 8.01 1.01 7 2.25 7h11.5C14.99 7 16 8.01 16 9.25v8.5c0 1.24-1.01 2.25-2.25 2.25z"
        data-original="#ffc107"
      />
      <Path
        fill="#7d8f97"
        d="M8 0C5.243 0 3 2.243 3 5v2h2V5c0-1.654 1.346-3 3-3z"
        data-original="#7d8f97"
      />
      <Path
        fill="#dea806"
        d="M8 7H2.25C1.01 7 0 8.01 0 9.25v8.5C0 18.99 1.01 20 2.25 20H8z"
        data-original="#dea806"
      />
      <Path
        fill="#2196f3"
        d="M20 19c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2zm3.25 5h-6.5a.75.75 0 01-.75-.75v-.5A2.752 2.752 0 0118.75 20h2.5A2.752 2.752 0 0124 22.75v.5a.75.75 0 01-.75.75z"
        data-original="#2196f3"
      />
      <Path
        d="M20 15c-1.103 0-2 .896-2 2s.897 2 2 2zm0 5h-1.25A2.752 2.752 0 0016 22.75v.5c0 .414.336.75.75.75H20z"
        data-original="#1d83d4"
        fill="#1d83d4"
      />
    </Svg>
  );
}
