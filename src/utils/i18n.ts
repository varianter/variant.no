export function formatAsCurrency(
  number: number,
  locale: string,
  currency: string,
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(number);
}
