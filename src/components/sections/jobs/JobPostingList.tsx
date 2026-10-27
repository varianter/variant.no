"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import JobPosting from "src/components/jobPosting/JobPosting";
import {
  ALL_LOCATIONS,
  buildLocationTabs,
} from "src/components/tabbedSection/locationTabs";
import TabbedSection from "src/components/tabbedSection/TabbedSection";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPosting } from "studio/lib/interfaces/jobPosting";

import styles from "./jobs.module.css";

interface JobPostingListProps {
  jobPostings: IJobPosting[];
  companyLocations: CompanyLocation[];
  title: string;
  subtitle?: string;
}

function sortAlphabetically(filter: CompanyLocation[]) {
  return filter.sort(
    (a, b) =>
      a?.companyLocationName.localeCompare(b.companyLocationName ?? "") ?? 0,
  );
}

export default function JobPostingList({
  jobPostings,
  companyLocations,
  title,
  subtitle,
}: JobPostingListProps) {
  const t = useTranslations("job_posting");
  const [selectedOffice, setSelectedOffice] = useState(ALL_LOCATIONS);

  const jobPostingsPerLocation = Object.fromEntries(
    companyLocations.map((location) => [location.companyLocationName, 0]),
  );
  for (const jobPosting of jobPostings) {
    for (const location of jobPosting.locations) {
      jobPostingsPerLocation[location.companyLocationName]++;
    }
  }

  const filteredLocations = sortAlphabetically(
    companyLocations.filter(
      (location) => jobPostingsPerLocation[location.companyLocationName] > 0,
    ),
  );

  const activeLocation =
    filteredLocations.find((location) => location._id === selectedOffice) ??
    null;

  const filteredJobPostings = activeLocation
    ? jobPostings.filter((jobPosting) =>
        jobPosting.locations.some(
          (location) =>
            location.companyLocationName === activeLocation.companyLocationName,
        ),
      )
    : jobPostings;

  return (
    <TabbedSection
      label={t("office")}
      tabs={buildLocationTabs({
        allLabel: t("all"),
        allCount: jobPostings.length,
        locations: filteredLocations.map((location) => ({
          id: location._id,
          label: location.companyLocationName,
          count: jobPostingsPerLocation[location.companyLocationName],
        })),
      })}
      activeId={activeLocation ? activeLocation._id : ALL_LOCATIONS}
      onSelect={setSelectedOffice}
      background="violet"
    >
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <Text type={"titleL"} color="light">
            {title}
          </Text>
          <Text type={"normal"} color="light">
            {subtitle}
          </Text>
        </div>
        <div className={styles.jobPostings}>
          {filteredJobPostings.map((jobPosting: IJobPosting) => (
            <JobPosting
              jobPosting={jobPosting}
              key={jobPosting._key}
              showLocations={activeLocation === null}
            />
          ))}
        </div>
      </div>
    </TabbedSection>
  );
}
