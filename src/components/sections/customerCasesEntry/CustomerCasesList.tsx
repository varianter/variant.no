"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SanityImage } from "src/components/image/SanityImage";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { CustomerCaseEntry } from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCasesEntry.module.css";

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
  const [selectedCustomerCase, setSelectedCustomerCase] =
    useState<CustomerCaseEntry>(customerCases[0]);

  const deliveryNames = [
    selectedCustomerCase?.projectInfo.deliveries.projectManagement &&
      "project_management",
    selectedCustomerCase?.projectInfo.deliveries.design && "design",
    selectedCustomerCase?.projectInfo.deliveries.development && "development",
  ].filter(Boolean);

  return (
    selectedCustomerCase && (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.infoInnerMaxWidth}>
              <TagRow
                customerCases={customerCases}
                selectedCustomerCase={selectedCustomerCase}
                setSelectedCustomerCase={setSelectedCustomerCase}
              />
              <Link
                className={styles.link}
                href={`/${language}/${customerCasePageSlug}/${selectedCustomerCase.slug}`}
              >
                <CardInfo
                  selectedCustomerCase={selectedCustomerCase}
                  deliveryNames={deliveryNames}
                />
              </Link>
            </div>
          </div>
          <Link
            tabIndex={-1}
            className={styles.imageWrapper}
            href={`/${language}/${customerCasePageSlug}/${selectedCustomerCase.slug}`}
            title={selectedCustomerCase.basicTitle}
          >
            {selectedCustomerCase.image && (
              <SanityImage image={selectedCustomerCase.image} isShared />
            )}
          </Link>
        </div>
      </div>
    )
  );
};
export default CustomerCaseList;

function CardInfo({
  selectedCustomerCase,
  deliveryNames,
}: {
  selectedCustomerCase: CustomerCaseEntry;
  deliveryNames: string[];
}) {
  const t = useTranslations("customer_case");

  return (
    <div className={styles.cardInfo}>
      <Text type="h2" className={styles.heading}>
        {selectedCustomerCase.basicTitle}
      </Text>
      <div className={styles.deliveries}>
        <Text type="labelRegular">{t("customer_case_entry.field")}</Text>
        <div className={styles.deliveriesList}>
          {deliveryNames.map((deliveryName, index) => (
            <Text
              key={index}
              type="h5"
              as="span"
              className={styles.dotSeparator}
            >
              {t(deliveryName)}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
}

function TagRow({
  customerCases,
  selectedCustomerCase,
  setSelectedCustomerCase,
}: {
  customerCases: CustomerCaseEntry[];
  selectedCustomerCase: CustomerCaseEntry;
  setSelectedCustomerCase: (customerCase: CustomerCaseEntry) => void;
}) {
  const t = useTranslations("customer_case");

  return (
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
  );
}
