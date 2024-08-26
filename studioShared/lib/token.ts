// Server-Only Token Management

import "server-only";
import { experimental_taintUniqueValue } from "react";

export const token =
  process.env.NODE_ENV === "development"
    ? process.env.SANITY_API_TOKEN_DEV
    : process.env.SANITY_API_TOKEN_PROD;

if (!token) {
  throw new Error(
    `Missing SANITY_API_TOKEN for ${
      process.env.NODE_ENV === "development" ? "development" : "production"
    } environment`
  );
}

experimental_taintUniqueValue(
  "Do not pass the sanity API read token to the client.",
  process,
  token
);
