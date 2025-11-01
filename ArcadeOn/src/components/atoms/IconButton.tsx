import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Menu from '../icons/Menu'
import type { IconButtonProps } from '@/src/types/icons'

const 
IconButton = ({
    icon,
    size,
    color,
    bg = false,
    style,
    containerStyle,
    onPress,
}: IconButtonProps) => {
    const IconComponent = icon || Menu;

    if(bg) {
        return (
            <TouchableOpacity style={[styles.backButton, containerStyle]} onPress={onPress}>
                <IconComponent size={size ?? 16} style={style} color={color} />
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={[containerStyle]} onPress={onPress}>
                <IconComponent size={size ?? 16} style={style} color={color} />
            </TouchableOpacity>
        )
    }
    
}

export default IconButton

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: "#fff",
        borderRadius: 1000,
        padding: 12,
    }
})
