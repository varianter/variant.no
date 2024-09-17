/**
 * fetchWithToken
 *
 * Utility function to securely fetch data from the server using an API route.
 * This function sends a POST request to the /api/fetchData route with a GROQ query
 * and optional parameters. It returns the fetched data as a Promise of type T.
 *
 * This function should be used in client-side components where data needs to be
 * fetched securely using the server-side token without exposing it in the client code.
 *
 * @template T - The expected return type of the fetched data.
 * @param {string} query - The GROQ query string to be executed on the server.
 * @param {Record<string, any>} [params] - Optional parameters to be passed along with the query.
 * @returns {Promise<T>} - A promise that resolves to the fetched data of type T.
 *
 * @throws Will throw an error if the fetch operation fails or if the response is not ok.
 *
 * @example
 * const data = await fetchWithToken<MyDataType>("*[_type == 'myType']", { param1: 'value' });
 */
export const fetchWithToken = async <T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T> => {
  const response = await fetch("/api/fetchData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};
