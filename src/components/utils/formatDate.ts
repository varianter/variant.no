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

/**
 * Format date: Month day, e.g. Nov 1
 */

export function formatShortDate(date: string) {
  const formattedShortDate = new Date(date)
    .toLocaleDateString("no-NO", { month: "short", day: "numeric" })
    .replace(/\./g, "")
    .split(" ")
    .reverse()
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");

  return formattedShortDate;
}
