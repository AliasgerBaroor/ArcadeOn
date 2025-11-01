import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function PushNotification({
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
      <Path
        d="M400 0H112C94.368 0 80 14.368 80 32v448c0 17.664 14.368 32 32 32h288c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
        fill="#455a64"
        data-original="#455a64"
      />
      <Path d="M112 64h288v352H112z" fill="#fafafa" data-original="#fafafa" />
      <Path
        d="M288 288h-64c-8.832 0-16 7.168-16 16 0 26.464 21.536 48 48 48s48-21.536 48-48c0-8.832-7.168-16-16-16z"
        fill="#ffa000"
        data-original="#ffa000"
      />
      <Path
        d="M363.328 292.672l-13.248-13.248c-9.088-9.056-14.08-21.12-14.08-33.952V208c0-44.096-35.872-80-80-80-44.096 0-80 35.904-80 80v37.472c0 12.832-4.992 24.864-14.048 33.952l-13.28 13.248c-4.576 4.576-5.952 11.488-3.456 17.44C147.68 316.096 153.536 320 160 320h192c6.464 0 12.32-3.904 14.784-9.888s1.088-12.864-3.456-17.44z"
        fill="#ffc107"
        data-original="#ffc107"
      />
    </Svg>
  );
}
