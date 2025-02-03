"use client";

import React from "react";

import Pension from "src/advanced-calculator/Pension";
import { useOneG } from "src/advanced-calculator/use-g";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { Benefit } from "studio/lib/interfaces/compensations";

import styles from "./benefitsByLocation.module.css";

interface PensionSectionProps {
  benefit: Benefit;
}

const PensionSection = ({ benefit }: PensionSectionProps) => {
  const oneG = useOneG();

  return (
    <>
      <div className={styles.sectionText}>
        <Text type="h2">{benefit.basicTitle}</Text>
        <RichText value={benefit.richText} />
      </div>

      <Pension oneG={oneG} />
    </>
  );
};

export default PensionSection;
