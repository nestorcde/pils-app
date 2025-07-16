import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: DIMENSIONS.padding.lg,
    paddingVertical: DIMENSIONS.padding.md,
    borderRadius: DIMENSIONS.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray[300],
  },
  text: {
    color: COLORS.white,
    fontSize: DIMENSIONS.fontSize.md,
    fontWeight: '600',
  },
  textDisabled: {
    color: COLORS.gray[500],
  },
});