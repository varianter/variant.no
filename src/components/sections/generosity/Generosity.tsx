import { Handbook } from "src/components/sections/compensation-calculator/CompensationCalculator";
import SmileyBox from "src/components/smileyBox/SmileyBox";
import Text from "src/components/text/Text";
import {
  CompensationCalculatorBackground,
  GenerositySection,
} from "studio/lib/interfaces/pages";

import styles from "./generosity.module.css";

export interface GenerosityProps {
  section: GenerositySection;
  language: string;
}

export default function Generosity({ section, language }: GenerosityProps) {
  return (
    <div className={styles.wrapper}>
      <Text type={"h2"} className={styles.title}>
        {section.basicTitle}
      </Text>
      <div className={styles.content}>
        <SmileyBox
          description={section.description}
          smileySide="right"
          smileyType="smug"
          backgroundColor="purple"
        />
        <Handbook
          title={section.handbookBlock.handbookTitle}
          description={section.handbookBlock.handbookDescription}
          link={section.handbookBlock.handbookLink}
          sectionBackground={CompensationCalculatorBackground.Violet}
          language={language}
        />
      </div>
    </div>
  );
}
