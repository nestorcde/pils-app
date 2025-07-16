import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InvoiceCard } from '../../components';
import { useInvoices } from '../../hooks';
import { Invoice } from '../../types';
import { Button } from '../../../../shared/components';
import { styles } from './InvoiceListScreen.styles';

export const InvoiceListScreen: React.FC = () => {
  const navigation = useNavigation();
  const { invoices, loading, error, loadInvoices } = useInvoices();

  const handleInvoicePress = (invoice: Invoice) => {
    console.log('Ver factura:', invoice.number);
    // navigation.navigate('InvoiceDetail', { invoiceId: invoice.id });
  };

  const handleAddInvoice = () => {
    console.log('Crear nueva factura');
    // navigation.navigate('CreateInvoice');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Facturas</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Facturas</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Reintentar" onPress={loadInvoices} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Facturas</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddInvoice}>
          <Text style={styles.addButtonText}>+ Nueva</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {invoices.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📄</Text>
            <Text style={styles.emptyTitle}>No hay facturas</Text>
            <Text style={styles.emptyDescription}>
              Comienza creando tu primera factura para gestionar tus ventas.
            </Text>
          </View>
        ) : (
          <FlatList
            data={invoices}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <InvoiceCard invoice={item} onPress={handleInvoicePress} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 16 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};