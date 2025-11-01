import { create } from 'zustand';
import { themeColors } from '../constants/themeColors';
import type { ThemeMode, ThemeStoreState } from '../types/theme';

export const useThemeStore = create<ThemeStoreState>((set) => ({
  theme: 'light',
  colors: themeColors.light,
  setTheme: (mode: ThemeMode) =>
    set(() => ({
      theme: mode,
      colors: themeColors[mode]
    })),
  toggleTheme: () =>
    set((state) => {
      const next: ThemeMode = state.theme === 'light' ? 'dark' : 'light';
      return {
        theme: next,
        colors: themeColors[next]
      };
    }),
}));
