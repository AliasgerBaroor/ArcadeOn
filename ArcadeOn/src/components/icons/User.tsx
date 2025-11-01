import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function User({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M15 9a3 3 0 10-6 0 3 3 0 006 0z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM17 17a5 5 0 00-10 0"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}