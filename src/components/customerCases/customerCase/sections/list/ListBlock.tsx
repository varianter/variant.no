import React from "react";

import Text from "src/components/text/Text";
import { ListBlock as ListBlockObject } from "studioShared/lib/interfaces/listBlock";

import styles from "./listBlock.module.css";

export interface ListBlockProps {
  section: ListBlockObject;
}

export default function ListBlock({ section }: ListBlockProps) {
  return (
    section.description && (
      <div className={styles.wrapper}>
        <div className={styles.listwrapper}>
          <Text type="titleS">{section.description}</Text>
          <div className={styles.tagwrapper}>
            {section.list?.map((listItem) => (
              <div className={styles.tag} key={listItem._key}>
                <Text type="label">{listItem.text}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
