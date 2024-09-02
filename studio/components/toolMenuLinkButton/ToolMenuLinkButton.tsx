import styles from "./toolMenuLinkButton.module.css";

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
  return (
    <a
      className={`${styles.wrapper}${context === "sidebar" ? ` ${styles.inSidebar}` : ""}`}
      href={value}
    >
      <span className={styles.text}>{label}</span>
    </a>
  );
};
