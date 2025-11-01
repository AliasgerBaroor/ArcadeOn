import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Cross({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M17.293 5.293a1 1 0 111.414 1.414L13.413 12l5.293 5.293.07.076a1 1 0 01-1.408 1.406l-.076-.068-5.293-5.293-5.291 5.292a1 1 0 11-1.414-1.414L10.585 12 5.293 6.708l-.068-.076A1 1 0 016.63 5.225l.076.069L12 10.586l5.294-5.293z"
                fill={color}
            />
        </Svg>
    )
}