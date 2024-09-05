/**
 * Represents the result of an operation that can either succeed or fail.
 *
 * @template T The type of the successful result value.
 * @template E The type of the error in case of failure.
 *
 * This type is a union of two possible outcomes:
 * 1. A successful result: { ok: true, value: T }
 * 2. An error result: { ok: false, error: E }
 *
 * Usage example:
 * ```typescript
 * type MyResult = Result<number, string>;
 * const successResult: MyResult = { ok: true, value: 42 };
 * const errorResult: MyResult = { ok: false, error: "Operation failed" };
 * ```
 */
export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

/**
 * Creates a successful Result object.
 *
 * @template T The type of the successful result value.
 * @template E The type of the error (not used in this function, but part of the Result type).
 * @param value The value to be wrapped in a successful Result.
 * @returns A Result object indicating success with the provided value.
 *
 * Usage example:
 * ```typescript
 * const result = ResultOk<number, string>(42);
 * // result is { ok: true, value: 42 }
 * ```
 */
export function ResultOk<T, E>(value: T): Result<T, E> {
  return { ok: true, value };
}

/**
 * Creates an error Result object.
 *
 * @template T The type of the successful result value (not used in this function, but part of the Result type).
 * @template E The type of the error.
 * @param error The error to be wrapped in a failed Result.
 * @returns A Result object indicating failure with the provided error.
 *
 * Usage example:
 * ```typescript
 * const result = ResultError<number, string>("Operation failed");
 * // result is { ok: false, error: "Operation failed" }
 * ```
 */
export function ResultError<T, E>(error: E): Result<T, E> {
  return { ok: false, error };
}
