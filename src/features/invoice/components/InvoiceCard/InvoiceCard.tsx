import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Invoice } from '../../types';
import { formatCurrency, formatDate } from '../../../../shared/utils';
import { styles } from './InvoiceCard.styles';

interface InvoiceCardProps {
  invoice: Invoice;
  onPress: (invoice: Invoice) => void;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice, onPress }) => {
  const getStatusStyle = (status: Invoice['status']) => {
    switch (status) {
      case 'draft':
        return styles.statusDraft;
      case 'sent':
        return styles.statusSent;
      case 'paid':
        return styles.statusPaid;
      case 'overdue':
        return styles.statusOverdue;
      default:
        return styles.statusDraft;
    }
  };

  const getStatusText = (status: Invoice['status']) => {
    switch (status) {
      case 'draft':
        return 'Borrador';
      case 'sent':
        return 'Enviada';
      case 'paid':
        return 'Pagada';
      case 'overdue':
        return 'Vencida';
      default:
        return 'Borrador';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(invoice)}>
      <View style={styles.header}>
        <Text style={styles.invoiceNumber}>{invoice.number}</Text>
        <Text style={[styles.status, getStatusStyle(invoice.status)]}>
          {getStatusText(invoice.status)}
        </Text>
      </View>
      
      <Text style={styles.customerName}>{invoice.customerName}</Text>
      
      <View style={styles.header}>
        <Text style={styles.date}>{formatDate(invoice.date)}</Text>
        <Text style={styles.amount}>{formatCurrency(invoice.total)}</Text>
      </View>
    </TouchableOpacity>
  );
};