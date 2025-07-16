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
    borderBottomLeftRadius: DIMENSIONS.borderRadius.xl,
    borderBottomRightRadius: DIMENSIONS.borderRadius.xl,
  },
  title: {
    fontSize: DIMENSIONS.fontSize.xxl + 4,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: DIMENSIONS.margin.xs,
  },
  subtitle: {
    fontSize: DIMENSIONS.fontSize.md,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: DIMENSIONS.padding.lg,
  },
  welcomeCard: {
    backgroundColor: COLORS.white,
    margin: DIMENSIONS.margin.md,
    padding: DIMENSIONS.padding.lg,
    borderRadius: DIMENSIONS.borderRadius.lg,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeText: {
    fontSize: DIMENSIONS.fontSize.lg,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: DIMENSIONS.margin.sm,
  },
  welcomeDescription: {
    fontSize: DIMENSIONS.fontSize.sm,
    color: COLORS.gray[600],
    lineHeight: 20,
  },
  modulesSection: {
    paddingHorizontal: DIMENSIONS.padding.md,
  },
  sectionTitle: {
    fontSize: DIMENSIONS.fontSize.lg,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: DIMENSIONS.margin.md,
    marginLeft: DIMENSIONS.margin.md,
  },
});