import { StyleSheet, View } from 'react-native'
import React from 'react'
import Chevron from '../icons/Chevron'
import { CtaIconButtonProps } from '@/src/types/atoms'

const CtaIconButton = ({ bg, style, ...props }: CtaIconButtonProps) => {
    return (
        <View style={[styles.button, { backgroundColor: bg }]} {...props}>
            <Chevron size={32} strokWidth={3} style={{ transform: [{ rotate: '-90deg' }] }} />
        </View>
    )
}

export default CtaIconButton

const styles = StyleSheet.create({
    button: {
        padding: 16,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.60,
        shadowRadius: 14,
        elevation: 14
    }
})