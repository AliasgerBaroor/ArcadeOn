import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Minus({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M21.25 12c0 .69-.56 1.25-1.25 1.25H4a1.25 1.25 0 110-2.5h16c.69 0 1.25.56 1.25 1.25z"
                fill={color}
            />
        </Svg>
    )
}