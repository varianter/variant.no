import Image from "next/image";

import { SanitySharedImage } from "src/components/image/SanityImage";
import Text from "src/components/text/Text";
import { fetchEmployeeByAlias } from "src/utils/employees";
import {
  CustomerCase as CustomerCaseDocument,
  CustomerCaseSection as CustomerCaseSectionObject,
  Delivery,
} from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCase.module.css";
import FeaturedCases from "./featuredCases/FeaturedCases";
import ImageSection from "./sections/image/ImageSection";
import RichTextSection from "./sections/richText/RichTextSection";

function CustomerCaseSection({
  section,
}: {
  section: CustomerCaseSectionObject;
}) {
  switch (section._type) {
    case "richTextBlock":
      return <RichTextSection section={section} />;
    case "quoteBlock":
      return (
        section.quote && (
          <div>
            <Text>{section.quote}</Text>
            {section.author && <Text>- {section.author}</Text>}
          </div>
        )
      );
    case "imageBlock":
      return <ImageSection section={section} />;
  }
}

export interface CustomerCaseProps {
  customerCase: CustomerCaseDocument;
  customerCasesPagePath: string[];
}

export default async function CustomerCase({
  customerCase,
  customerCasesPagePath,
}: CustomerCaseProps) {
  const consultantsResult = await Promise.all(
    customerCase.projectInfo.consultants.map((alias) =>
      fetchEmployeeByAlias(alias),
    ),
  );

  const consultants = consultantsResult.filter((c) => c.ok).map((c) => c.value);

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
            {customerCase.projectInfo.consultants && (
              <div className={styles.projectInfoItem}>
                <Text type={"labelRegular"}>Konsulenter</Text>
                <Text
                  type={"labelLight"}
                  className={styles.projectInfoItemValue}
                >
                  {consultants.map((c) => c.name).join(", ")}
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
        <div className={styles.consultantsWrapper}>
          <Text type={"h3"}>Varianter på prosjektet</Text>
          <div className={styles.consultants}>
            {consultants.map(
              (consultant) =>
                consultant.imageThumbUrl &&
                consultant.name &&
                consultant.email && (
                  <div key={consultant.email} className={styles.consultant}>
                    <div className={styles.consultantImage}>
                      <Image
                        src={consultant.imageUrl ?? consultant.imageThumbUrl}
                        alt={consultant.name}
                        objectFit="cover"
                        fill={true}
                      />
                    </div>
                    <div className={styles.consultantInfo}>
                      <p className={styles.consultantName}>{consultant.name}</p>
                      {consultant.officeName && (
                        <p className={styles.consultantRole}>
                          {consultant.officeName}
                        </p>
                      )}
                      {consultant.email && (
                        <p className={styles.consultantEmail}>
                          {consultant.email}
                        </p>
                      )}
                      {consultant.telephone && (
                        <p className={styles.consultantTelephone}>
                          {consultant.telephone}
                        </p>
                      )}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
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
