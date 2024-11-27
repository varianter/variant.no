import { getTranslations } from "next-intl/server";

import Badge from "src/components/badge/Badge";
import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";
import { LinkType } from "studio/lib/interfaces/navigation";
import {
  CustomerCaseProjectInfo as CustomerCaseCaseProjectInfoObject,
  CustomerSector,
} from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCaseProjectInfo.module.css";

interface CustomerCaseProjectInfoProps {
  projectInfo: CustomerCaseCaseProjectInfoObject;
  consultantsInProject: ChewbaccaEmployee[];
}

export default async function CustomerCaseProjectInfo({
  projectInfo,
  consultantsInProject,
}: CustomerCaseProjectInfoProps) {
  const t = await getTranslations("customer_case");

  return (
    <>
      <div className={styles.projectInfo}>
        <div className={styles.projectInfoInner}>
          {projectInfo.customerSectors && (
            <div>
              <Text className={styles.title} type="labelRegular">
                {t("customer").toUpperCase()}
              </Text>
              <div className={styles.badgeWrapper}>
                {projectInfo.customerSectors.map((sector: CustomerSector) => (
                  <Badge key={sector._key}>{sector.customerSector}</Badge>
                ))}
              </div>
            </div>
          )}
          <div>
            <Text className={styles.title} type="labelRegular">
              {t("variants").toUpperCase()}
            </Text>
            <div className={styles.varianter}>
              <Text className={styles.preFancyCharacter}>【 </Text>
              {consultantsInProject.map((c) => (
                <Text
                  key={c.name}
                  type="bodyNormal"
                  className={styles.dotSeperatorVarianter}
                >
                  {c.name}
                </Text>
              ))}
              <Text className={styles.afterFancyCharacter}> 】</Text>
            </div>
          </div>
          {projectInfo.collaborators && (
            <div>
              <Text className={styles.title} type="labelRegular">
                {t("collaborators").toUpperCase()}
              </Text>
              <div className={styles.projectInfoItem}>
                {projectInfo.collaborators.map((collaborator) => (
                  <Text
                    type="bodyNormal"
                    key={collaborator}
                    className={styles.dotSeperator}
                  >
                    {collaborator}
                  </Text>
                ))}
              </div>
            </div>
          )}
          {projectInfo.url && (
            <div className={styles.urlWrapper}>
              <Text className={styles.title} type="labelRegular">
                {t("url")}
              </Text>
              <CustomLink
                link={{
                  _key: "go-to-external-link",
                  _type: "link",
                  linkType: LinkType.External,
                  linkTitle: projectInfo.url,
                  url: projectInfo.url,
                  ariaLabel: projectInfo.url,
                }}
              />
            </div>
          )}
        </div>
        <div>
          {projectInfo.deliveries && (
            <div className={styles.deliveries}>
              {projectInfo.deliveries["projectManagement"] && (
                <div>
                  <Text className={styles.title} type="labelRegular">
                    {t("project_management").toUpperCase()}
                  </Text>
                  <div className={styles.projectInfoItem}>
                    {projectInfo.deliveries["projectManagement"].map(
                      (projectManagement) => (
                        <Text
                          type="bodyNormal"
                          key={projectManagement.key}
                          className={styles.dotSeperator}
                        >
                          {projectManagement.projectManagementDelivery}
                        </Text>
                      ),
                    )}
                  </div>
                </div>
              )}
              {projectInfo.deliveries["design"] && (
                <div>
                  <Text className={styles.title} type="labelRegular">
                    {t("design").toUpperCase()}
                  </Text>
                  <div className={styles.projectInfoItem}>
                    {projectInfo.deliveries["design"].map((design) => (
                      <Text
                        key={design.key}
                        type="bodyNormal"
                        className={styles.dotSeperator}
                      >
                        {design.designDelivery}
                      </Text>
                    ))}
                  </div>
                </div>
              )}
              {projectInfo.deliveries["development"] && (
                <div>
                  <Text className={styles.title} type="labelRegular">
                    {t("development").toUpperCase()}
                  </Text>
                  <div className={styles.projectInfoItem}>
                    {projectInfo.deliveries["development"].map(
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
    </>
  );
}
