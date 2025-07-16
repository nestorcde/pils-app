import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../../shared/constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: DIMENSIONS.borderRadius.lg,
    padding: DIMENSIONS.padding.lg,
    marginHorizontal: DIMENSIONS.margin.md,
    marginVertical: DIMENSIONS.margin.sm,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
  },
  cardDisabled: {
    backgroundColor: COLORS.gray[100],
    opacity: 0.6,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: DIMENSIONS.margin.md,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: DIMENSIONS.fontSize.lg,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: DIMENSIONS.margin.xs,
  },
  description: {
    fontSize: DIMENSIONS.fontSize.sm,
    color: COLORS.gray[600],
    lineHeight: 20,
  },
  arrow: {
    fontSize: 16,
    color: COLORS.gray[400],
    marginLeft: DIMENSIONS.margin.sm,
  },
});