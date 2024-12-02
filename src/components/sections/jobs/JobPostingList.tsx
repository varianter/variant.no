"use client";

import { useEffect, useMemo, useState } from "react";

import JobPosting from "src/components/jobPosting/JobPosting";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPosting } from "studio/lib/interfaces/jobPosting";

import styles from "./jobs.module.css";

interface JobPostingListProps {
  jobPostings: IJobPosting[];
  companyLocations: CompanyLocation[];
}

export default function JobPostingList({
  jobPostings,
  companyLocations,
}: JobPostingListProps) {
  const [locationFilter, setLocationFilter] = useState<CompanyLocation | null>(
    null,
  );
  const [filteredJobPostings, setFilteredJobPostings] =
    useState<IJobPosting[]>(jobPostings);
  const jobPostingLocations = useMemo(
    () =>
      Object.fromEntries(
        jobPostings.map((jobPosting) => [
          jobPosting._key,
          jobPosting.locations.map((location) => location.companyLocationName),
        ]),
      ),
    [jobPostings],
  );

  useEffect(() => {
    if (locationFilter === null) {
      setFilteredJobPostings(jobPostings);
    } else {
      setFilteredJobPostings(
        jobPostings?.filter((jobPosting) =>
          jobPostingLocations[jobPosting._key].includes(
            locationFilter.companyLocationName,
          ),
        ),
      );
    }
  }, [locationFilter, jobPostings, jobPostingLocations]);

  return (
    <div className={styles.jobPostingsContainer}>
      <div className={styles.filters}>
        <Text type="labelRegular">Kontor</Text>
        <Tag
          active={!locationFilter}
          type="button"
          onClick={() => setLocationFilter(null)}
          text={"Alle"}
        />
        {companyLocations.map((location: CompanyLocation) => (
          <Tag
            active={locationFilter === location}
            type="button"
            onClick={() => setLocationFilter(location)}
            text={location.companyLocationName}
            key={location._id}
          />
        ))}
      </div>
      <div className={styles.jobPostings}>
        {filteredJobPostings?.map((jobPosting: IJobPosting) => (
          <JobPosting jobPosting={jobPosting} key={jobPosting._key} />
        ))}
      </div>
    </div>
  );
}