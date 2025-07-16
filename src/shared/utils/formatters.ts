
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-PY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};