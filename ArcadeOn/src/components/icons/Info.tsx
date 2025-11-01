import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Info({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25zm0 9.25a1 1 0 00-1 1V16a1 1 0 102 0v-4.5a1 1 0 00-1-1zm0-3.502a1 1 0 00-1 1v.01a1 1 0 102 0v-.01a1 1 0 00-1-1z"
                fill={color}
            />
        </Svg>
    )
}