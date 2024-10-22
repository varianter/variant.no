import { SanitySharedImage } from "src/components/image/SanityImage";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { CustomerCase as CustomerCaseDocument } from "studioShared/lib/interfaces/customerCases";

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
          <Text type={"bodyBig"}>{customerCase.description}</Text>
          <div className={styles.projectInfo}>
            <div className={styles.projectInfoItem}>
              <Text>Kunde</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.customer}
              </Text>
            </div>
            <div className={styles.projectInfoItem}>
              <Text>Prosjekt</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.name}
              </Text>
            </div>
            <div className={styles.projectInfoItem}>
              <Text>Varighet</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.duration}
              </Text>
            </div>
          </div>
          <div className={styles.projectInfo}>
            <div className={styles.projectInfoItem}>
              <Text>Bransje</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.sector}
              </Text>
            </div>
            <div className={styles.projectInfoItem}>
              <Text>Leveranse</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.delivery}
              </Text>
            </div>
            <div className={styles.projectInfoItem}>
              <Text>Konsulenter</Text>
              <Text className={styles.projectInfoItemValue}>
                {customerCase.projectInfo.consultants.join(", ")}
              </Text>
            </div>
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
                      key={image._key}
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
