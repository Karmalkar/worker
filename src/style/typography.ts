import { StyleSheet } from 'react-native';
import { FONTS, FONT_SIZES } from './fonts';

export const typography = StyleSheet.create({
  h1: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xxxl,
    lineHeight: 40,
  },
  h2: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xxl,
    lineHeight: 32,
  },
  h3: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xl,
    lineHeight: 28,
  },
  body: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.md,
    lineHeight: 24,
  },
  bodyBold: {
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.md,
    lineHeight: 24,
  },
  caption: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.sm,
    lineHeight: 20,
  },
  small: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.xs,
    lineHeight: 16,
  },
});