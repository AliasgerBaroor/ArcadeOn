import { IconGredProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default function Two({ size = 24, color_1 = "#1875FF", color_2 = "#FFB800", style, ...props }: IconGredProps) {
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
                d="M17.312 1.93c-1.343-.18-3.064-.18-5.255-.18-2.19 0-4.026 0-5.369.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.178-.181 5.37 0 2.19 0 3.91.18 5.254.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.178.181 5.37.181 2.19 0 3.91 0 5.254-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255 0-2.19 0-4.026-.18-5.369-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43zM12 6a4 4 0 00-4 4 1 1 0 102 0 2 2 0 114 0c0 .588-.43 1.312-1.325 2.107-.855.759-1.936 1.408-2.791 1.859C8.789 14.543 8 15.681 8 17a1 1 0 001 1h6a1 1 0 100-2h-4.552a1.63 1.63 0 01.369-.265c.914-.482 2.157-1.219 3.186-2.133C14.99 12.725 16 11.491 16 10a4 4 0 00-4-4z"
                fill="url(#halfGradient)"
            />
        </Svg>
    )
}
