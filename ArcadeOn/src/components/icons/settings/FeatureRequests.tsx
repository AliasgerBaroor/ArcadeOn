import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function FeatureRequests({
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
        fill="#29b6f6"
        d="M22.25 0h-2.5c-.41 0-.75.34-.75.75v8.5c0 .41.34.75.75.75h2.5c.41 0 .75-.34.75-.75V.75c0-.41-.34-.75-.75-.75zm-6 4h-2.5c-.41 0-.75.34-.75.75v1.94c.37.55.64 1.16.81 1.81.12.48.19.98.19 1.5h2.25c.41 0 .75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75z"
        data-original="#29b6f6"
      />
      <Path
        fill="#03a9f4"
        d="M24 9.25c0 .41-.34.75-.75.75H14c0-.52-.07-1.02-.19-1.5h9.44c.41 0 .75.34.75.75z"
        data-original="#03a9f4"
      />
      <Path
        d="M8 14c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm8 10H0v-3.25A4.75 4.75 0 014.75 16h6.5A4.75 4.75 0 0116 20.75z"
        data-original="#ffc107"
        fill="#ffc107"
      />
    </Svg>
  );
}
