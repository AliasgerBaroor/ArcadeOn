import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function LoginHistory({
  color = "#242a2a",
  size = 24,
  style,
  ...props
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
      <Path
        fill="#2196f3"
        d="M21.25 4l-.12.03L21 4h-1V1c0-.55-.45-1-1-1H4C2.52 0 1.29 1.08 1.05 2.5L1 2.75v18.5C1 22.77 2.23 24 3.75 24h17.5c.41 0 .75-.34.75-.75V4.75c0-.41-.34-.75-.75-.75z"
        data-original="#2196f3"
      />
      <Path
        fill="#fafafa"
        d="M11.5 20.5C7.92 20.5 5 17.58 5 14s2.92-6.5 6.5-6.5S18 10.42 18 14s-2.92 6.5-6.5 6.5z"
        data-original="#fafafa"
      />
      <Path
        fill="#fff"
        d="M18 4H4c-.55 0-1-.45-1-1s.45-1 1-1h14z"
        data-original="#ffffff"
      />
      <Path
        fill="#607d8b"
        d="M13 16.5a.997.997 0 01-.707-.293l-1.5-1.5A.996.996 0 0110.5 14v-3a1 1 0 112 0v2.586l1.207 1.207A.999.999 0 0113 16.5z"
        data-original="#607d8b"
      />
      <Path
        fill="#1d83d4"
        d="M11.5 0H4C2.52 0 1.29 1.08 1.05 2.5L1 2.75v18.5C1 22.77 2.23 24 3.75 24h7.75v-3.5C7.92 20.5 5 17.58 5 14s2.92-6.5 6.5-6.5V4H4c-.55 0-1-.45-1-1s.45-1 1-1h7.5z"
        data-original="#1d83d4"
      />
      <Path
        fill="#dadada"
        d="M11.5 7.5C7.92 7.5 5 10.42 5 14s2.92 6.5 6.5 6.5v-5.086l-.707-.707A.996.996 0 0110.5 14v-3a1 1 0 011-1z"
        data-original="#dadada"
      />
      <Path
        fill="#dedede"
        d="M9 2H4c-.55 0-1 .45-1 1s.45 1 1 1h6.75V2z"
        data-original="#dedede"
      />
      <Path
        fill="#546d79"
        d="M11.5 10a1 1 0 00-1 1v3c0 .266.105.52.293.707l.707.707z"
        data-original="#546d79"
      />
    </Svg>
  );
}
