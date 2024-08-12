import React from "react";
import styles from "./link.module.css";
import Link from "next/link";
import { SocialMediaLink } from "studio/lib/payloads/socialMedia";

interface ISoMeLink {
  link: SocialMediaLink;
}

const SoMeLink = ({ link }: ISoMeLink) => {
  const { platform, url } = link;

  return (
    <Link
      className={`${styles.footerLink} ${styles.white}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {platform}
    </Link>
  );
};

export default SoMeLink;
