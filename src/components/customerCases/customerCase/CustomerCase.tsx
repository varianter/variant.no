import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { fetchEmployeesByEmails } from "src/utils/employees";
import {
  CustomerCase as CustomerCaseDocument,
  Delivery,
} from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCase.module.css";
import FeaturedCases from "./featuredCases/FeaturedCases";
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
    customerCase.projectInfo.consultants,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Text type={"h1"} className={styles.mainTitle}>
          {customerCase.basicTitle}
        </Text>
        <div className={styles.mainImageWrapper}>
          <SanitySharedImage image={customerCase.image} />
        </div>
        <div className={styles.ingress}>
          <div className={styles.projectDescription}>
            <Text type={"bodyBig"}>{customerCase.description}</Text>
          </div>
          <div className={styles.projectInfo}>
            {customerCase.projectInfo.customer && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Kunde</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemValue}
                >
                  {customerCase.projectInfo.customer}
                </Text>
              </div>
            )}
            {customerCase.projectInfo.name && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Prosjekt</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemValue}
                >
                  {customerCase.projectInfo.name}
                </Text>
              </div>
            )}
            {customerCase.projectInfo.duration && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Varighet</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemValue}
                >
                  {customerCase.projectInfo.duration}
                </Text>
              </div>
            )}
            {customerCase.projectInfo.sector && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Bransje</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemBadge}
                >
                  {customerCase.projectInfo.sector}
                </Text>
              </div>
            )}
            {customerCase.projectInfo.deliveries && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Leveranse</Text>
                {customerCase.projectInfo.deliveries.map(
                  (delivery: Delivery) => (
                    <Text
                      key={delivery.key}
                      type={"labelLight"}
                      className={styles.projectInfoItemBadge}
                    >
                      {delivery.delivery}
                    </Text>
                  ),
                )}
              </div>
            )}
            {consultantsResult.ok && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Konsulenter</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemValue}
                >
                  {consultantsResult.value.map((c) => c.name).join(", ")}
                </Text>
              </div>
            )}
          </div>
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
      </div>
    </div>
  );
}
