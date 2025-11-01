import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Crown({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className="injected-svg"
            color={color}
            style={style}
            {...props}
        >
             <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19.75a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill={color}
      />
      <Path
        d="M10.616 3.173a1.5 1.5 0 012.769 0l2.07 4.968a.75.75 0 01-.228.877 1.25 1.25 0 101.965.604.75.75 0 01.229-.799l2.554-2.171a1.698 1.698 0 012.276.074c.447.435.613 1.083.42 1.68l-.003.006-2.5 7.462a2.75 2.75 0 01-2.607 1.876H6.439a2.75 2.75 0 01-2.607-1.876L1.33 8.406a1.634 1.634 0 01.42-1.68 1.698 1.698 0 012.276-.074l2.553 2.171c.23.196.32.51.23.798a1.25 1.25 0 101.965-.604.75.75 0 01-.228-.876l2.07-4.968z"
        fill={color}
      />
        </Svg>
    )
}