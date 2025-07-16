import { useState, useEffect } from 'react';
import { Invoice } from '../types';
import { invoiceService } from '../services/invoiceService';

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadInvoices = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await invoiceService.getInvoices();
      setInvoices(data);
    } catch (err) {
      setError('Error al cargar las facturas');
      console.error('Error loading invoices:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const createInvoice = async (invoiceData: Omit<Invoice, 'id'>) => {
    try {
      const newInvoice = await invoiceService.createInvoice(invoiceData);
      setInvoices(prev => [...prev, newInvoice]);
      return newInvoice;
    } catch (err) {
      setError('Error al crear la factura');
      throw err;
    }
  };

  const updateInvoice = async (id: string, updates: Partial<Invoice>) => {
    try {
      const updatedInvoice = await invoiceService.updateInvoice(id, updates);
      if (updatedInvoice) {
        setInvoices(prev => prev.map(invoice => 
          invoice.id === id ? updatedInvoice : invoice
        ));
      }
      return updatedInvoice;
    } catch (err) {
      setError('Error al actualizar la factura');
      throw err;
    }
  };

  const deleteInvoice = async (id: string) => {
    try {
      const success = await invoiceService.deleteInvoice(id);
      if (success) {
        setInvoices(prev => prev.filter(invoice => invoice.id !== id));
      }
      return success;
    } catch (err) {
      setError('Error al eliminar la factura');
      throw err;
    }
  };

  return {
    invoices,
    loading,
    error,
    loadInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
  };
};