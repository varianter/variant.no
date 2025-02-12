import CompensationCalculator from "src/components/sections/compensation-calculator/CompensationCalculator";
import { Handbook } from "src/components/sections/handbook/HandbookSection";
import Text from "src/components/text/Text";
import {
  SplitSectionProps,
  SplitSectionSection,
} from "studio/lib/interfaces/pages";

import styles from "./splitSection.module.css";

export interface SplitSectionSectionProps {
  section: SplitSectionSection;
  language: string;
}

function GetSplitSectionSection({
  section,
  language,
}: SplitSectionSectionProps) {
  switch (section._type) {
    case "compensationCalculator":
      return <CompensationCalculator section={section} />;
    case "handbookSection":
      return (
        <Handbook key={section._key} section={section} language={language} />
      );
    default:
      return null;
  }
}

export default function SplitSection({ section, language }: SplitSectionProps) {
  const { title, sections } = section;

  return (
    <div className={styles.wrapper}>
      {title && (
        <Text type="h2" className={styles.title}>
          {title}
        </Text>
      )}
      <div className={styles.content}>
        {sections.map((section) => (
          <GetSplitSectionSection
            key={section._key}
            section={section}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
