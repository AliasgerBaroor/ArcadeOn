import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function AppTheme({
  color = "#242a2a",
  size = 24,
  style,
  ...props
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      {...props}
    >
      <Path
        fill="#eceff1"
        d="M24 4.25v11.5c0 1.24-1.01 2.25-2.25 2.25H6.25a2.238 2.238 0 01-2.24-2.07L4 15.75V4.25C4 3.01 5.01 2 6.25 2h15.5C22.99 2 24 3.01 24 4.25z"
        data-original="#eceff1"
      />
      <Path
        fill="#cdd0d2"
        d="M14.125 2H6.25C5.01 2 4 3.01 4 4.25v11.5l.01.18A2.238 2.238 0 006.25 18h7.875z"
        data-original="#cdd0d2"
      />
      <Path
        fill="#388e3c"
        d="M24 12.94v2.81c0 1.24-1.01 2.25-2.25 2.25H6.25c-.1 0-.2-.01-.29-.02l10.3-10.3c.68-.68 1.8-.68 2.48 0z"
        data-original="#388e3c"
      />
      <Path
        fill="#317c34"
        d="M17.415 7.172a1.75 1.75 0 00-1.155.508l-10.3 10.3c.09.01.19.02.29.02h11.165z"
        data-original="#317c34"
      />
      <Path
        fill="#4caf50"
        d="M18.06 18H6.25a2.238 2.238 0 01-2.24-2.07l4.75-4.75c.68-.68 1.8-.68 2.48 0z"
        data-original="#4caf50"
      />
      <Path
        fill="#429846"
        d="M10 10.67c-.45 0-.9.17-1.24.51l-4.75 4.75A2.238 2.238 0 006.25 18h3.802v-7.329L10 10.67z"
        data-original="#429846"
      />
      <Path
        fill="#ffc107"
        d="M9 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
        data-original="#ffc107"
      />
      <Path
        fill="#dea806"
        d="M9 5c-1.103 0-2 .897-2 2s.897 2 2 2l.062-.001V5.001L9 5z"
        data-original="#dea806"
      />
      <Path
        fill="#eceff1"
        d="M6.25 19.5a3.744 3.744 0 01-3.542-2.551l-.035-.115A3.648 3.648 0 012.5 15.75V8.933L.074 17.03a2.271 2.271 0 001.592 2.755l15.463 4.141c.193.05.386.074.576.074.996 0 1.906-.661 2.161-1.635l.9-2.865z"
        data-original="#eceff1"
      />
      <Path
        fill="#cdd0d2"
        d="M2.5 8.933L.074 17.03a2.271 2.271 0 001.592 2.755l7.585 2.031.766-2.316H6.25a3.744 3.744 0 01-3.542-2.551l-.035-.115A3.648 3.648 0 012.5 15.75z"
        data-original="#cdd0d2"
      />
    </Svg>
  );
}
