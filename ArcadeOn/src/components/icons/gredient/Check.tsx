import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Bell({
  color = "#242a2a",
  size = 24,
  style,
  ...props
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 511.375 511.375"
      style={style}
      {...props}
    >
      <Path
        fill="#20BC3F"
        d="M511.375 255.688l-57.89-64.273 9.064-86.046-84.651-17.92-43.18-75.012-79.03 35.321-10.667 207.93 10.667 207.929 79.031 35.321 43.179-75.011 84.651-17.921-9.064-86.046z"
        data-original="#20BC3F"
      />
      <Path
        fill="#56EB6D"
        d="M176.656 12.437l-43.179 75.012-84.651 17.921 9.064 86.045L0 255.688l57.89 64.272-9.064 86.046 84.651 17.921 43.18 75.011 79.031-35.321V47.758z"
        data-original="#56EB6D"
      />
      <Path
        fill="#f7f0eb"
        d="M362.878 199.702l-22.381-19.977-84.809 95.016-10.667 23.613 10.667 21.439z"
        data-original="#f7f0eb"
      />
      <Path
        fill="#fffbf5"
        d="M166.56 233.095l-21.212 21.213 89.185 89.186 21.155-23.701v-45.052l-22.393 25.088z"
        data-original="#fffbf5"
      />
    </Svg>
  );
}
