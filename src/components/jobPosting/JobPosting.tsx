import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { IJobPosting } from "studio/lib/interfaces/jobPosting";
import { LinkType } from "studio/lib/interfaces/navigation";

import styles from "./jobPosting.module.css";

interface JobPostingProps {
  jobPosting: IJobPosting;
}

export default async function JobPosting({ jobPosting }: JobPostingProps) {
  const jobPostingLocations = jobPosting.locations
    .map((location: CompanyLocation) => location.companyLocationName)
    .join(", ");

  return (
    <div className={styles.jobPosting}>
      <div className={styles.details}>
        <div className={styles.role}>
          <Text type={"h5"}>{jobPosting.role}</Text>
        </div>
        <div className={styles.locations}>
          <Text type={"bodyNormal"}>{jobPostingLocations}</Text>
        </div>
      </div>
      <LinkButton
        link={{
          _key: "recruitee",
          _type: "link",
          linkType: LinkType.External,
          linkTitle: " ",
          newTab: true,
          url: jobPosting.recruiteeAdUrl,
        }}
        type="secondary"
      />
    </div>
  );
}
