"use client";

import { useState } from "react";

import Button from "src/components/buttons/Button";
import styles from "src/components/sections/customerCasesEntry/customerCasesEntry.module.css";
import Text from "src/components/text/Text";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";

interface CustomerCasesProps {
  customerCases: CustomerCaseBase[];
}

const CustomerCaseList = ({ customerCases }: CustomerCasesProps) => {
  const [selectedCustomerCase, setSelectedCustomerCase] =
    useState<CustomerCaseBase>();

  return (
    <div>
      <div className={styles.buttonRow}>
        {customerCases.map(
          (customerCase: CustomerCaseBase) =>
            //Todo: this should be a better test
            customerCase.slug && (
              <div key={customerCase._id}>
                <Button
                  type="secondary"
                  onClick={() => setSelectedCustomerCase(customerCase)}
                >
                  {/* Todo: this should be replaced with the customername from projectinfo*/}
                  {customerCase.slug}
                </Button>
              </div>
            ),
        )}
      </div>
      <Text> {selectedCustomerCase?.basicTitle}</Text>
    </div>
  );
};
export default CustomerCaseList;
