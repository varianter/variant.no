import { getTranslations } from "next-intl/server";

import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { fetchEmployeesByEmails } from "src/utils/employees";
import {
  CustomerCase as CustomerCaseDocument,
  CustomerSector,
} from "studioShared/lib/interfaces/customerCases";

import ContactInformation from "./contactInformation/ContactInformation";
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

  const t = await getTranslations("customer_case");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Text type={"h1"} className={styles.mainTitle}>
          {customerCase.basicTitle}
        </Text>
        <div className={styles.projectInfo}>
          <div>
   
            {customerCase.projectInfo.customerSectors && (
                <div className={styles.projectInfoItem}>
                
                <Text type={"labelRegular"}>{t("customer")}</Text>
                {customerCase.projectInfo.customerSectors.map(
                 (sector: CustomerSector) => (
                      <div className={styles.projectInfoValue}> 
                      <Text
                      key={sector.key}
                      type={"labelLight"}
                    >
                      {sector.customerSector}
                    </Text></div>
                  ),
                )}
                </div> 
            )}
            {/* </div> */}
            {consultantsResult.ok && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>{t("varianter")}</Text>
                <Text
                  type={"labelLight"}
                >
                  {consultantsResult.value.map((c) => c.name).join(" - ")}
                </Text>
              </div>
            )}
            {customerCase.projectInfo.collaborators && (
              <div className="styles.projectInfoItem">
                <Text type={"labelRegular"}>{t("collaborators")}</Text>
                {customerCase.projectInfo.collaborators.map((collaborator) => (
                  <Text key={collaborator}>{collaborator}</Text>
                ))}
              </div>
            )}
            {customerCase.projectInfo.url && (
              <div> 
              <Text type={"labelRegular"}>{t("url")}</Text>
              <Text>{customerCase.projectInfo.url}</Text></div> 
            )}
          </div>
          <div className={styles.deliveries}>
            {customerCase.projectInfo.deliveries && (
              <div>
                {customerCase.projectInfo.deliveries["projectManagement"].map(
                  (projectManagement) => (
                    <div key={projectManagement.key}>
                      <Text type="labelRegular">{t("project_management")}</Text>
                      <Text>{projectManagement.projectManagementDelivery}</Text>
                    </div>
                  ),
                )}
                {customerCase.projectInfo.deliveries["design"].map((design) => (
                  <div key={design.key}>
                    <Text type="labelRegular"> {t("design")}</Text>
                    <Text> {design.designDelivery} </Text>
                  </div>
                ))}
                {customerCase.projectInfo.deliveries["development"].map(
                  (development) => (
                    <div key={development.key}>
                      <Text type="labelRegular"> {t("development")}</Text>
                      <Text> {development.developmentDelivery} </Text>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
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
