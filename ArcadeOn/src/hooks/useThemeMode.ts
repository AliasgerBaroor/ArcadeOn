import { useCallback } from 'react';
import { useThemeStore } from '../stores/themeStore';

export default function useThemeMode() {
    const theme = useThemeStore(s => s.theme);
    const setTheme = useThemeStore(s => s.setTheme);
    const toggleTheme = useThemeStore(s => s.toggleTheme);

    const setLight = useCallback(() => setTheme('light'), [setTheme]);
    const setDark = useCallback(() => setTheme('dark'), [setTheme]);

    return {
        theme,
        setTheme,
        toggleTheme,
        setLight,
        setDark,
    };
}
