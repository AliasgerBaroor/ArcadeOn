import { IconProps } from "@/src/types/icons";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ControlSensitivity({
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
        fill="#607d8b"
        d="M24 3v16a3 3 0 01-2 2.82V5H2v11.33c-1.54.59-2 1.85-2 2.67V3c0-1.65 1.35-3 3-3h18c1.65 0 3 1.35 3 3z"
        data-original="#607d8b"
      />
      <Path
        fill="#fff"
        d="M22 5v13.5c0-1.88-1.48-3.41-3.34-3.5-.561-1.18-1.77-2-3.16-2-.17 0-.35.01-.51.04a3.516 3.516 0 00-1.99-1V10.5C13 8.57 11.43 7 9.5 7S6 8.57 6 10.5v5.92A5 5 0 004 16c-.81 0-1.47.12-2 .33V5z"
        data-original="#ffffff"
      />
      <Path
        fill="#ffcc80"
        d="M4.75 22.748l.019.044A2.005 2.005 0 006.605 24H18a2 2 0 002-2v-3.5a1.5 1.5 0 10-3 0v-2a1.5 1.5 0 10-3 0v-1a1.5 1.5 0 10-3 0v-5c0-.83-.67-1.5-1.5-1.5S8 9.67 8 10.5V21s-1.617-3-4-3c-1.5 0-2 .535-2 1 0 1.262 1.428.541 2.75 3.748z"
        data-original="#ffcc80"
      />
      <Path
        d="M17.5 17.39V21c-.28 0-.5-.22-.5-.5v-2c0-.44.19-.84.5-1.11zm-3-2v5.11c-.28 0-.5-.22-.5-.5v-3.5c0-.44.19-.84.5-1.11zm-3-1v5.86c-.28 0-.5-.22-.5-.5V15.5c0-.44.19-.84.5-1.11z"
        data-original="#ffa726"
        fill="#ffa726"
      />
      <Path
        fill="#546d79"
        d="M12 0H3C1.35 0 0 1.35 0 3v16c0-.82.46-2.08 2-2.67V5h10z"
        data-original="#546d79"
      />
      <Path
        fill="#dedede"
        d="M12 5H2v11.33c.53-.21 1.19-.33 2-.33a5 5 0 012 .42V10.5C6 8.57 7.57 7 9.5 7c.978 0 1.864.404 2.5 1.053z"
        data-original="#dedede"
      />
      <Path
        fill="#deb26f"
        d="M11 15.49s0 .001 0 0zm0-.01v.001-.001zm0-.01v.002-.002zm.001-.01v.003-.003zm0-.01v.004-.004zm0-.011v.006-.006zM9.5 9C8.67 9 8 9.67 8 10.5V21s-1.617-3-4-3c-1.5 0-2 .535-2 1 0 1.262 1.428.541 2.75 3.748l.019.044A2.005 2.005 0 006.605 24H12v-9.915a1.5 1.5 0 00-.999 1.352c.017-.415.204-.79.499-1.047v5.86c-.28 0-.5-.22-.5-.5V10.5c0-.83-.67-1.5-1.5-1.5z"
        data-original="#deb26f"
      />
      <Path
        fill="#de9121"
        d="M11.5 14.39a1.465 1.465 0 00-.499 1.047v4.312c0 .28.22.5.5.5V14.39z"
        data-original="#de9121"
      />
    </Svg>
  );
}
