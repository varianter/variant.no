export const formatTelephone = (telephone: string) => {
  return (
    telephone.substring(3, 6) +
    ' ' +
    telephone.substring(6, 8) +
    ' ' +
    telephone.substring(8, 11)
  );
};
