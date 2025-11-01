import { IconProps } from "@/src/types/icons"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Clock({ color = "#242a2a", size = 24, style, ...props }: IconProps) {
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
                d="M10.748 7h2v4.586l2.207 2.207-1.414 1.414-2.793-2.793V7z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.274 8c-1.466-2.967-4.495-5-8.024-5a9 9 0 000 18v2c-6.075 0-11-4.925-11-11s4.925-11 11-11c4.932 0 9.054 3.243 10.454 7.7a1 1 0 01-.954 1.3h-3V8h1.524z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.75 10.737v1c0 .307-.013.611-.04.91l-.09.996 1.992.18.09-.996c.032-.359.049-.722.049-1.09v-1h-2zm-.277 3.558l-.353.936c-.136.36-.292.709-.466 1.046l-.46.887 1.774.921.461-.887c.211-.407.4-.828.563-1.262l.352-.936-1.872-.705zm-1.606 3.336l-.68.732c-.277.298-.57.576-.881.833l-.77.638 1.274 1.54.77-.637c.38-.313.737-.652 1.073-1.013l.68-.733-1.466-1.36zm-2.623 2.389l-.91.416c-.29.133-.59.25-.896.351l-.95.313.626 1.9.95-.313c.377-.124.745-.269 1.103-.433l.91-.416-.833-1.819z"
                fill={color}
            />
        </Svg>
    )
}