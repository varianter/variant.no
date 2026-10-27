"use client";

import { motion, useAnimationFrame, useReducedMotion } from "motion/react";
import {
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import Text from "src/components/text/Text";
import { cn } from "src/utils/css";

import styles from "./tabbedSection.module.css";
import {
  type TabbedSectionBackground,
  backgroundClass,
} from "./tabbedSectionBackground";

export type { TabbedSectionBackground } from "./tabbedSectionBackground";

export type TabbedSectionTab = { id: string; label: string };

interface TabbedSectionProps {
  /** Accessible name for the tab list */
  label: string;
  tabs: TabbedSectionTab[];
  activeId: string;
  onSelect: (id: string) => void;
  background?: TabbedSectionBackground;
  /** Custom section colors (e.g. editor-chosen), overriding `background` */
  customColors?: { background: string; text: string };
  /** Primary action shown opposite the tabs, e.g. a link to another page */
  action?: ReactNode;
  children: ReactNode;
}

// Geometry from the design. The section radius lives in CSS (--_radius).
const EDGE_DISTANCE = 22;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Section with an action group on top: a tab group plus a primary action.
 * The selected tab is connected to the section, the other tabs are secondary
 * buttons. Tabs keep their order and cannot be closed.
 *
 * The selected state is one shared element that slides to the new tab, so it
 * is always visible while switching.
 */
export default function TabbedSection({
  label,
  tabs,
  activeId,
  onSelect,
  background = "dark",
  customColors,
  action,
  children,
}: TabbedSectionProps) {
  const baseId = useId();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [wrapped, setWrapped] = useState(false);
  const busy = useRef(true);
  const busyTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const tabKey = tabs.map((tab) => tab.id).join("|");
  const hasActiveTab = tabs.some((tab) => tab.id === activeId);

  // Arrow keys, Home and End move focus between tabs; Enter or Space selects
  // (manual activation, since selecting a tab can refilter a whole list)
  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const buttons = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ??
        [],
    );
    const current = buttons.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    if (current === -1) return;
    const last = buttons.length - 1;
    const next = {
      ArrowRight: current === last ? 0 : current + 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    buttons[next].focus();
  };

  // No bounce: the indicator should settle, not wobble
  const slide = reduceMotion
    ? { duration: 0 }
    : ({ type: "spring", duration: 0.25, bounce: 0 } as const);

  // Distance-to-progress: the closer the selected tab is to the left edge, the
  // more the section corner and the left cutout straighten out. Reads the
  // indicator, so the corner follows it while it slides.
  const updateRadii = useCallback(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const indicator = listRef.current?.querySelector("[data-indicator]");
    if (!section || !panel || !indicator) return;
    const progress = clamp01(
      (indicator.getBoundingClientRect().left -
        panel.getBoundingClientRect().left) /
        EDGE_DISTANCE,
    );
    const radius =
      parseFloat(getComputedStyle(section).getPropertyValue("--_radius")) || 0;
    section.style.setProperty("--_radius-left", `${radius * progress}px`);
    section.style.setProperty("--_p-left", String(progress));
  }, []);

  // Do the tabs fit in one row? Measured from widths, not positions, so the
  // answer doesn't depend on the order the browser has laid them out in.
  const updateWrapped = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    const needed =
      items.reduce((sum, item) => sum + item.offsetWidth, 0) +
      gap * Math.max(0, items.length - 1);
    setWrapped(needed > list.clientWidth + 1);
  }, []);

  const keepUpdating = useCallback((ms: number) => {
    busy.current = true;
    clearTimeout(busyTimeout.current);
    busyTimeout.current = setTimeout(() => (busy.current = false), ms);
  }, []);

  useAnimationFrame(() => {
    if (busy.current) updateRadii();
  });

  useEffect(() => {
    keepUpdating(600);
    const observer = new ResizeObserver(() => {
      updateWrapped();
      updateRadii();
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (listRef.current) observer.observe(listRef.current);
    updateWrapped();
    return () => {
      observer.disconnect();
      clearTimeout(busyTimeout.current);
    };
  }, [activeId, tabKey, keepUpdating, updateRadii, updateWrapped]);

  return (
    <div className={styles.root}>
      <div
        ref={sectionRef}
        className={cn(
          styles.section,
          backgroundClass[background],
          tabs.length === 0 ? styles["section--noTabs"] : undefined,
        )}
        style={
          customColors
            ? ({
                "--_bg": customColors.background,
                "--_fg": customColors.text,
              } as CSSProperties)
            : undefined
        }
      >
        {tabs.length > 0 && (
          <ul
            className={styles.tabList}
            role="tablist"
            aria-label={label}
            data-wrapped={wrapped}
            ref={listRef}
            onKeyDown={handleKeyDown}
          >
            {tabs.map((tab) => {
              const active = tab.id === activeId;
              return (
                <li
                  key={tab.id}
                  role="presentation"
                  className={cn(
                    styles.item,
                    active ? styles.itemActive : undefined,
                  )}
                  data-active={active}
                >
                  {active && (
                    <>
                      <motion.span
                        layoutId={`${baseId}-indicator`}
                        data-indicator
                        className={styles.indicator}
                        transition={slide}
                      />
                      <motion.span
                        layoutId={`${baseId}-cutout-left`}
                        className={cn(styles.cutout, styles.cutoutLeft)}
                        transition={slide}
                      >
                        <i />
                      </motion.span>
                      <motion.span
                        layoutId={`${baseId}-cutout-right`}
                        className={cn(styles.cutout, styles.cutoutRight)}
                        transition={slide}
                      >
                        <i />
                      </motion.span>
                    </>
                  )}
                  <button
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${tab.id}`}
                    aria-selected={active}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={active ? 0 : -1}
                    className={styles.tab}
                    onClick={() => onSelect(tab.id)}
                  >
                    <Text type="titleXS" as="span" color="dark">
                      {tab.label}
                    </Text>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {action && <div className={styles.action}>{action}</div>}
        <div
          ref={panelRef}
          className={styles.panel}
          id={`${baseId}-panel`}
          // Without tabs the panel is a plain container, and it is only
          // labelled by a tab that actually exists
          role={tabs.length > 0 ? "tabpanel" : undefined}
          aria-labelledby={
            hasActiveTab ? `${baseId}-tab-${activeId}` : undefined
          }
          aria-label={tabs.length > 0 && !hasActiveTab ? label : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
