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
        <hr className={styles.divider} />
        <div className={styles.projectInfo}>
          <div className={styles.projectInfoInner}>
            {customerCase.projectInfo.customerSectors && (
              <div>
                <Text className={styles.title} type="labelRegular">
                  {t("customer").toUpperCase()}
                </Text>
                <div className={styles.projectInfoItem}>
                  {customerCase.projectInfo.customerSectors.map(
                    (sector: CustomerSector) => (
                      <Text
                        key={sector.key}
                        type="bodyNormal"
                        className={styles.dotSeperator}
                      >
                        {sector.customerSector}
                      </Text>
                    ),
                  )}
                </div>
              </div>
            )}
            {consultantsResult.ok && (
              <div>
                <Text className={styles.title} type="labelRegular">
                  {t("varianter").toUpperCase()}
                </Text>
                <div className={styles.varianter}>
                  <Text>【</Text>
                  {consultantsResult.value.map((c) => (
                    <Text
                      key={c.name}
                      type="bodyNormal"
                      className={styles.dotSeperatorVarianter}
                    >
                      {c.name}
                    </Text>
                  ))}
                  <Text>】</Text>
                </div>
              </div>
            )}
            {customerCase.projectInfo.collaborators && (
              <div>
                <Text className={styles.title} type="labelRegular">
                  {t("collaborators").toUpperCase()}
                </Text>
                <div className={styles.projectInfoItem}>
                  {customerCase.projectInfo.collaborators.map(
                    (collaborator) => (
                      <Text
                        type="bodyNormal"
                        key={collaborator}
                        className={styles.dotSeperator}
                      >
                        {collaborator}
                      </Text>
                    ),
                  )}
                </div>
              </div>
            )}
            {customerCase.projectInfo.url && (
              <div>
                <Text className={styles.title} type="labelRegular">
                  {t("url").toUpperCase()}
                </Text>
                <Text type="bodyNormal">{customerCase.projectInfo.url}</Text>
              </div>
            )}
          </div>
          <div>
            {customerCase.projectInfo.deliveries && (
              <div className={styles.deliveries}>
                {customerCase.projectInfo.deliveries["projectManagement"] && (
                  <div>
                    <Text className={styles.title} type="labelRegular">
                      {t("project_management").toUpperCase()}
                    </Text>
                    <div className={styles.projectInfoItem}>
                      {customerCase.projectInfo.deliveries[
                        "projectManagement"
                      ].map((projectManagement) => (
                        <Text
                          type="bodyNormal"
                          key={projectManagement.key}
                          className={styles.dotSeperator}
                        >
                          {projectManagement.projectManagementDelivery}
                        </Text>
                      ))}
                    </div>
                  </div>
                )}
                {customerCase.projectInfo.deliveries["design"] && (
                  <div>
                    <Text className={styles.title} type="labelRegular">
                      {t("design").toUpperCase()}
                    </Text>
                    <div className={styles.projectInfoItem}>
                      {customerCase.projectInfo.deliveries["design"].map(
                        (design) => (
                          <Text
                            key={design.key}
                            type="bodyNormal"
                            className={styles.dotSeperator}
                          >
                            {design.designDelivery}
                          </Text>
                        ),
                      )}
                    </div>
                  </div>
                )}
                {customerCase.projectInfo.deliveries["development"] && (
                  <div>
                    <Text className={styles.title} type="labelRegular">
                      {t("development").toUpperCase()}
                    </Text>
                    <div className={styles.projectInfoItem}>
                      {customerCase.projectInfo.deliveries["development"].map(
                        (development) => (
                          <Text
                            key={development.key}
                            type="bodyNormal"
                            className={styles.dotSeperator}
                          >
                            {development.developmentDelivery}
                          </Text>
                        ),
                      )}
                    </div>
                  </div>
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
