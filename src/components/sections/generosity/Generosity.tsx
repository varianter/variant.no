import { Handbook } from "src/components/sections/handbook/HandbookSection";
import SmileyBox from "src/components/smileyBox/SmileyBox";
import Text from "src/components/text/Text";
import { GenerositySection } from "studio/lib/interfaces/pages";

import styles from "./generosity.module.css";

export interface GenerosityProps {
  section: GenerositySection;
  language: string;
}

export default function Generosity({ section, language }: GenerosityProps) {
  return (
    <div className={styles.wrapper}>
      <Text type={"titleL"} className={styles.title}>
        {section.basicTitle}
      </Text>
      <div className={styles.content}>
        <SmileyBox
          description={section.description}
          smileySide="right"
          smileyType="smug"
          backgroundColor="purple"
        />
        <Handbook section={section.handbookBlock} language={language} />
      </div>
    </div>
  );
}
