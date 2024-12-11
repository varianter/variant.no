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
  let consultantsResult;

  if (customerCase.projectInfo.consultants) {
    const consultantsEmail = customerCase.projectInfo.consultants.map(
      (e) => e.employeeEmail,
    );
    consultantsResult = await fetchEmployeesByEmails(consultantsEmail);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ColoredTitle
          title={customerCase.basicTitle}
          colorPart={customerCase.basicTitleColorPart}
          color={customerCase.clientColors.color}
        />
        <hr className={styles.divider} />
        <div className={styles.projectInfoWrapper}>
          <CustomerCaseProjectInfo
            projectInfo={customerCase.projectInfo}
            clientColors={customerCase.clientColors}
          />
        </div>
        <div className={styles.mainImageWrapper}>
          <SanitySharedImage image={customerCase.image} />
        </div>
        <div className={styles.sectionsWrapper}>
          {customerCase.sections.map((section) => (
            <CustomerCaseSection
              key={section._key}
              section={section}
              clientColors={customerCase.clientColors}
            />
          ))}
        </div>
        {consultantsResult?.ok && (
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

function ColoredTitle({
  title,
  colorPart,
  color,
}: {
  title: string;
  colorPart?: string;
  color?: string;
}) {
  if (!colorPart)
    return (
      <Text type={"h1"} className={styles.mainTitle}>
        {title}
      </Text>
    );

  const startColorIndex = title.indexOf(colorPart);
  const endColorIndex = startColorIndex + colorPart.length;

  const preColorText = title.slice(0, startColorIndex);
  const colorText = title.slice(startColorIndex, endColorIndex);
  const postColorText = title.slice(endColorIndex);

  return (
    <div className={styles.titleWrapper}>
      <Text type={"h1"} className={styles.mainTitle}>
        <span>{preColorText}</span>
        <span style={{ color: color }}>{colorText}</span>
        <span>{postColorText}</span>
      </Text>
    </div>
  );
}
