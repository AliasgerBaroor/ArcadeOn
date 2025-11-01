import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Subscriptions({
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
        fill="#607d8b"
        d="M21 1H3C1.346 1 0 2.346 0 4v16c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3z"
        data-original="#607d8b"
      />
      <Path
        fill="#fff"
        d="M21 21H3c-.551 0-1-.448-1-1V6h20v14c0 .552-.449 1-1 1z"
        data-original="#ffffff"
      />
      <Path
        fill="#ffc107"
        d="M12 19.018a.75.75 0 01-.555-.244l-5.25-5.772a.75.75 0 01-.021-.985l2.303-2.764a.748.748 0 01.576-.27h5.894c.223 0 .434.098.576.27l2.303 2.764a.75.75 0 01-.021.985l-5.25 5.772a.75.75 0 01-.555.244z"
        data-original="#ffc107"
      />
      <Path
        fill="#546d79"
        d="M12 1H3C1.346 1 0 2.346 0 4v16c0 1.654 1.346 3 3 3h9v-2H3c-.551 0-1-.448-1-1V6h10z"
        data-original="#546d79"
      />
      <Path
        fill="#dedede"
        d="M12 6H2v14c0 .552.449 1 1 1h9v-1.982a.75.75 0 01-.555-.244l-5.25-5.772a.75.75 0 01-.021-.985l2.303-2.764a.748.748 0 01.576-.27H12z"
        data-original="#dedede"
      />
      <Path
        fill="#dea806"
        d="M12 8.982H9.053a.745.745 0 00-.576.27l-2.303 2.764a.75.75 0 00.021.985l5.25 5.772a.749.749 0 00.555.244z"
        data-original="#dea806"
      />
    </Svg>
  );
}
