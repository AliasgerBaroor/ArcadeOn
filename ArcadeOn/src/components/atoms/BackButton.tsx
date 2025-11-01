import { Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import Arrow from '../icons/Arrow'
import { BackButtonProps } from '@/src/types/atoms'
import { useThemeStore } from '@/src/stores/themeStore'

const BackButton = ({ alignment = "flex-start", style, ...props }: BackButtonProps) => {
    const bg = useThemeStore(s => s.colors.white);

    return (
        <View style={[styles.backButton, style, { justifyContent: alignment, backgroundColor: bg }]} {...props}>
            <Arrow />
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        alignSelf: "flex-start",
        borderRadius: 500,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
            },
            android: {
                elevation: 4,
            },
        }),
    }
});