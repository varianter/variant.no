import { ReactNode } from "react";

import { cn } from "src/utils/css";

import styles from "./tabbedSection.module.css";
import {
  type TabbedSectionBackground,
  backgroundClass,
} from "./tabbedSectionBackground";

interface TabbedSectionSkeletonProps {
  background?: TabbedSectionBackground;
  /** Panel content, shown in the same spot as the loaded panel */
  children: ReactNode;
}

/**
 * Static stand-in for TabbedSection while its content loads. Same outer
 * structure and heights, with a hidden placeholder tab row, so the layout does
 * not shift when the real section renders.
 */
export default function TabbedSectionSkeleton({
  background = "dark",
  children,
}: TabbedSectionSkeletonProps) {
  return (
    <div className={styles.root}>
      <div className={cn(styles.section, backgroundClass[background])}>
        <ul className={styles.tabList} aria-hidden="true">
          <li className={styles.item}>
            <span className={styles.tab} style={{ visibility: "hidden" }}>
              &nbsp;
            </span>
          </li>
        </ul>
        <div className={styles.panel}>{children}</div>
      </div>
    </div>
  );
}
