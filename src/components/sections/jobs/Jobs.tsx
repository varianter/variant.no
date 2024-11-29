import JobPosting from "src/components/jobPosting/JobPosting";
import Text from "src/components/text/Text";
import { IJobPosting, IJobPostings } from "studio/lib/interfaces/jobPosting";
import { JobsSection } from "studio/lib/interfaces/pages";
import { JOB_POSTINGS_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <Text type={"h2"}>{section.basicTitle}</Text>
        <Text type={"bodyNormal"}>{section.subtitle}</Text>
      </div>
      <div className={styles.jobPostings}>
        {jobPostings?.jobPostingsArray?.map((jobPosting: IJobPosting) => (
          <JobPosting jobPosting={jobPosting} key={jobPosting._key} />
        ))}
      </div>
    </div>
  );
}
