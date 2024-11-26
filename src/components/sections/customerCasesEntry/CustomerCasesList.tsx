"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import Button from "src/components/buttons/Button";
import styles from "src/components/sections/customerCasesEntry/customerCasesEntry.module.css";
import Text from "src/components/text/Text";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";

interface CustomerCasesProps {
  customerCases: CustomerCaseBase[];
}

const CustomerCaseList = ({ customerCases }: CustomerCasesProps) => {
  const t = useTranslations();
  const [selectedCustomerCase, setSelectedCustomerCase] =
    useState<CustomerCaseBase>(customerCases[0]);

  console.log("customerCases", selectedCustomerCase);

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonRow}>
        {customerCases.map(
          (customerCase: CustomerCaseBase) =>
            //Todo: this should be a better test
            customerCase.slug && (
              <div key={customerCase._id}>
                <Button
                  type="primary"
                  onClick={() => setSelectedCustomerCase(customerCase)}
                >
                  {/* Todo: this should be replaced with the customername from projectinfo*/}
                  {customerCase.slug}
                </Button>
              </div>
            ),
        )}
      </div>
      <div className={styles.cardInfo}>
        <Text> {selectedCustomerCase.description}</Text>
        <Text> {selectedCustomerCase.basicTitle}</Text>
        <Text> fag: design . prosjektledelse </Text>
        {selectedCustomerCase.image.metadata?.lqip && (
          <Image
            src={selectedCustomerCase.image.metadata?.lqip}
            alt={
              selectedCustomerCase.image.alt ??
              t("customer_case.customer_case_entry.image") +
                " " +
                t("linking_words.for") +
                selectedCustomerCase.basicTitle
            }
            objectFit="cover"
            fill={true}
          />
        )}
      </div>
    </div>
  );
};
export default CustomerCaseList;
