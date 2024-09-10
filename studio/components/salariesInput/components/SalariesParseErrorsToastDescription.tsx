import {
  SalariesParseError,
  SalariesParseErrorType,
} from "../utils/parseSalaries";

function descriptionOfSalariesParseError(error: SalariesParseError): string {
  switch (error.error) {
    case SalariesParseErrorType.INVALID_FORMAT:
      return "Invalid file type. Only CSV files (extension .csv) are allowed.";
    case SalariesParseErrorType.NO_DATA:
      return "File is empty. Verify the file content and try again.";
    case SalariesParseErrorType.INVALID_SHAPE:
      return `Row ${error.rowIndex + 1} does not match the format '{year},{salary}'`;
    case SalariesParseErrorType.INVALID_DATA:
      return `Row ${error.rowIndex + 1} contains invalid salary data. Verify that each line has the format '{year},{salary}'.`;
  }
}

export function SalariesParseErrorsToastDescription({
  errors,
  maxLines = 3,
}: {
  errors: SalariesParseError[];
  maxLines?: number;
}) {
  return (
    <>
      {errors.slice(0, maxLines).map((e, i) => (
        <p key={i}>{descriptionOfSalariesParseError(e)}</p>
      ))}
      {errors.length > maxLines && (
        <p>and {errors.length - maxLines} more errors</p>
      )}
    </>
  );
}
