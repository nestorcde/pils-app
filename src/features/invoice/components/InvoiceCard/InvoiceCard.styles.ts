import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../../../shared/constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: DIMENSIONS.borderRadius.lg,
    padding: DIMENSIONS.padding.md,
    marginVertical: DIMENSIONS.margin.sm,
    marginHorizontal: DIMENSIONS.margin.md,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: DIMENSIONS.margin.sm,
  },
  invoiceNumber: {
    fontSize: DIMENSIONS.fontSize.lg,
    fontWeight: '600',
    color: COLORS.dark,
  },
  status: {
    paddingHorizontal: DIMENSIONS.padding.sm,
    paddingVertical: 4,
    borderRadius: DIMENSIONS.borderRadius.sm,
    fontSize: DIMENSIONS.fontSize.xs,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  statusDraft: {
    backgroundColor: COLORS.gray[200],
    color: COLORS.gray[600],
  },
  statusSent: {
    backgroundColor: COLORS.info + '20',
    color: COLORS.info,
  },
  statusPaid: {
    backgroundColor: COLORS.success + '20',
    color: COLORS.success,
  },
  statusOverdue: {
    backgroundColor: COLORS.error + '20',
    color: COLORS.error,
  },
  customerName: {
    fontSize: DIMENSIONS.fontSize.md,
    color: COLORS.gray[600],
    marginBottom: DIMENSIONS.margin.xs,
  },
  amount: {
    fontSize: DIMENSIONS.fontSize.xl,
    fontWeight: 'bold',
    color: COLORS.dark,
    textAlign: 'right',
  },
  date: {
    fontSize: DIMENSIONS.fontSize.sm,
    color: COLORS.gray[500],
    textAlign: 'right',
  },
});