import { ArrowRightIcon } from "@sanity/icons";
import styles from "./linkButton.module.css"

export const LinkButton = () => {
  return (
    <a className={styles.wrapper} href="http://localhost:3000/shared">
      <span className={styles.text}>
        Go to shared <ArrowRightIcon />
      </span>
    </a>
  );
};
