import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Token({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12 5a7 7 0 100 14 7 7 0 000-14z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12 2v3M12 19v3M3.34 7l2.598 1.5M18.063 15.5L20.66 17M20.66 7l-2.598 1.5M5.938 15.5L3.338 17"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <Path
                d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.437 12h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}