import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function LocationPermissions({
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
        fill="#1875FF"
        d="M12 24a.758.758 0 01-.499-.189C11.154 23.502 3 16.168 3 9.065 3 4.066 7.038 0 12 0s9 4.066 9 9.065c0 7.103-8.154 14.437-8.501 14.745A.754.754 0 0112 24z"
        data-original="#1875FF"
      />
      <Path
        fill="#fff"
        d="M12 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
        data-original="#ffffff"
      />
      <Path
        fill="#135DCC"
        d="M12 0C7.038 0 3 4.066 3 9.065c0 7.103 8.154 14.437 8.501 14.745.143.126.321.19.499.19V14c-2.757 0-5-2.243-5-5s2.243-5 5-5z"
        data-original="#135DCC"
      />
      <Path
        fill="#dedede"
        d="M12 4C9.243 4 7 6.243 7 9s2.243 5 5 5z"
        data-original="#dedede"
      />
    </Svg>
  );
}
