"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";

import styles from "./yearSelector.module.css";

interface YearSelectorProps {
  years: string[];
  preselectedYear?: string | null;
  onFilterChange: (location: string | null) => void;
}

function sortNumeric(locations: string[]) {
  return locations.sort().reverse();
}

export default function YearSelector({
  years,
  preselectedYear = null,
  onFilterChange,
}: YearSelectorProps) {
  const [yearFilter, setYearFilter] = useState<string | null>(preselectedYear);
  const handleFilterChange = (year: string | null) => {
    setYearFilter(year);
    onFilterChange(year);
  };

  const t = useTranslations("year_selector");

  return (
    <div className={styles.filters}>
      <Text type="label">{t("year")}</Text>

      <Tag
        active={!yearFilter}
        type="button"
        onClick={() => handleFilterChange(null)}
        text={t("all")}
      />

      {sortNumeric(years).map((year) => (
        <Tag
          key={year}
          active={yearFilter === year}
          type="button"
          onClick={() => handleFilterChange(year)}
          text={year}
        />
      ))}
    </div>
  );
}
