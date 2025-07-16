import { Invoice, Customer } from '../types';

// Mock data - reemplazar con API real
const mockInvoices: Invoice[] = [
  {
    id: '1',
    number: 'INV-001',
    date: new Date(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    customerId: '1',
    customerName: 'Cliente Ejemplo',
    subtotal: 1000000,
    tax: 100000,
    total: 1100000,
    status: 'draft',
    items: [
      {
        id: '1',
        description: 'Producto de ejemplo',
        quantity: 1,
        unitPrice: 1000000,
        total: 1000000,
      },
    ],
  },
];

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Cliente Ejemplo',
    email: 'cliente@ejemplo.com',
    phone: '0981234567',
    address: 'Asunción, Paraguay',
    ruc: '80012345-1',
  },
];

export const invoiceService = {
  getInvoices: async (): Promise<Invoice[]> => {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockInvoices;
  },

  getInvoiceById: async (id: string): Promise<Invoice | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockInvoices.find(invoice => invoice.id === id) || null;
  },

  createInvoice: async (invoice: Omit<Invoice, 'id'>): Promise<Invoice> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newInvoice: Invoice = {
      ...invoice,
      id: Date.now().toString(),
    };
    mockInvoices.push(newInvoice);
    return newInvoice;
  },

  updateInvoice: async (id: string, updates: Partial<Invoice>): Promise<Invoice | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockInvoices.findIndex(invoice => invoice.id === id);
    if (index === -1) return null;
    
    mockInvoices[index] = { ...mockInvoices[index], ...updates };
    return mockInvoices[index];
  },

  deleteInvoice: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = mockInvoices.findIndex(invoice => invoice.id === id);
    if (index === -1) return false;
    
    mockInvoices.splice(index, 1);
    return true;
  },

  getCustomers: async (): Promise<Customer[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCustomers;
  },
};