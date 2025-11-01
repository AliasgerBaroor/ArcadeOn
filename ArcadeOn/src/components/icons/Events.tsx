import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Events({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M12 3.25c-2.474 0-4.827.16-6.952.448-2.263.306-3.798 2.294-3.798 4.5v7.603c0 2.207 1.535 4.195 3.798 4.501 2.125.288 4.478.448 6.952.448s4.827-.16 6.953-.448c2.262-.306 3.797-2.294 3.797-4.5V8.198c0-2.207-1.535-4.195-3.797-4.501A52.213 52.213 0 0012 3.25zm-1.614 5.107A.75.75 0 009.25 9v6a.75.75 0 001.136.643l5-3a.75.75 0 000-1.286l-5-3z"
                fill={color}
            />
        </Svg>
    )
}