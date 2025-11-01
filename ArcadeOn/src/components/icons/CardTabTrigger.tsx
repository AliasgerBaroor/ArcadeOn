import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStore } from '@/src/stores/themeStore';
import { CardTabTriggerProps } from '@/src/types/atoms';
import Typography from '../typography/Typography';

const CardTabTrigger = ({children, icon: Icon}: CardTabTriggerProps) => {
    const bg = useThemeStore(s => s.colors.bgCard);
    const primary = useThemeStore(s => s.colors.primaryDarker);

    return (
        <View style={[styles.trigger, { backgroundColor: bg }]}>
            <Icon size={20} color={primary} />
            <Typography variant='b6' style={{fontSize: 10}}>{children}</Typography>
        </View>
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