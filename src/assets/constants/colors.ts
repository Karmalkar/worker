export const COLORS = {
  // Primary Colors
  primary: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',  // Main primary
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
    1000: '#5F33E1',
  },

  // Secondary Colors
  secondary: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',  // Main secondary
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
  },

  // Accent Colors
  accent: {
    50: '#FFF3E0',
    100: '#FFE0B2',
    200: '#FFCC80',
    300: '#FFB74D',
    400: '#FFA726',
    500: '#FF9800',  // Main accent
    600: '#FB8C00',
    700: '#F57C00',
    800: '#EF6C00',
    900: '#E65100',
  },

  // Neutral Colors (Grays)
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Semantic Colors
  success: {
    light: '#81C784',
    main: '#4CAF50',
    dark: '#388E3C',
  },
  error: {
    light: '#E57373',
    main: '#F44336',
    dark: '#D32F2F',
  },
  warning: {
    light: '#FFB74D',
    main: '#FF9800',
    dark: '#F57C00',
  },
  info: {
    light: '#64B5F6',
    main: '#2196F3',
    dark: '#1976D2',
  },

  // Common Colors
  common: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },

  // Background Colors
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
    dark: '#121212',
  },

  // Text Colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    hint: '#BDBDBD',
  },

  // Border Colors
  border: {
    light: '#E0E0E0',
    main: '#BDBDBD',
    dark: '#9E9E9E',
  },

  // Social Media Colors
  social: {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    instagram: '#E4405F',
    linkedin: '#0A66C2',
    youtube: '#FF0000',
    whatsapp: '#25D366',
    github: '#181717',
  },
};

// Theme Colors (Light & Dark)
export const LIGHT_THEME = {
  primary: COLORS.primary[500],
  secondary: COLORS.secondary[500],
  accent: COLORS.accent[500],
  background: COLORS.background.default,
  surface: COLORS.background.paper,
  text: COLORS.text.primary,
  textSecondary: COLORS.text.secondary,
  border: COLORS.border.light,
  success: COLORS.success.main,
  error: COLORS.error.main,
  warning: COLORS.warning.main,
  info: COLORS.info.main,
  main: COLORS.primary[1000],

};

export const DARK_THEME = {
  primary: COLORS.primary[400],
  secondary: COLORS.secondary[400],
  accent: COLORS.accent[400],
  background: '#121212',
  surface: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  border: '#333333',
  success: COLORS.success.light,
  error: COLORS.error.light,
  warning: COLORS.warning.light,
  info: COLORS.info.light,
  main: COLORS.primary[1000],
};

// Helper function to get theme colors
export const getThemeColors = (isDark: boolean) => {
  return isDark ? DARK_THEME : LIGHT_THEME;
};
