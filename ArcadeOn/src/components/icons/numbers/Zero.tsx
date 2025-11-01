import { IconGredProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default function Zero({ size = 24, color_1 = "#1875FF", color_2 = "#FFB800", style, ...props }: IconGredProps) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className="injected-svg"
            style={style}
            {...props}
        >
            <Defs>
                <LinearGradient id="halfGradient" x1="0" y1="0" x2="1" y2="0">
                    <Stop offset="0%" stopColor={color_1} />
                    <Stop offset="50%" stopColor={color_1} />
                    <Stop offset="50%" stopColor={color_2} />
                    <Stop offset="100%" stopColor={color_2} />
                </LinearGradient>
            </Defs>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.312 1.93c-1.343-.18-3.179-.18-5.37-.18-2.19 0-3.91 0-5.254.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255 0 2.19 0 4.026.18 5.369.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181 2.19 0 4.026 0 5.369-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255 0-2.19 0-4.026-.18-5.369-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43zM10 10a2 2 0 114 0v4a2 2 0 11-4 0v-4zm2-4a4 4 0 00-4 4v4a4 4 0 008 0v-4a4 4 0 00-4-4z"
                fill="url(#halfGradient)"
            />
        </Svg>
    )
}
