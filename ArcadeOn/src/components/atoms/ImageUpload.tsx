import { StyleSheet, TouchableOpacity, View, Alert, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { ImageUploadProps } from '@/src/types/atoms'
import Pencil from '../icons/Pencil'
import Crown from '../icons/Crown'

const ImageUpload = ({ variant = "default", icon, style, ...props }: ImageUploadProps) => {
    const UploadIcon = icon ? icon : Pencil;
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const handleImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    return (
        <View style={[styles.pencilWrap, style]} {...props}>
            <TouchableOpacity activeOpacity={0.5} onPress={handleImagePick}>
                {variant === "default" ? <Crown /> : <UploadIcon />}
            </TouchableOpacity>
            {selectedImage &&
                <Image source={{ uri: selectedImage }} style={styles.preview} />
            }
        </View>
    )
}

export default ImageUpload;

const styles = StyleSheet.create({
    pencilWrap: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        padding: 4,
    },
    preview: {
        width: 48,
        height: 48,
        borderRadius: 16,
        marginTop: 8
    }
});