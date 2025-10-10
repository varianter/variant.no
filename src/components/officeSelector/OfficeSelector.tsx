import { useTranslations } from "next-intl";
import { useState } from "react";

import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";

import styles from "./officeSelector.module.css";

interface OfficeSelectorProps {
  locations: string[];
  eventPostingsCount: number;
  eventPostingsPerLocation: Record<string, number>;
  onFilterChange: (location: string | null) => void;
  textColor: string;
}

function sortAlphabetically(locations: string[]) {
  return locations.sort((a, b) => a.localeCompare(b));
}

export default function OfficeSelector({
  locations,
  eventPostingsCount,
  eventPostingsPerLocation,
  onFilterChange,
  textColor,
}: OfficeSelectorProps) {
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const handleFilterChange = (location: string | null) => {
    setLocationFilter(location);
    onFilterChange(location);
  };

  const t = useTranslations("office_selector");

  return (
    <div className={styles.filters}>
      <Text type="labelRegular" color="light">
        {t("location")}
      </Text>
      <Tag
        active={!locationFilter}
        type="button"
        onClick={() => handleFilterChange(null)}
        text={`${t("all")} (${eventPostingsCount})`}
        background={textColor === "#ffffff" ? "dark" : "light"}
      />
      {sortAlphabetically(locations).map(
        (location) =>
          eventPostingsPerLocation[location] > 0 && (
            <Tag
              key={location}
              active={locationFilter === location}
              type="button"
              onClick={() => handleFilterChange(location)}
              text={`${location} (${eventPostingsPerLocation[location] || 0})`}
              background={textColor === "#ffffff" ? "dark" : "light"}
            />
          ),
      )}
    </div>
  );
}
