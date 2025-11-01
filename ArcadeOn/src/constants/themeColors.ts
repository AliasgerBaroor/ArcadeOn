import type { ThemeColors, ThemeMode } from '../types/theme';
export const themeColors: Record<ThemeMode, ThemeColors> = {
  light: {
    // ---- Backgrounds & Surfaces ----
    bgCanvas: '#F9FAFC',   // Main background
    bgCard: '#F3F7FC',   // Widget/card surface
    bgGlass: '#E8EDF6',   // Glass/blur overlays
    bgElevated: '#DFE1EC',   // Floating element
    bgBorder: '#CBD1DE',   // Border/subtle separator
    bgFocus: '#B5CAF1',   // Focus/highlight ring
    bgPop: '#FFEEA3',   // Spotlight, popup, tooltip

    // ---- Supportive ----
    white: '#ffffff',
    // ---- Text ----
    textHigh: '#232844',   // Essential, high contrast
    textBody: '#5F6A88',   // Body text or secondary
    textMuted: '#9FA8C2',   // Disabled, subtle info
    textInverse: '#F7F9FF',   // Dark mode foreground
    textLink: '#1875FF',   // Clickable links

    // ---- Primary (Brand/Accent) ----
    primaryLightest: '#BEE3FB',   // Extra UI tints
    primaryLighter: '#7AC7F7',   // Hover/active tint
    primary: '#1875FF',   // Main accent/CTA
    primaryDarker: '#135DCC',   // Button border/focus
    primaryDarkest: '#133A72',   // Shadow, pressed

    // ---- Secondary Accent (Fun Color) ----
    accentLightest: '#D3F8F1',   // Progress, boosts
    accentLighter: '#7DECC2',
    accent: '#25D2AA',
    accentDarker: '#17806A',
    accentDarkest: '#114E41',

    // ---- Success ----
    successLightest: '#CBFDE8',   // Feedback, success toast
    successLighter: '#56EB6D',
    success: '#20BC3F',
    successDarker: '#148C2D',
    successDarkest: '#10522A',

    // ---- Info/Hint ----
    infoLightest: '#D8F1FF',   // Notification, tooltips
    infoLighter: '#7ABEFF',
    info: '#2599FF',
    infoDarker: '#195B80',
    infoDarkest: '#092849',

    // ---- Warning ----
    warningLightest: '#FFF6DC',
    warningLighter: '#FFE899',
    warning: '#FFB800',
    warningDarker: '#F79008',
    warningDarkest: '#B4702D',

    // ---- Error ----
    errorLightest: '#FFD1E0',
    errorLighter: '#FF7DAA',
    error: '#F42A58',
    errorDarker: '#B71B43',
    errorDarkest: '#88002D',

    // ---- Overlays & Utility ----
    overlaySoft: 'rgba(40,40,60,0.06)',     // Hover, focus soft
    overlayMedium: 'rgba(36,42,84,0.13)',     // Dialog, modal
    overlayStrong: 'rgba(36,42,84,0.26)',     // Backdrops

    // ---- Special/Glow ----
    glowBlue: '#2CFFFB',
    glowPink: '#FF7CAD',
    glowGold: '#FFFD74',

    // ---- Border Colors ----
    borderStrong: '#AAB7CF',
    borderDefault: '#CBD1DE',
    borderSubtle: '#E4E9F2',

    // ---- Focus/State ----
    focusVisible: '#1875FF',
    stateActive: '#25D2AA',    // For switches, toggles
    stateDisabled: '#9FA8C2',

    // ---- Misc ----
    shadowLight: 'rgba(24, 117, 255, 0.10)',  // Modern glow
    shadowDark: 'rgba(40, 40, 60, 0.22)',    // Card shadow
  },

  dark: {
    // ---- Backgrounds & Surfaces ----
    bgCanvas: '#1B202D',   // Main dark
    bgCard: '#232846',   // Widget/card surface
    bgGlass: '#23284488', // Glass overlay
    bgElevated: '#293057',   // Floating element
    bgBorder: '#323C59',   // Border/subtle separator
    bgFocus: '#234F87',   // Focus/highlight ring
    bgPop: '#FFD928',   // Spotlight, popup

    // ---- Supportive ----
    white: '#ffffff',

    // ---- Text ----
    textHigh: '#F7F9FF',
    textBody: '#D1D9F0',
    textMuted: '#939BBD',
    textInverse: '#232844',
    textLink: '#62C7FB',

    // ---- Primary (Brand/Accent) ----
    primaryLightest: '#5FC8F7',
    primaryLighter: '#1875FF',
    primary: '#1755C3',
    primaryDarker: '#1346A4',
    primaryDarkest: '#133A72',

    // ---- Secondary Accent (Fun Color) ----
    accentLightest: '#58F3E0',
    accentLighter: '#20BC7E',
    accent: '#149E66',
    accentDarker: '#17806A',
    accentDarkest: '#114E41',

    // ---- Success ----
    successLightest: '#56EB6D',
    successLighter: '#20BC3F',
    success: '#10AC28',
    successDarker: '#148C2D',
    successDarkest: '#10522A',

    // ---- Info/Hint ----
    infoLightest: '#185BEA',
    infoLighter: '#2599FF',
    info: '#205AE0',
    infoDarker: '#195B80',
    infoDarkest: '#091648',

    // ---- Warning ----
    warningLightest: '#FFD928',
    warningLighter: '#FFB800',
    warning: '#FD8D00',
    warningDarker: '#B4702D',
    warningDarkest: '#703D13',

    // ---- Error ----
    errorLightest: '#FF7DAA',
    errorLighter: '#F42A58',
    error: '#B71B43',
    errorDarker: '#88002D',
    errorDarkest: '#6D0220',

    // ---- Overlays & Utility ----
    overlaySoft: 'rgba(10,14,30,0.14)',
    overlayMedium: 'rgba(30,42,84,0.22)',
    overlayStrong: 'rgba(30,42,84,0.37)',

    // ---- Special/Glow ----
    glowBlue: '#14F3FF',
    glowPink: '#FD8FFF',
    glowGold: '#FFEE78',

    // ---- Border Colors ----
    borderStrong: '#505B8A',
    borderDefault: '#323C59',
    borderSubtle: '#232846',

    // ---- Focus/State ----
    focusVisible: '#62C7FB',
    stateActive: '#149E66',
    stateDisabled: '#939BBD',

    // ---- Misc ----
    shadowLight: 'rgba(14,243,255,0.13)',    // Neon blue glow
    shadowDark: 'rgba(20,38,70,0.35)',      // Card shadow
  },
};
