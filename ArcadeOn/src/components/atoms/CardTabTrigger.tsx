import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStore } from '@/src/stores/themeStore';
import { CardTabTriggerProps } from '@/src/types/atoms';
import Typography from '../typography/Typography';

const CardTabTrigger = ({children, icon: Icon, active, onPress, style, ...props}: CardTabTriggerProps) => {
    const bg = useThemeStore(s => s.colors.white);
    const primary = useThemeStore(s => s.colors.primaryDarkest);

    return (
        <Pressable style={[styles.trigger, style, { backgroundColor: active ? primary : bg }]} {...props} onPress={onPress}>
            <Icon size={20} color={active ? "#fff" : primary} />
            <Typography variant='b6' color={active ? "#fff" : primary} style={{fontSize: 10}}>{children}</Typography>
        </Pressable>
    )
}

export default CardTabTrigger

const styles = StyleSheet.create({
    trigger: {
        flexDirection: "column",
        gap: 8,
        borderRadius: 16,
        padding: 8,
        paddingVertical: 20,
        flex: 1,
        alignItems: "center"
    }
})