import { useTranslations } from "next-intl";
import { useState } from "react";

import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";

import styles from "./officeSelector.module.css";

interface OfficeSelectorProps {
  companyLocations: CompanyLocation[];
  eventPostingsCount: number;
  eventPostingsPerLocation: Record<string, number>;
  hiddenLocations?: Set<string>;
  onFilterChange: (location: CompanyLocation | null) => void;
}

const defaultHiddenLocations = new Set([
  "Norge",
  "Norway",
  "Sverige",
  "Sweden",
]);

function sortAlphabetically(locations: CompanyLocation[]) {
  return locations.sort(
    (a, b) =>
      a?.companyLocationName.localeCompare(b.companyLocationName ?? "") ?? 0,
  );
}

export default function OfficeSelector({
  companyLocations,
  eventPostingsCount,
  eventPostingsPerLocation,
  hiddenLocations = defaultHiddenLocations,
  onFilterChange,
}: OfficeSelectorProps) {
  const [locationFilter, setLocationFilter] = useState<CompanyLocation | null>(
    null,
  );

  const filteredLocations = companyLocations.filter(
    (location) => !hiddenLocations.has(location.companyLocationName),
  );

  const handleFilterChange = (location: CompanyLocation | null) => {
    setLocationFilter(location);
    onFilterChange(location);
  };

  const t = useTranslations("office_selector");

  return (
    <div className={styles.filters}>
      <Text type="labelRegular">{t("location")}</Text>
      <Tag
        active={!locationFilter}
        type="button"
        onClick={() => handleFilterChange(null)}
        text={`${t("all")} (${eventPostingsCount})`}
        background="dark"
      />
      {sortAlphabetically(filteredLocations).map(
        (location) =>
          eventPostingsPerLocation[location.companyLocationName] > 0 && (
            <Tag
              key={location._id}
              active={locationFilter === location}
              type="button"
              onClick={() => handleFilterChange(location)}
              text={`${location.companyLocationName} (${eventPostingsPerLocation[location.companyLocationName] || 0})`}
              background="dark"
            />
          ),
      )}
    </div>
  );
}
