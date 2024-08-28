import {
  SalariesParseError,
  SalariesParseErrorType,
} from "./salariesParseUtils";

function descriptionOfCsvParseError(error: SalariesParseError): string {
  switch (error.error) {
    case SalariesParseErrorType.INVALID_FORMAT:
      return "File has invalid format";
    case SalariesParseErrorType.NO_DATA:
      return "File is empty";
    case SalariesParseErrorType.INVALID_SHAPE:
      return `Row ${error.rowNumber} has does not match format '{year},{salary}'`;
    case SalariesParseErrorType.INVALID_DATA:
      return `Row ${error.rowNumber} contains invalid data`;
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
