import {
  SalariesParseError,
  SalariesParseErrorType,
} from "./salariesParseUtils";

function descriptionOfCsvParseError(error: SalariesParseError): string {
  switch (error.error) {
    case SalariesParseErrorType.INVALID_FORMAT:
      return "Invalid file type. Only CSV files (extension .csv) are allowed.";
    case SalariesParseErrorType.NO_DATA:
      return "File is empty. Verify the file content and try again";
    case SalariesParseErrorType.INVALID_SHAPE:
      return `Row ${error.rowNumber} does not match the format '{year},{salary}'`;
    case SalariesParseErrorType.INVALID_DATA:
      return `Row ${error.rowNumber} contains invalid salary data. Verify that each line has the format '{year},{salary}'.`;
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
    <div>
      {errors.slice(0, maxLines).map((e, i) => (
        <p key={i}>{descriptionOfCsvParseError(e)}</p>
      ))}
      {errors.length > maxLines && (
        <p>+ {errors.length - maxLines} more errors</p>
      )}
    </div>
  );
}
