import styles from "./toolMenuLinkButton.module.css";
import { useTheme } from "@sanity/ui";

interface LinkButtonProps {
  label: string;
  value?: string;
  context: "topbar" | "sidebar";
}

export const ToolMenuLinkButton = ({
  label,
  value,
  context,
}: LinkButtonProps) => {
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;
  return (
    <a
      className={`${styles.wrapper}${context === "sidebar" ? ` ${styles.inSidebar}` : ""}${prefersDark ? ` ${styles.darkTheme}` : ""}`}
      href={value}
    >
      <span className={styles.text}>{label}</span>
    </a>
  );
};
