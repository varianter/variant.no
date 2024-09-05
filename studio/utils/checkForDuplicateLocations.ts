interface LocationReference {
  _ref: string;
  _type: string;
  title?: string;
}

export interface DocumentWithLocation {
  location: LocationReference;
}

export const checkForDuplicateLocations = (
  documents: DocumentWithLocation[] | undefined,
): boolean => {
  if (!documents) return true;
  const locationRefs = documents
    .map((entry) => entry.location?._ref)
    .filter(Boolean);
  const uniqueRefs = new Set(locationRefs);
  return uniqueRefs.size === locationRefs.length;
};
