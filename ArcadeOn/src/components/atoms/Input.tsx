import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import Typography from "../typography/Typography";
import { useThemeStore } from "@/src/stores/themeStore";
import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";
import Calendar from "../icons/Calendar";
import DateTimePicker from "@react-native-community/datetimepicker";

import CardIcon from "../icons/CreditCard";
import { InputProps } from "@/src/types/atoms";
import CreditCardNotValid from "../icons/CreditCardNotValid";
import { formatCardNumber } from "@/src/utils/formatUtils";

const HEIGHT = 44;

const Input: React.FC<InputProps> = ({
    type, value, onChange, leftIcon, rightIcon, leftColor, rightColor, label, placeholder,
    keyboardType, error, helpText, disabled, maxLength, autoFocus,
    autoComplete, inputMode, onBlur, onFocus, readonly, loading,
    customStyles, theme = "light", cardRules,
}) => {
    const text = useThemeStore(s => s.colors.textBody);
    const secondary = useThemeStore(s => s.colors.textMuted);

    const [secure, setSecure] = useState(type === "password");
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleEyeToggle = () => setSecure(s => !s);

    const formattedDate = type === "date" && value
        ? new Date(value).toLocaleDateString()
        : value;

    const handleOpenDatePicker = () => setShowDatePicker(true);
    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) onChange(selectedDate.toISOString());
    };

    let CardLeft: React.ReactNode = null;
    if (type === "card" && cardRules && cardRules.length) {
        const found = cardRules.find(obj => obj.rule(value));
        if (found) {
            if (found.icon) {
                const Icon = found.icon;
                CardLeft = <Icon size={24} color={secondary} />;
            } else if (found.image) {
                CardLeft = found.image;
            } else {
                CardLeft = <CreditCardNotValid size={24} color={secondary} />;
            }
        }
    }
    const LeftIconNode =
        type === "date"
            ? (
                <TouchableOpacity
                    onPress={handleOpenDatePicker}
                    style={styles.iconLeft}
                    disabled={disabled || readonly}
                >
                    <Calendar size={20} color={leftColor ?? secondary} />
                </TouchableOpacity>
            )
            : CardLeft
                ? (typeof CardLeft === "function"
                    ? React.createElement(CardLeft, { size: 20, color: leftColor ?? secondary })
                    : CardLeft)
                : leftIcon
                    ? React.createElement(leftIcon, { size: 20, color: leftColor ?? secondary })
                    : null;


    const RightIconNode =
        type === "card"
            ? <CardIcon size={24} color={rightColor ?? secondary} />
            : rightIcon
                ? React.createElement(rightIcon, { size: 20, color: rightColor ?? secondary })
                : null;

    return (
        <View style={[styles.container, customStyles]}>
            {label && <Typography style={styles.label} variant="b3" color={text}>{label}</Typography>}
            <View
                style={[
                    styles.inputWrapper,
                    error && styles.errorBorder,
                    disabled && styles.disabled,
                    { minHeight: HEIGHT, height: HEIGHT },
                ]}
            >
                {LeftIconNode && <View style={styles.iconLeft}>{LeftIconNode}</View>}
                {type === "date" ? (
                    <>
                        <TouchableOpacity
                            style={{ flex: 1, minHeight: HEIGHT, height: HEIGHT, justifyContent: "center" }}
                            activeOpacity={0.7}
                            onPress={handleOpenDatePicker}
                            disabled={disabled || readonly}
                        >
                            <TextInput
                                style={[styles.input, { minHeight: HEIGHT, height: HEIGHT, textAlignVertical: 'center', paddingVertical: 0 }]}
                                value={formattedDate}
                                placeholder={placeholder}
                                editable={false}
                                pointerEvents="none"
                            />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                mode="date"
                                display="default"
                                value={value ? new Date(value) : new Date()}
                                onChange={handleDateChange}
                            />
                        )}
                    </>
                ) : (
                    <>
                        <TextInput
                            style={[styles.input, { minHeight: HEIGHT, height: HEIGHT }]}
                            value={type === "card" ? formatCardNumber(value) : value}
                            onChangeText={text =>
                                onChange(type === "card"
                                    ? text.replace(/\s/g, '')
                                    : text
                                )
                            }
                            placeholder={placeholder}
                            secureTextEntry={secure}
                            keyboardType={keyboardType}
                            editable={!disabled && !readonly}
                            maxLength={type === "card" ? maxLength && maxLength + 3 : maxLength}
                            autoFocus={autoFocus}
                            autoComplete={autoComplete}
                            inputMode={inputMode}
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                        {type === "password" ? (
                            <TouchableOpacity onPress={handleEyeToggle} style={styles.iconRight}>
                                {secure ? <EyeSlash size={20} color={secondary} /> : <Eye size={20} color={secondary} />}
                            </TouchableOpacity>
                        ) : RightIconNode ? (
                            <View style={styles.iconRight}>{typeof RightIconNode === "function"
                                ? React.createElement(RightIconNode, { size: 20, color: rightColor ?? secondary })
                                : RightIconNode}
                            </View>
                        ) : null}

                    </>
                )}
                {loading && <ActivityIndicator style={styles.loader} />}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
            {helpText && <Text style={styles.help}>{helpText}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: "100%", marginVertical: 8 },
    label: { marginBottom: 4 },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ddd",
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        minHeight: HEIGHT,
        height: HEIGHT,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        minHeight: HEIGHT,
        height: HEIGHT,
    },
    iconLeft: { marginRight: 8 },
    iconRight: { marginLeft: 8 },
    loader: { marginLeft: 8 },
    error: { color: "red", fontSize: 12, marginTop: 4 },
    help: { color: "#999", fontSize: 12, marginTop: 2 },
    errorBorder: { borderColor: "red" },
    disabled: { opacity: 0.6, backgroundColor: "#f6f6f6" },
});
export default Input;