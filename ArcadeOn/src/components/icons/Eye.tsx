import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Eye({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M5.52 6.713C7.226 5.381 9.43 4.25 12 4.25c2.57 0 4.774 1.131 6.48 2.463 1.707 1.333 2.969 2.907 3.675 3.897l.053.074c.253.352.542.754.542 1.316s-.289.964-.542 1.316l-.053.074c-.706.99-1.968 2.564-3.675 3.897-1.706 1.332-3.91 2.463-6.48 2.463-2.57 0-4.774-1.131-6.48-2.463-1.707-1.333-2.969-2.907-3.675-3.896l-.053-.075c-.253-.352-.542-.754-.542-1.316s.289-.964.542-1.316l.053-.074c.706-.99 1.968-2.564 3.675-3.897zM8.5 12a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
                fill={color}
            />
        </Svg>
    )
}