import Link from "next/link";

import { PortableTextBlock, RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";

import styles from "./legal.module.css";

const extractHeadings = (blocks: PortableTextBlock[]) => {
  return blocks
    .filter((block) => block.style === "h2")
    .map((block) => block.children?.map((child) => child.text).join(" ") || "");
};

const Legal = ({ document }: { document: LegalDocument }) => {
  const headings = extractHeadings(document.richText);

  return (
    <div>
      <div className={styles.hero}>
        <Text type="h1">{document.basicTitle}</Text>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.listWrapper}>
            <p id="jump-to" className={styles.linkTitle}>
              Jump to section
            </p>
            <ul className={styles.anchorLinks} aria-labelledby="jump-to">
              {headings.map((heading) => {
                const hash = heading
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "");
                return (
                  <Link
                    key={hash}
                    href={`#${hash}`}
                    className={styles.anchorLink}
                  >
                    {heading}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={styles.document}>
            <RichText value={document.richText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
