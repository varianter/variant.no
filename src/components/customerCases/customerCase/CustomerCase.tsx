import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { CustomerCase as CustomerCaseDocument } from "studioShared/lib/interfaces/customerCases";

import ContactInformation from "./contactInformation/ContactInformation";
import styles from "./customerCase.module.css";
import FeaturedCases from "./featuredCases/FeaturedCases";
import CustomerCaseProjectInfo from "./projectInfo/CustomerCaseProjectInfo";
import CustomerCaseConsultants from "./sections/customerCaseConsultants/CustomerCaseConsultants";
import { CustomerCaseSection } from "./sections/CustomerCaseSection";

export interface CustomerCaseProps {
  customerCase: CustomerCaseDocument;
  customerCasesPagePath: string[];
}

export default async function CustomerCase({
  customerCase,
  customerCasesPagePath,
}: CustomerCaseProps) {
  const consultantsResult = await fetchEmployeesByEmails(
    customerCase.projectInfo.consultants.map((e) => e.employeeEmail),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Text type={"h1"} className={styles.mainTitle}>
          {customerCase.basicTitle}
        </Text>
        <hr className={styles.divider} />
        {consultantsResult.ok && (
          <div className={styles.projectInfoWrapper}>
            <CustomerCaseProjectInfo projectInfo={customerCase.projectInfo} />
          </div>
        )}
        <div className={styles.mainImageWrapper}>
          <SanitySharedImage image={customerCase.image} />
        </div>
        <div className={styles.sectionsWrapper}>
          {customerCase.sections.map((section) => (
            <CustomerCaseSection key={section._key} section={section} />
          ))}
        </div>
        {consultantsResult.ok && (
          <CustomerCaseConsultants
            language={customerCase.language}
            consultants={consultantsResult.value}
          />
        )}
        {customerCase.featuredCases &&
          customerCase.featuredCases.length > 0 && (
            <FeaturedCases
              featuredCases={customerCase.featuredCases}
              customerCasesPath={customerCasesPagePath}
            />
          )}
        <ContactInformation language={customerCase.language} />
      </div>
    </div>
  );
}
