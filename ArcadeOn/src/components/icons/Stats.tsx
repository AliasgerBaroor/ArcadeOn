import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Stats({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M11.438 1.786c2.787-.23 5.691.64 7.888 2.817 2.194 2.173 3.108 5.118 2.894 7.953l-.053.694H10.75V1.843l.688-.057z"
                fill={color}
            />
            <Path
                d="M9.25 2.123C4.925 3.325 1.75 7.292 1.75 12c0 5.66 4.59 10.25 10.25 10.25 4.708 0 8.675-3.174 9.877-7.5H9.25V2.123z"
                fill={color}
            />
        </Svg>
    )
}