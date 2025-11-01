import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function EyeSlash({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M12 4.25c-.994 0-1.935.17-2.813.455a.75.75 0 00-.3 1.244l10.022 10.02a.75.75 0 001.058.002 21.25 21.25 0 002.24-2.655c.254-.352.543-.754.543-1.316s-.342-1.038-.595-1.39c-.706-.99-1.968-2.564-3.675-3.897C16.774 5.381 14.57 4.25 12 4.25zM7.278 6.217a.75.75 0 00-.95-.091c-2.122 1.43-3.726 3.422-4.536 4.558-.253.352-.542.754-.542 1.316s.342 1.038.595 1.39c.706.99 1.968 2.564 3.675 3.897C7.226 18.619 9.43 19.75 12 19.75c2.183 0 4.102-.817 5.672-1.876a.75.75 0 00.11-1.152L7.279 6.217zM9.529 9.5a3.515 3.515 0 004.97 4.97L9.53 9.5z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.293 2.293a1 1 0 011.414 0l18 18a1 1 0 01-1.414 1.414l-18-18a1 1 0 010-1.414z"
                fill={color}
            />
        </Svg>
    )
}