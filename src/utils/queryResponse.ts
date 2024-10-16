import { QueryResponseInitial } from "@sanity/react-loader";

export function isNonNullQueryResponse<T>(
  value: QueryResponseInitial<T | null>,
): value is QueryResponseInitial<T> {
  return value.data !== null;
}
