import { ArrowRightIcon } from "@sanity/icons";
import styles from "./linkButton.module.css";

interface LinkButtonProps {
  value?: string;
}

export const LinkButton = ({ value }: LinkButtonProps) => {
  return (
    <a className={styles.wrapper} href={value}>
      <span className={styles.text}>
        Shared Studio <ArrowRightIcon />
      </span>
    </a>
  );
};
