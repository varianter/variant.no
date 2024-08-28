import { Result, ResultError, ResultOk } from "../../utils/result";

export interface Salaries {
  [year: string]: number;
}

const NON_EMPTY_DIGITS_ONLY_REGEX = new RegExp(/^\d+$/);
export const VALID_SALARY_REGEX = NON_EMPTY_DIGITS_ONLY_REGEX;

export enum SalariesParseErrorType {
  INVALID_SHAPE,
  INVALID_DATA,
  NO_DATA,
  INVALID_FORMAT,
}

export type SalariesParseError =
  | {
      error:
        | SalariesParseErrorType.INVALID_SHAPE
        | SalariesParseErrorType.INVALID_DATA;
      rowNumber: number;
    }
  | {
      error:
        | SalariesParseErrorType.NO_DATA
        | SalariesParseErrorType.INVALID_FORMAT;
    };

/**
 Naive CSV parser for files with row format "{year},{salary}"
 Does not handle cases like escaped special characters
 (salary number must therefore not contain commas)
 */
export function salariesFromCsvString(
  csvString: string,
): Result<Salaries, SalariesParseError[]> {
  const salaries: Salaries = {};
  const errors: SalariesParseError[] = [];
  const cleanCsvString = csvString.trim();
  if (cleanCsvString.length === 0) {
    return ResultError([{ error: SalariesParseErrorType.NO_DATA }]);
  }
  const rows = cleanCsvString.split("\n");
  for (let i = 0; i < rows.length; i++) {
    const cleanRow = rows[i]
      .replace(/\s/g, "") // remove all whitespace
      .replace(/,$/g, ""); // remove single trailing comma
    const values = cleanRow.split(",");
    if (values.length != 2) {
      errors.push({
        rowNumber: i,
        error: SalariesParseErrorType.INVALID_SHAPE,
      });
      continue;
    }
    const [year, salary] = values;
    if (
      !(
        NON_EMPTY_DIGITS_ONLY_REGEX.test(year) &&
        VALID_SALARY_REGEX.test(salary)
      )
    ) {
      errors.push({ rowNumber: i, error: SalariesParseErrorType.INVALID_DATA });
      continue;
    }
    salaries[Number(year)] = Number(salary);
  }
  if (errors.length > 0) {
    return ResultError(errors);
  }
  return Object.keys(salaries).length > 0
    ? ResultOk(salaries)
    : ResultError([{ error: SalariesParseErrorType.NO_DATA }]);
}

export function salariesAsStoredString(salaries: Salaries): string {
  return JSON.stringify(salaries);
}

export function salariesFromStoredString(salaries: string): Salaries {
  return JSON.parse(salaries);
}
