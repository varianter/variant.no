import styles from "./tabbedSection.module.css";

// Shared by TabbedSection (client) and TabbedSectionSkeleton (server-safe), so
// the map lives in a plain module: a client module's exports cannot be used as
// values from server components.
export type TabbedSectionBackground =
  | "dark"
  | "violet"
  | "blue"
  | "light"
  | "transparent";

export const backgroundClass: Record<TabbedSectionBackground, string> = {
  dark: styles["section--dark"],
  violet: styles["section--violet"],
  blue: styles["section--blue"],
  light: styles["section--light"],
  transparent: styles["section--transparent"],
};
