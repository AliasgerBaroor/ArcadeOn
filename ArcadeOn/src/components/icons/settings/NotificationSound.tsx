import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function NotificationSound({
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
        fill="#4caf50"
        d="M22 10.882a1 1 0 01-1-1c0-2.805-1.092-5.441-3.075-7.425a.999.999 0 111.414-1.414A12.418 12.418 0 0123 9.882a1 1 0 01-1 1zm-20 0a1 1 0 01-1-1c0-3.339 1.3-6.478 3.661-8.839a.999.999 0 111.414 1.414A10.432 10.432 0 003 9.882a1 1 0 01-1 1z"
        data-original="#4caf50"
      />
      <Path
        fill="#ffa000"
        d="M16 20a4 4 0 11-8 0 4 4 0 018 0zM12 4a1 1 0 01-1-1V1a1 1 0 012 0v2a1 1 0 01-1 1z"
        data-original="#ffa000"
      />
      <Path
        fill="#ffc107"
        d="M21.379 16.912A6.696 6.696 0 0119 11.788V9c0-3.86-3.141-7-7-7S5 5.14 5 9v2.788a6.705 6.705 0 01-2.388 5.133A1.752 1.752 0 003.75 20h16.5a1.752 1.752 0 001.129-3.088z"
        data-original="#ffc107"
      />
      <Path
        fill="#429846"
        d="M5.368.75a.997.997 0 00-.707.293A12.418 12.418 0 001 9.882a1 1 0 002 0C3 7.077 4.092 4.44 6.075 2.457A.999.999 0 005.368.75z"
        data-original="#429846"
      />
      <Path
        fill="#de8b00"
        d="M12 20H8a4 4 0 004 4zm0-20a1 1 0 00-1 1v1.071A7.027 7.027 0 0112 2z"
        data-original="#de8b00"
      />
      <Path
        fill="#dea806"
        d="M12 2c-.339 0-.673.024-1 .071C7.612 2.558 5 5.48 5 9v2.788a6.705 6.705 0 01-2.388 5.133A1.752 1.752 0 003.75 20H12z"
        data-original="#dea806"
      />
    </Svg>
  );
}
