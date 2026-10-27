import type { TabbedSectionTab } from "./TabbedSection";

/**
 * Tab id for the "All" tab. Double underscores keep it from colliding with a
 * real location or office id.
 */
export const ALL_LOCATIONS = "__all__";

export interface LocationOption {
  id: string;
  label: string;
  count: number;
}

/** "All (allCount)" followed by one "label (count)" tab per location. */
export function buildLocationTabs({
  allLabel,
  allCount,
  locations,
}: {
  allLabel: string;
  allCount: number;
  locations: LocationOption[];
}): TabbedSectionTab[] {
  return [
    { id: ALL_LOCATIONS, label: `${allLabel} (${allCount})` },
    ...locations.map((location) => ({
      id: location.id,
      label: `${location.label} (${location.count})`,
    })),
  ];
}

/** Returns `value` if it is a known id, otherwise the "All" sentinel. */
export function resolveLocation(
  value: string | null | undefined,
  knownIds: readonly string[],
): string {
  return value && knownIds.includes(value) ? value : ALL_LOCATIONS;
}
