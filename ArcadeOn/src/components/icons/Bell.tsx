import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Bell({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M15.75 20a4.249 4.249 0 01-7.5 0h7.5zM12 1.75a7.75 7.75 0 017.75 7.75v2.756c0 .597.237 1.169.66 1.59l.603.604a2.52 2.52 0 01-1.782 4.3H4.77a2.519 2.519 0 01-1.782-4.3l.604-.603.15-.165c.327-.4.509-.904.509-1.426V9.5A7.75 7.75 0 0112 1.75z"
                fill={color}
            />
        </Svg>
    )
}