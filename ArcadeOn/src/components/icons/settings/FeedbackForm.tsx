import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function FeedbackForm({
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
        d="M12.25 13l-.147-.015-3.503-.7a.752.752 0 01-.383-.205L.51 4.373a1.743 1.743 0 010-2.462L1.911.51a1.74 1.74 0 012.461 0l7.707 7.707a.745.745 0 01.205.383l.701 3.504a.75.75 0 01-.735.896z"
        data-original="#607d8b"
      />
      <Path
        fill="#546d79"
        d="M1.21 1.21l-.7.701a1.743 1.743 0 000 2.462l7.707 7.707a.745.745 0 00.383.205l3.503.7.147.015a.75.75 0 00.53-.22z"
        data-original="#546d79"
      />
      <Path
        fill="#607d8b"
        d="M18.666 2.667v1.557H23a1 1 0 001-1v-.557A2.666 2.666 0 0021.333 0c-.736 0-1.397.299-1.888.778a2.693 2.693 0 00-.779 1.889z"
        data-original="#607d8b"
      />
      <Path
        fill="#546d79"
        d="M21.333 0c-.736 0-1.397.299-1.888.778a2.69 2.69 0 00-.779 1.889v1.557h2.667z"
        data-original="#546d79"
      />
      <Path
        fill="#eceff1"
        d="M21.33 0c-.73 0-1.39.3-1.88.78a2.682 2.682 0 00-.78 1.89v18.68c0 1.471-1.2 2.65-2.67 2.65H2.13V8.82l4.67 4.67c.39.39.87.649 1.41.76l3.5.7c.18.03.36.05.54.05.73 0 1.42-.29 1.94-.81.66-.65.94-1.58.76-2.48l-.7-3.5c-.11-.54-.37-1.02-.76-1.41L6.7 0z"
        data-original="#eceff1"
      />
      <Path
        fill="#cdd0d2"
        d="M2.13 8.82V24h8.37v-9.292l-2.29-.458c-.54-.11-1.02-.37-1.41-.76zM10.5 0H6.7l3.8 3.805z"
        data-original="#cdd0d2"
      />
      <Path
        fill="#607d8b"
        d="M1 19.019a1 1 0 00-1 1v1.869C0 23.051.96 24 2.133 24H16a2.692 2.692 0 01-1.888-.778 2.601 2.601 0 01-.778-1.867v-1.336a1 1 0 00-1-1z"
        data-original="#607d8b"
      />
      <Path
        fill="#546d79"
        d="M6.5 19.019H1a1 1 0 00-1 1v1.869C0 23.051.96 24 2.133 24H6.5z"
        data-original="#546d79"
      />
    </Svg>
  );
}
