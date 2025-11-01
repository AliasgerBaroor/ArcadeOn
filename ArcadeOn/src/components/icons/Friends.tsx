import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Friends({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M7.403 14.44A6.753 6.753 0 002.25 21c0 .414.336.75.75.75h12a.75.75 0 00.75-.75 6.753 6.753 0 00-5.153-6.56A4.251 4.251 0 009 6.25a4.25 4.25 0 00-1.597 8.19z"
                fill={color}
            />
            <Path
                d="M10.985 5.102a5.752 5.752 0 012.512 8.98 8.28 8.28 0 013.088 3.668H21a.75.75 0 00.75-.75 6.753 6.753 0 00-5.153-6.56 4.251 4.251 0 10-5.612-5.338z"
                fill={color}
            />
        </Svg>
    )
}