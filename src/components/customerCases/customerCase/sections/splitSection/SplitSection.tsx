import { CustomerCaseSection } from "src/components/customerCases/customerCase/sections/CustomerCaseSection";
import TextSection from "src/components/customerCases/customerCase/sections/text/TextSection";
import {
  SplitSection as SplitSectionObject,
  SplitSectionSection as SplitSectionSectionObject,
} from "studioShared/lib/interfaces/splitSection";

import styles from "./splitSection.module.css";

export interface SplitSectionProps {
  section: SplitSectionObject;
}

function SplitSectionSection({
  section,
}: {
  section: SplitSectionSectionObject;
}) {
  switch (section._type) {
    case "emptySection":
      return <div className={styles.emptySection}></div>;
    case "textBlock":
      return <TextSection section={section} />;
  }
  return <CustomerCaseSection section={section} />;
}

export default function SplitSection({ section }: SplitSectionProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {section.sections?.map((section) => (
          <SplitSectionSection key={section._key} section={section} />
        ))}
      </div>
    </div>
  );
}
