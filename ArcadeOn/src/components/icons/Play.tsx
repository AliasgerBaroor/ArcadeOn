import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Play({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M13.94 6.337c1.633.928 2.917 1.657 3.83 2.324.921.673 1.602 1.376 1.846 2.302.179.68.179 1.394 0 2.074-.244.926-.925 1.63-1.845 2.301-.914.668-2.198 1.397-3.83 2.325-1.578.896-2.908 1.652-3.918 2.081-1.018.433-1.946.653-2.848.397a4.004 4.004 0 01-1.751-1.034c-.66-.666-.924-1.585-1.05-2.692-.124-1.098-.124-2.536-.124-4.365v-.1c0-1.829 0-3.267.124-4.365.126-1.107.39-2.026 1.05-2.692A4.004 4.004 0 017.175 3.86c.902-.256 1.83-.036 2.848.397 1.01.43 2.34 1.185 3.918 2.081z"
                fill={color}
            />
        </Svg>
    )
}