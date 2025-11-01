import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function About({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
        data-original="#607d8b"
      />
      <Path
        fill="#fafafa"
        d="M12 5a1 1 0 110 2 1 1 0 110-2zm2.25 14h-4.5a1 1 0 110-2H11v-6h-.75a1 1 0 110-2H12a1 1 0 011 1v7h1.25a1 1 0 110 2z"
        data-original="#fafafa"
      />
      <Path
        fill="#546d79"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12v-5H9.75a1 1 0 110-2H11v-6h-.75a1 1 0 110-2H12V7a1 1 0 110-2z"
        data-original="#546d79"
      />
      <Path
        d="M12 5a1 1 0 100 2zm0 4h-1.75a1 1 0 100 2H11v6H9.75a1 1 0 100 2H12z"
        data-original="#dadada"
        fill="#dadada"
      />
    </Svg>
  );
}
