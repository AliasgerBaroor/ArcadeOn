import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Search({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M11 2a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                fill={color}
            />
        </Svg>
    )
}