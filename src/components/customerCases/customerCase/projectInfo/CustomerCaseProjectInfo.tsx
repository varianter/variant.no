import { getTranslations } from "next-intl/server";

import Badge from "src/components/badge/Badge";
import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { LinkType } from "studio/lib/interfaces/navigation";
import {
  CustomerCaseProjectInfo as CustomerCaseCaseProjectInfoObject,
  CustomerSector,
} from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCaseProjectInfo.module.css";

interface CustomerCaseProjectInfoProps {
  projectInfo: CustomerCaseCaseProjectInfoObject;
  clientColor: string;
}

export default async function CustomerCaseProjectInfo({
  projectInfo,
  clientColor,
}: CustomerCaseProjectInfoProps) {
  const t = await getTranslations("customer_case");

  let consultantsFirstNames;

  if (projectInfo.consultants) {
    consultantsFirstNames = projectInfo.consultants.map(
      (n) => n.employeeFirstName,
    );
  }

  return (
    <div className={styles.projectInfo}>
      <div className={styles.projectInfoInner}>
        {projectInfo.customerSectors && (
          <div>
            <Text type="labelRegular" color="tertiary">
              {t("customer").toUpperCase()}
            </Text>
            <div className={styles.badgeWrapper}>
              {projectInfo.customerSectors.map((sector: CustomerSector) => (
                <Badge key={sector._key} badgeColor={clientColor}>
                  {sector.customerSector}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {consultantsFirstNames && (
          <div>
            <Text type="labelRegular" color="tertiary">
              {t("variants").toUpperCase()}
            </Text>
            <div className={styles.varianter}>
              <Text>
                <span
                  className={styles.preFancyCharacter}
                  style={{ color: clientColor }}
                >
                  【{" "}
                </span>
              </Text>
              {consultantsFirstNames.map((name, idx, arr) => (
                <Text key={name} type="bodyNormal">
                  {name}
                  {idx < arr.length - 1 && (
                    <span className={styles.dotSeperator} />
                  )}
                </Text>
              ))}
              <Text>
                <span
                  className={styles.afterFancyCharacter}
                  style={{ color: clientColor }}
                >
                  {" "}
                  】
                </span>
              </Text>
            </div>
          </div>
        )}
        {projectInfo.collaborators && (
          <div>
            <Text type="labelRegular" color="tertiary">
              {t("collaborators").toUpperCase()}
            </Text>
            <div className={styles.projectInfoItem}>
              {projectInfo.collaborators.map((collaborator, idx, arr) => (
                <Text type="bodyNormal" key={collaborator}>
                  {collaborator}
                  {idx < arr.length - 1 && (
                    <span className={styles.dotSeperator} />
                  )}
                </Text>
              ))}
            </div>
          </div>
        )}
        {projectInfo.url && (
          <div className={styles.urlWrapper}>
            <Text type="labelRegular" color="tertiary">
              {t("url").toUpperCase()}
            </Text>
            <CustomLink
              link={{
                _key: "go-to-external-link",
                _type: "link",
                linkType: LinkType.External,
                linkTitle: shortenUrl(projectInfo.url),
                url: projectInfo.url,
                ariaLabel: projectInfo.url,
              }}
            />
          </div>
        )}
      </div>
      {projectInfo.deliveries && (
        <div className={styles.deliveries}>
          {projectInfo.deliveries["projectManagement"] && (
            <div>
              <Text type="labelRegular" color="tertiary">
                {t("project_management").toUpperCase()}
              </Text>
              <div className={styles.projectInfoItem}>
                {projectInfo.deliveries["projectManagement"].map(
                  (projectManagement, idx, arr) => (
                    <Text type="bodyNormal" key={projectManagement.key}>
                      {projectManagement.projectManagementDelivery}
                      {idx < arr.length - 1 && (
                        <span className={styles.dotSeperator} />
                      )}
                    </Text>
                  ),
                )}
              </div>
            </div>
          )}
          {projectInfo.deliveries["design"] && (
            <div>
              <Text type="labelRegular" color="tertiary">
                {t("design").toUpperCase()}
              </Text>
              <div className={styles.projectInfoItem}>
                {projectInfo.deliveries["design"].map((design, idx, arr) => (
                  <Text key={design.key} type="bodyNormal">
                    {design.designDelivery}
                    {idx < arr.length - 1 && (
                      <span className={styles.dotSeperator} />
                    )}
                  </Text>
                ))}
              </div>
            </div>
          )}
          {projectInfo.deliveries["development"] && (
            <div>
              <Text type="labelRegular" color="tertiary">
                {t("development").toUpperCase()}
              </Text>
              <div className={styles.projectInfoItem}>
                {projectInfo.deliveries["development"].map(
                  (development, idx, arr) => (
                    <Text key={development.key} type="bodyNormal">
                      {development.developmentDelivery}
                      {idx < arr.length - 1 && (
                        <span className={styles.dotSeperator} />
                      )}
                    </Text>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function shortenUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}
