"use client";
import { SanityImage } from "src/components/image/SanityImage";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import useTabs from "src/utils/hooks/useTabs";
import { TestimonialsSection } from "studio/lib/interfaces/pages";

import styles from "./testimonials.module.css";

interface TestimonialsProps {
  testimonials: TestimonialsSection;
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const { tabListRef, selectedTabIndex } = useTabs();

  if (!testimonials.listOfTestimonials) {
    return null;
  }

  const imageStyling = testimonials.imagesAsCircles
    ? styles.avatar
    : styles.image;

  return (
    <article className={styles.article} id={testimonials._key}>
      <div className={styles.wrapper}>
        <Text type="h2" id="title" className={styles.sidePadding}>
          {testimonials.basicTitle}
        </Text>
        <div className={styles.tabSection}>
          <ul
            role="tablist"
            aria-labelledby="title"
            aria-orientation="horizontal"
            className={styles.tabList}
            ref={tabListRef}
          >
            {testimonials.listOfTestimonials.map((testimony, index) => {
              const isSelected = selectedTabIndex === index;
              return (
                <li role="presentation" key={`panel-${index}`}>
                  <button
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`tabpanel-${index}`}
                    id={`tab-${index}`}
                    tabIndex={isSelected ? 0 : -1}
                    className={`${styles.tab} ${isSelected && styles.selected}`}
                  >
                    <div className={imageStyling}>
                      <SanityImage image={testimony.image} />
                    </div>
                    <span className={styles.info}>
                      <span className={styles.title}>
                        {testimony.basicTitle}
                      </span>
                      <span className={styles.subTitle}>
                        {testimony.subTitle}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.contentWrapper}>
            {testimonials.listOfTestimonials.map(
              (content, index) =>
                content.richText && (
                  <section
                    role="tabpanel"
                    aria-labelledby={`tab-${index}`}
                    className={`${styles.content} ${
                      selectedTabIndex === index ? styles.visible : ""
                    }`}
                    tabIndex={selectedTabIndex === index ? 0 : -1}
                    id={`tabpanel-${index}`}
                    key={`tabpanel-${index}`}
                    aria-hidden={selectedTabIndex !== index}
                  >
                    <RichText value={content.richText} />
                  </section>
                ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
