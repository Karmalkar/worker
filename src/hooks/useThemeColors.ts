import { useColorScheme } from 'react-native';
import { getThemeColors } from '../assets/constants/colors';

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = getThemeColors(isDark);

  return { colors, isDark };
};