import Text from "src/components/text/Text";
import { ListBlock as ListBlockObject } from "studioShared/lib/interfaces/listBlock";

import styles from "./listBlock.module.css";

export interface ListBlockProps {
  section: ListBlockObject;
}

export default function ListBlock({ section }: ListBlockProps) {
  console.log(section);
  return (
    section.description && (
      <div className={styles.wrapper}>
        <div className={styles.listwrapper}>
          <Text type="h4">{section.description}</Text>
          <div className={styles.tagwrapper}>
            {section.list?.map((listItem) => (
              <Text
                type="labelRegular"
                key={listItem._key}
                className={styles.tag}
              >
                {listItem.text}
              </Text>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
