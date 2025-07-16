export interface Invoice {
  id: string;
  number: string;
  date: Date;
  dueDate: Date;
  customerId: string;
  customerName: string;
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  items: InvoiceItem[];
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  ruc?: string;
}