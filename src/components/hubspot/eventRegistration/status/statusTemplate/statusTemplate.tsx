import React from "react";

import Text from "src/components/text/Text";

import styles from "./statusTemplate.module.css";

interface StatusTemplateProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  children: React.ReactNode;
}

export default function StatusTemplate({
  imgSrc,
  imgAlt,
  title,
  children,
}: StatusTemplateProps) {
  return (
    <div className={styles.statusTemplate}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <Text type="titleM">{title}</Text>
      {children}
    </div>
  );
}
