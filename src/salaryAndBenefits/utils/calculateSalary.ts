import { payscale } from "./salaryData";
  
interface PayScale {
    [year: number]: {
      [examinationYear: number]: number;
    };
  }
  
  const salaryPayscale: PayScale = payscale;
  
  export function calculateSalary(
    currentYear: number,
    examinationYear: number,
    degree: string
  ): number {

    const degreeValue = degree === "bachelor" ? 1 : 0;
    const adjustedYear = (examinationYear + degreeValue);
    return salaryPayscale[currentYear][adjustedYear];
  }

  export function calculatePension(salary: number): number {
    return Math.round(salary * 0.07);
  }

  export function maxExperience(thisYear: number): number {
  const years = Object.keys(salaryPayscale[thisYear]).map(Number)
    return Math.min(...years);
  }