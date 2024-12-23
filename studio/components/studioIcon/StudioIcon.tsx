import Image from "next/image";

import styles from "./studioIcon.module.css";

const StudioIcon = ({ variant }: { variant: "studio" | "shared" }) => {
  return (
    <Image
      alt={"Studio Icon"}
      width={540}
      height={540}
      className={styles.icon}
      src={
        variant === "studio"
          ? "/_assets/smile-square-figure.svg"
          : "/_assets/shook-square-figure.svg"
      }
    />
  );
};

export default StudioIcon;
