import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Logout({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M4.393 4C4 4.617 4 5.413 4 7.004v9.994c0 1.591 0 2.387.393 3.002.07.11.148.214.235.312.483.546 1.249.765 2.78 1.202 1.533.438 2.3.657 2.856.329a1.5 1.5 0 00.267-.202C11 21.196 11 20.4 11 18.803V5.197c0-1.596 0-2.393-.469-2.837a1.498 1.498 0 00-.267-.202c-.555-.328-1.323-.11-2.857.329-1.53.437-2.296.656-2.78 1.202a2.5 2.5 0 00-.234.312zM11 4h2.017c1.902 0 2.853 0 3.443.586.33.326.476.764.54 1.414m-6 14h2.017c1.902 0 2.853 0 3.443-.586.33-.326.476-.764.54-1.414M21 12h-7m5.5-2.5S22 11.34 22 12s-2.5 2.5-2.5 2.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}