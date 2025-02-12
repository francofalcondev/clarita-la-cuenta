// ✅ Convierte "20.000" a 20000 para cálculos
export const parseFormattedNumber = (value: string): number => {
  return parseInt(value.replace(/\./g, ""), 10) || 0;
};

// ✅ Convierte 20000 a "20.000" para mostrar en UI
export const formatNumber = (value: number | string): string => {
  const numericValue = typeof value === "string" ? parseInt(value, 10) : value;
  return new Intl.NumberFormat("es-AR").format(numericValue);
};
