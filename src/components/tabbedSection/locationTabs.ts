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

/** City codes shown instead of the city name when the tabs wrap */
const CITY_CODES: Record<string, string> = {
  oslo: "OSL",
  bergen: "BGO",
  trondheim: "TRD",
  stavanger: "SVG",
  stockholm: "STO",
  göteborg: "GOT",
  linköping: "LPI",
};

/**
 * "All (allCount)" followed by one "label (count)" tab per location. When the
 * tabs wrap they drop the counts, and known cities show their city code.
 */
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
    {
      id: ALL_LOCATIONS,
      label: `${allLabel} (${allCount})`,
      shortLabel: allLabel,
    },
    ...locations.map((location) => ({
      id: location.id,
      label: `${location.label} (${location.count})`,
      shortLabel:
        CITY_CODES[location.label.trim().toLowerCase()] ?? location.label,
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
