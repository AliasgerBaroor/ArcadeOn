import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Arrow({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M3.125 12.001c0 .525.268.92.561 1.226.273.286.702.624 1.139.968l1.014.798c.742.585 1.364 1.075 1.881 1.375.52.302 1.16.547 1.823.254.682-.302.904-.954.994-1.54.082-.539.088-1.248.088-2.082h9.25a1 1 0 100-2h-9.25c0-.832-.006-1.54-.088-2.077-.09-.587-.312-1.239-.994-1.54-.663-.294-1.303-.049-1.823.253-.517.3-1.139.79-1.881 1.375l-1.014.799c-.437.343-.866.682-1.139.967-.293.307-.561.7-.561 1.224z"
                fill={color}
            />
        </Svg>
    )
}