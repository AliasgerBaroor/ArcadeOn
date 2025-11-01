import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function InGameReminder({
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
        fill="#f44336"
        d="M18 0c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
        data-original="#f44336"
      />
      <Path
        fill="#d43a2f"
        d="M18 0c-2.757 0-5 2.243-5 5s2.243 5 5 5z"
        data-original="#d43a2f"
      />
      <Path
        fill="#ffa000"
        d="M14 20a4 4 0 11-8 0 4 4 0 018 0z"
        data-original="#ffa000"
      />
      <Path
        fill="#ffc107"
        d="M17.008 11.921C13.618 11.437 11 8.522 11 5c0-1 .214-1.949.594-2.81A6.982 6.982 0 0010 2C6.141 2 3 5.14 3 9v2.788a6.705 6.705 0 01-2.388 5.133A1.752 1.752 0 001.75 20h16.5a1.752 1.752 0 001.129-3.088 6.69 6.69 0 01-2.371-4.991z"
        data-original="#ffc107"
      />
      <Path
        fill="#de8b00"
        d="M9.875 20H6a4 4 0 003.875 3.998z"
        data-original="#de8b00"
      />
      <Path
        fill="#dea806"
        d="M9.875 2.001C6.073 2.068 3 5.182 3 9v2.788a6.705 6.705 0 01-2.388 5.133A1.752 1.752 0 001.75 20h8.125z"
        data-original="#dea806"
      />
    </Svg>
  );
}
