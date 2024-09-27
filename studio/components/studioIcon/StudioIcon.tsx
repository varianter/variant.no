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
          ? "/_assets/studioIcon.png"
          : "/_assets/sharedStudioIcon.png"
      }
    />
  );
};

export default StudioIcon;
