import Text from "src/components/text/Text";
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
        <div className={styles.titleSection}>
          <Text type={"h2"}>{section.basicTitle}</Text>
          <Text type={"bodyNormal"}>{section.subtitle}</Text>
        </div>
        <JobPostingList
          jobPostings={jobPostings.jobPostingsArray}
          companyLocations={companyLocations}
        />
      </div>
    )
  );
}
