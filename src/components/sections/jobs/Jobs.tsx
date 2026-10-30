import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPostings } from "studio/lib/interfaces/jobPosting";
import { JobsSection } from "studio/lib/interfaces/pages";
import {
  COMPANY_LOCATIONS_QUERY,
  JOB_POSTINGS_QUERY,
} from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

import JobPostingList from "./JobPostingList";
import styles from "./jobs.module.css";

export interface JobsProps {
  language: string;
  section: JobsSection;
}

export default async function Jobs({ language, section }: JobsProps) {
  const { data: jobPostings } = await loadStudioQuery<IJobPostings | null>(
    JOB_POSTINGS_QUERY,
    {
      language,
    },
  );

  const { data: companyLocations } = await loadStudioQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    {},
  );

  return (
    jobPostings &&
    companyLocations && (
      <div className={styles.wrapper}>
        <JobPostingList
          jobPostings={jobPostings.jobPostingsArray}
          companyLocations={companyLocations}
          title={section.basicTitle}
          subtitle={section.subtitle}
        />
      </div>
    )
  );
}
