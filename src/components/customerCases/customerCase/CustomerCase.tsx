import { SanitySharedImage } from "src/components/image/SanityImage";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import {
  CustomerCase as CustomerCaseDocument,
  Delivery,
} from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCase.module.css";

export interface CustomerCaseProps {
  customerCase: CustomerCaseDocument;
}

export default function CustomerCase({ customerCase }: CustomerCaseProps) {
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
                  {customerCase.projectInfo.consultants.join(", ")}
                </Text>
              </div>
            )}
          </div>
        </div>
        <div className={styles.sectionsWrapper}>
          {customerCase.sections.map((section) => (
            <div key={section._key}>
              {section._type === "richTextBlock" ? (
                <RichText value={section.richText} />
              ) : section._type === "quoteBlock" ? (
                section.quote && (
                  <div>
                    <Text>{section.quote}</Text>
                    {section.author && <Text>- {section.author}</Text>}
                  </div>
                )
              ) : (
                <div className={styles.imageBlockWrapper}>
                  {section.images?.map((image) => (
                    <div
                      key={image._key ?? `${section._key}-${image.alt}`}
                      className={styles.imageBlockImageWrapper}
                    >
                      <div className={styles.imageBlockImageContent}>
                        <SanitySharedImage image={image} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
