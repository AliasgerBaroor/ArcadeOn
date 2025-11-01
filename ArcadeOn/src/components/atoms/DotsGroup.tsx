import { StyleSheet, View } from 'react-native'
import React from 'react'
import { DotsGroupProps } from '@/src/types/atoms'

const DotsGroup = ({ length, active = 0, bg = "#FFFFFF80", style, ...props }: DotsGroupProps) => {
    return (
        <View style={{ flexDirection: "row", gap: 8 }} {...props}>
            {
                Array.from({ length }).map((_, dot) => (
                    <View
                        key={dot}
                        style={[
                            styles.dot,
                            { backgroundColor: dot === active ? "#fff" : bg }
                        ]}
                    />
                ))
            }
        </View>
    )
}

export default DotsGroup

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    }
})
