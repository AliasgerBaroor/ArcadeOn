import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useThemeStore } from '../../stores/themeStore';

export default function ThemeToggleButton() {
    const toggleTheme = useThemeStore(s => s.toggleTheme);
    const primary = useThemeStore(s => s.colors.primary);

    return (
        <TouchableOpacity
            onPress={toggleTheme}
            style={{
                backgroundColor: primary,
                padding: 12,
                borderRadius: 6,
            }}
        >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Toggle Theme</Text>
        </TouchableOpacity>
    );
}
