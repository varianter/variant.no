import Text from "src/components/text/Text";
import styles from "./blogHero.module.css";
import { Category } from "studio/lib/payloads/pages";
import { LegacyRef } from "react";

const BlogHero = ({
  title,
  categories,
  ariaLabel,
  tabListRef,
  selectedTabIndex,
}: {
  title: string;
  categories: Category[];
  ariaLabel: string;
  tabListRef: LegacyRef<HTMLUListElement>;
  selectedTabIndex: number;
}) => {
  return (
    <div className={styles.hero}>
      <Text type="h1" className={styles.sidePadding}>
        {title}
      </Text>
      {categories.length > 2 && (
        <ul
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation="horizontal"
          className={styles.tabList}
          ref={tabListRef}
        >
          {categories.map((category, index) => {
            const isSelected = selectedTabIndex === index;
            return (
              <li key={category._key}>
                <button
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`category-tabpanel-${index}`}
                  id={`category-tab-${index}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`${styles.tab} ${isSelected ? styles.selected : ""}`}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BlogHero;
