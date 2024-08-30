import { ArrowRightIcon } from "@sanity/icons";
import styles from "./linkButton.module.css";

export const LinkButton = () => {
  return (
    <a className={styles.wrapper} href={"/shared"}>
      <span className={styles.text}>
        Shared Studio <ArrowRightIcon />
      </span>
    </a>
  );
};
