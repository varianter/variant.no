import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPosting } from "studio/lib/interfaces/jobPosting";

import styles from "./jobPosting.module.css";

interface JobPostingProps {
  jobPosting: IJobPosting;
}

export default function JobPosting({ jobPosting }: JobPostingProps) {
  const jobPostingLocations = jobPosting.locations
    .map((location: CompanyLocation) => location.companyLocationName)
    .join(", ");

  return (
    <a
      href={jobPosting.recruiteeAdUrl}
      target="_blank"
      className={styles.jobPosting}
    >
      <div className={styles.details}>
        <div className={styles.role}>
          <Text type={"h5"}>{jobPosting.role}</Text>
        </div>
        <div className={styles.locations}>
          <Text type={"labelLight"}>{jobPostingLocations}</Text>
        </div>
      </div>
    </a>
  );
}
