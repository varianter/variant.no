import { Result, ResultError, ResultOk } from "studio/utils/result";

export function readBaseUrl(): Result<URL, string> {
  const url = process.env.NEXT_PUBLIC_URL;
  if (url === undefined) {
    return ResultError("Missing environment variable: NEXT_PUBLIC_URL");
  }
  if (!URL.canParse(url)) {
    return ResultError("Invalid environment variable: NEXT_PUBLIC_URL");
  }
  return ResultOk(new URL(url));
}
