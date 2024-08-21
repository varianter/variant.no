export function validateDraftDataInDevelopment(data: unknown): void {
  if (process.env.NODE_ENV === "development") {
    if (typeof data !== "object" || data === null) {
      console.error(
        `Preview data has an unexpected type: ${typeof data}. Expected an object.`,
      );
    }
  }
}
