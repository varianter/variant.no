"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SanitySharedImage } from "src/components/image/SanityImage";
import styles from "src/components/sections/customerCasesEntry/customerCasesEntry.module.css";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { CustomerCaseEntry } from "studioShared/lib/interfaces/customerCases";

interface CustomerCasesProps {
  customerCases: CustomerCaseEntry[];
  language: string;
  customerCasePageSlug?: string;
}

const CustomerCaseList = ({
  customerCases,
  language,
  customerCasePageSlug,
}: CustomerCasesProps) => {
  const t = useTranslations("customer_case");
  const [selectedCustomerCase, setSelectedCustomerCase] =
    useState<CustomerCaseEntry>(customerCases[0] || null);

  const deliveryNames = [
    selectedCustomerCase.projectInfo.deliveries.projectManagement &&
      "Project Management",
    selectedCustomerCase.projectInfo.deliveries.design && "Design",
    selectedCustomerCase.projectInfo.deliveries.development && "Development",
  ].filter(Boolean);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.TagRow}>
          <Text className={styles.font} type="labelRegular">
            {t("customer_case_entry.case")}
          </Text>
          {customerCases.map(
            (customerCase: CustomerCaseEntry) =>
              customerCase && (
                <div key={customerCase._id}>
                  <Tag
                    active={customerCase._id === selectedCustomerCase._id}
                    type="button"
                    background="dark"
                    onClick={() => setSelectedCustomerCase(customerCase)}
                    text={customerCase.projectInfo.customer}
                  />
                </div>
              ),
          )}
        </div>
        <Link
          href={`/${language}/${customerCasePageSlug}/${selectedCustomerCase.slug}`}
        >
          <div className={styles.cardInfo}>
            <Text type="h2" className={styles.heading}>
              {" "}
              {selectedCustomerCase.basicTitle}
            </Text>
            <Text type="labelRegular">{t("customer_case_entry.field")}</Text>
            <Text type="h5"> {deliveryNames} </Text>
          </div>
        </Link>
      </div>
      {selectedCustomerCase.image && (
        <div className={styles.imageWrapper}>
          <SanitySharedImage image={selectedCustomerCase.image} />
        </div>
      )}
    </div>
  );
};
export default CustomerCaseList;
