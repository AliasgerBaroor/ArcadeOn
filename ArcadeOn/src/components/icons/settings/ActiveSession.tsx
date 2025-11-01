import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function ActiveSession({
  color = "#242a2a",
  size = 24,
  style,
  ...props
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      style={style}
      {...props}
    >
      <Circle
        cx={256}
        cy={256}
        r={256}
        fill="#4ab8a1"
        data-original="#4ab8a1"
      />
      <Path
        d="M100 396c-15.436 0-28-12.564-28-28V140c0-15.436 8.564-24 24-24h316c15.436 0 28 12.564 28 28v224c0 15.436-12.564 28-28 28H100z"
        fill="#ccc"
        data-original="#cccccc"
      />
      <Circle
        cx={95.812}
        cy={140}
        r={8}
        fill="#cc584c"
        data-original="#cc584c"
      />
      <Circle
        cx={119.812}
        cy={140}
        r={8}
        fill="#ffd464"
        data-original="#ffd464"
      />
      <Circle
        cx={143.812}
        cy={140}
        r={8}
        fill="#198058"
        data-original="#198058"
      />
      <Path
        d="M403.812 144c0 2.2-1.8 4-4 4h-232c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h232c2.2 0 4 1.8 4 4v8zM424 372c0 4.4-3.6 8-8 8H96c-4.4 0-8-3.6-8-8V172c0-4.4 3.6-8 8-8h320c4.4 0 8 3.6 8 8v200z"
        fill="#f5f5f5"
        data-original="#f5f5f5"
      />
      <Path
        d="M256 338c-31.98 0-58-26.02-58-58s26.02-58 58-58 58 26.02 58 58-26.02 58-58 58zm0-104c-25.364 0-46 20.636-46 46s20.636 46 46 46 46-20.636 46-46-20.636-46-46-46z"
        fill="#4ab8a1"
        data-original="#4ab8a1"
      />
      <Path
        d="M244 302a5.981 5.981 0 01-4.244-1.756l-12-12c-2.344-2.336-2.344-6.14 0-8.484s6.14-2.344 8.484 0l7.76 7.756 31.756-31.756a5.997 5.997 0 018.484 0 5.997 5.997 0 010 8.484l-36 36A5.965 5.965 0 01244 302z"
        fill="#4ab8a1"
        data-original="#4ab8a1"
      />
    </Svg>
  );
}
