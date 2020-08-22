import data from "./pay.json";

type SalaryData = { [year: string]: string };

export default function calculateEstimatedSalaray(
  graduationYear: number,
  degree: "masters" | "bachelor"
): string | undefined {
  const year = String(graduationYear + (degree === "bachelor" ? 2 : 0));
  return (data as SalaryData)[year];
}
