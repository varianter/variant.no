export function getLastInArray<Type>(arr: Type[]): Type {
  return arr[arr.length - 1];
}

export const formatCurrencyFromNumber = (pay: number | undefined) => {
  if (!pay) return "";
  return new Intl.NumberFormat("nb-NO").format(Math.floor(pay));
};
