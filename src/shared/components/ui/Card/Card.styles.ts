import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: DIMENSIONS.borderRadius.lg,
    padding: DIMENSIONS.padding.md,
    marginVertical: DIMENSIONS.margin.sm,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});