import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray[50],
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: DIMENSIONS.padding.lg,
    paddingHorizontal: DIMENSIONS.padding.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: DIMENSIONS.fontSize.xl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  backButton: {
    padding: DIMENSIONS.padding.sm,
  },
  backButtonText: {
    fontSize: 18,
    color: COLORS.white,
  },
  addButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: DIMENSIONS.padding.md,
    paddingVertical: DIMENSIONS.padding.sm,
    borderRadius: DIMENSIONS.borderRadius.md,
  },
  addButtonText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DIMENSIONS.padding.xl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: DIMENSIONS.margin.lg,
  },
  emptyTitle: {
    fontSize: DIMENSIONS.fontSize.lg,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: DIMENSIONS.margin.sm,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: DIMENSIONS.fontSize.md,
    color: COLORS.gray[600],
    textAlign: 'center',
    lineHeight: 22,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DIMENSIONS.padding.xl,
  },
  errorText: {
    fontSize: DIMENSIONS.fontSize.md,
    color: COLORS.error,
    textAlign: 'center',
    marginBottom: DIMENSIONS.margin.lg,
  },
});