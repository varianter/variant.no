/*
Format date: dd.mm.yyyy
*/

export default function formatDate(date: string) {
  const formattedDate = new Date(date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");

  return formattedDate;
}
