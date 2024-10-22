import Link from "next/link";
import { PortableTextBlock } from "sanity";

import LinkButton from "src/components/linkButton/LinkButton";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { ILink, LinkType } from "studio/lib/interfaces/navigation";

import styles from "./legal.module.css";

const extractHeadings = (blocks: PortableTextBlock[]) => {
  return blocks
    .filter((block) => block.style === "h2")
    .map(
      (block) =>
        (Array.isArray(block.children) &&
          block.children?.map((child) => child.text).join(" ")) ||
        "",
    );
};

const Legal = ({ document }: { document: LegalDocument }) => {
  const headings = extractHeadings(document.richText ?? []);

  const link: ILink = {
    _key: "string",
    _type: "internalLink",
    linkTitle: "Add legal data",
    linkType: LinkType.Internal,
    internalLink: {
      _ref: `studio/structure/admin;legalDocuments;${document._id}`,
    },
  };

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
            {document.richText ? (
              <RichText value={document.richText} />
            ) : (
              <section className={styles.document}>
                <Text type="bodyNormal">
                  It appears that this legal document is missing some
                  information. Please visit the studio to add the necessary
                  details.
                </Text>
                <LinkButton link={link} />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
