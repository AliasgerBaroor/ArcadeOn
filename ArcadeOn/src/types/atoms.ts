import { ComponentType, JSX } from "react";
import { IconProps } from "./icons";
import { InputModeOptions, StyleProp, ViewStyle } from "react-native";

export type SeperatorProps = {
    size?: number;
    style?: any;
}
export type FullPageSwiperProps = {
    bgColor: string;
    white: string;
    textColor: string;
    page: validPages;
    style?: any;
}

export type validPages = "game_1" | "game_2" | "game_3" | "login";

export type CtaIconButtonProps = {
    bg: string;
    style?: any;
}
export type DotsGroupProps = {
    length: number;
    active: number;
    bg?: string;
    style?: any;
}
export type AuthButtonVariant = "google" | "apple" | "arcade_on";

export type AuthButtonProps = {
    variant: AuthButtonVariant;
    style?: any;
}

export type LevelProgressProps = {
    level: number;
    currentXP: number;
    requiredXP: number;
}

export type CardTabTriggerProps = {
    children: string;
    icon: ComponentType<IconProps>;
    active?: boolean;
    style?: any;
    onPress?: () => void;
}
export type ImageUploadProps = {
    variant?: "icon" | "default";
    icon?: ComponentType<IconProps>;
    style?: any;
}

export type CardRule = {
    rule: (value: string) => boolean;
    icon?: React.ComponentType<{ size?: number, color?: string }>;
    image?: JSX.Element;
};

export type InputProps = {
    type: "text" | "password" | "card" | "date" | "number" | "email";
    value: string;
    onChange: (val: string) => void;
    cardRules?: CardRule[];
    leftIcon?: React.ComponentType<IconProps>;
    rightIcon?: React.ComponentType<IconProps>;
    leftColor?: string;
    rightColor?: string;
    label?: string;
    placeholder?: string;
    keyboardType?: "default" | "number-pad" | "email-address";
    error?: string;
    helpText?: string;
    disabled?: boolean;
    maxLength?: number;
    autoFocus?: boolean;
    inputMode?: any;
    autoComplete?:
    "off" | "name" | "email" | "password" | "username" | "tel" | "street-address" | "cc-number" | "cc-csc" | "postal-code" | undefined;
    onBlur?: () => void;
    onFocus?: () => void;
    readonly?: boolean;
    loading?: boolean;
    customStyles?: any;
    theme?: "light" | "dark";
};

export type BackButtonProps = {
    alignment?: "flex-start" | "center" | "flex-end";
    style?: any;
}