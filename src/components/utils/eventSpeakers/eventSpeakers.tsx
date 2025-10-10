import React from "react";

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
            <span>【 </span>
          </Text>
          {consultantsFirstNames.map((name, idx, arr) => (
            <div key={name}>
              <Text type={textType}>
                {name}
                {idx < arr.length - 1 && (
                  <span className={styles.dotSeperator}></span>
                )}
              </Text>
            </div>
          ))}
          <Text type={textType}>
            <span> 】</span>
          </Text>
        </div>
      )}
    </div>
  );
}
