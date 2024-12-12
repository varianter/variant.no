import Badge from "src/components/badge/Badge";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPosting } from "studio/lib/interfaces/jobPosting";

import styles from "./jobPosting.module.css";

function sortAlphabetically(list: string[]) {
  return list.sort((a, b) => a.localeCompare(b ?? "") ?? 0);
}

interface JobPostingProps {
  jobPosting: IJobPosting;
  showLocations?: boolean;
}

export default function JobPosting({
  jobPosting,
  showLocations = true,
}: JobPostingProps) {
  const jobPostingLocations = sortAlphabetically(
    jobPosting.locations.map(
      (location: CompanyLocation) => location.companyLocationName,
    ),
  ).join(", ");

  return (
    <a
      href={jobPosting.recruiteeAdUrl}
      target="_blank"
      className={styles.jobPosting}
    >
      <Text type={"h5"} as={"span"} className={styles.role}>
        {jobPosting.role}

        {showLocations && (
          <Badge className={styles.locations}>{jobPostingLocations}</Badge>
        )}
      </Text>
    </a>
  );
}
