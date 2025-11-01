import { ComponentType } from "react";

export type IconProps = {
  color?: string;
  size?: number;
  rotate?: number | string;
  style?: any;
};

export type IconButtonProps = {
    color?: string;
    size?: number;
    bg?: boolean;
    style?: any;
    containerStyle?: any;
    icon?: ComponentType<IconProps>;
    onPress?: () => void;
}

export type IconGredProps = {
    color_1?: string;
    color_2?: string;
    size?: number;
    style?: any;
}