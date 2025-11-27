import React, { Fragment } from "react";

import DotSeparator from "src/components/dotSeparator/dotSeparator";
import Text, { TextType } from "src/components/text/Text";

import styles from "./eventSpeakers.module.css";

interface EventSpeakersProps {
  consultantsFirstNames: string[];
  textType: TextType;
}

export default function EventSpeakers({
  consultantsFirstNames,
  textType,
}: EventSpeakersProps) {
  return (
    <div>
      {consultantsFirstNames?.length > 0 && (
        <div className={styles.flex}>
          <Text type={textType}>
            <span className={styles.preFancyCharacter}>【 </span>
          </Text>
          <div>
            {consultantsFirstNames.map((name, _key) => (
              <Fragment key={_key}>
                <Text type={textType}>{name}</Text>
                <DotSeparator />
              </Fragment>
            ))}
          </div>
          <Text type={textType}>
            <span className={styles.afterFancyCharacter}> 】</span>
          </Text>
        </div>
      )}
    </div>
  );
}
