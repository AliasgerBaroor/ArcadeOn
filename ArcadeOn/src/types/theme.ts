export type ThemeMode = 'light' | 'dark';

export type ThemeColorKeys =
  // Backgrounds & Surfaces
  | 'bgCanvas' | 'bgCard' | 'bgGlass' | 'bgElevated' | 'bgBorder' | 'bgFocus' | 'bgPop'
  // Supportive
  | "white"
  // Text
  | 'textHigh' | 'textBody' | 'textMuted' | 'textInverse' | 'textLink'
  // Primary (Brand/Accent)
  | 'primaryLightest' | 'primaryLighter' | 'primary' | 'primaryDarker' | 'primaryDarkest'
  // Secondary Accent
  | 'accentLightest' | 'accentLighter' | 'accent' | 'accentDarker' | 'accentDarkest'
  // Success
  | 'successLightest' | 'successLighter' | 'success' | 'successDarker' | 'successDarkest'
  // Info/Hint
  | 'infoLightest' | 'infoLighter' | 'info' | 'infoDarker' | 'infoDarkest'
  // Warning
  | 'warningLightest' | 'warningLighter' | 'warning' | 'warningDarker' | 'warningDarkest'
  // Error
  | 'errorLightest' | 'errorLighter' | 'error' | 'errorDarker' | 'errorDarkest'
  // Overlays & Utility
  | 'overlaySoft' | 'overlayMedium' | 'overlayStrong'
  // Special/Glow
  | 'glowBlue' | 'glowPink' | 'glowGold'
  // Border Colors
  | 'borderStrong' | 'borderDefault' | 'borderSubtle'
  // Focus/State
  | 'focusVisible' | 'stateActive' | 'stateDisabled'
  // Misc
  | 'shadowLight' | 'shadowDark';


export type ThemeColors = Record<ThemeColorKeys, string>;

export interface ThemeStoreState {
  theme: ThemeMode;
  colors: ThemeColors;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}