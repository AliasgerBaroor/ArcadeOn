import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Email({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      style={style}
      {...props}
    >
      <Path d="M64 64h384v384H64z" fill="#eceff1" data-original="#eceff1" />
      <Path
        d="M256 296.384L448 448V148.672z"
        fill="#cfd8dc"
        data-original="#cfd8dc"
      />
      <Path
        d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
        fill="#f44336"
        data-original="#f44336"
      />
    </Svg>
  );
}