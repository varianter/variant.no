import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import CustomLink from "src/components/link/CustomLink";
import Text from "src/components/text/Text";
import { CalloutSection } from "studio/lib/interfaces/pages";

import styles from "./callout.module.css";

interface CalloutProps {
  callout: CalloutSection;
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: ({ children }) => <Text type="bodyXl">{children}</Text>,
};

const Callout = ({ callout }: CalloutProps) => {
  return (
    callout.richText && (
      <article className={`${styles.shared}`} id={callout._key}>
        <div className={styles.callout}>
          <PortableText
            value={callout.richText}
            components={myPortableTextComponents}
          />
          {callout.link && <CustomLink link={callout.link} />}
        </div>
      </article>
    )
  );
};

export default Callout;
