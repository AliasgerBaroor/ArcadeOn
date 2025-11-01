import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Lock({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M12 1.25c3.784 0 7.211 1.214 9.49 3.176l.26.223v6.333c0 4.31-2.439 7.249-4.79 9.074a18.126 18.126 0 01-4.297 2.456c-.13.051-.59.212-.663.238-.072-.026-.533-.187-.663-.238a18.133 18.133 0 01-4.298-2.456C4.69 18.23 2.25 15.29 2.25 10.98V4.65l.26-.223C4.789 2.464 8.216 1.25 12 1.25zm0 4.5A2.75 2.75 0 009.25 8.5v.75h-1.5v6h8.5v-6h-1.5V8.5A2.75 2.75 0 0012 5.75zm0 1.5c.69 0 1.25.56 1.25 1.25v.75h-2.5V8.5c0-.69.56-1.25 1.25-1.25z"
                fill={color}
            />
        </Svg>
    )
}