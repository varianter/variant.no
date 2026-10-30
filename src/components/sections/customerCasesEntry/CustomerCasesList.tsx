"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

import FitText from "src/components/fitText/FitText";
import { SanityImage } from "src/components/image/SanityImage";
import LinkButton from "src/components/linkButton/LinkButton";
import TabbedSection from "src/components/tabbedSection/TabbedSection";
import Text from "src/components/text/Text";
import { CustomerCaseEntry } from "studioShared/lib/interfaces/customerCases";

import styles from "./customerCasesEntry.module.css";

interface CustomerCasesProps {
  customerCases: CustomerCaseEntry[];
  language: string;
  customerCasePageSlug?: string;
}

const MAX_VISIBLE_CASES = 4;

const CustomerCaseList = ({
  customerCases,
  language,
  customerCasePageSlug,
}: CustomerCasesProps) => {
  const t = useTranslations("customer_case");
  const [selectedId, setSelectedId] = useState<string>(customerCases[0]?._id);

  const visibleCases = customerCases.slice(0, MAX_VISIBLE_CASES);
  const selectedCustomerCase =
    customerCases.find((customerCase) => customerCase._id === selectedId) ??
    customerCases[0];

  if (!selectedCustomerCase) {
    return null;
  }

  const deliveryNames = [
    selectedCustomerCase.projectInfo.deliveries.design && "design",
    selectedCustomerCase.projectInfo.deliveries.projectManagement &&
      "project_management",
    selectedCustomerCase.projectInfo.deliveries.development && "development",
  ].filter((name): name is string => Boolean(name));

  const caseHref = `/${language}/${customerCasePageSlug}/${selectedCustomerCase.slug}`;

  return (
    <div className={styles.container}>
      <TabbedSection
        label={t("customer_case_entry.case")}
        tabs={visibleCases.map((customerCase) => ({
          id: customerCase._id,
          label: customerCase.projectInfo.customer,
        }))}
        activeId={selectedCustomerCase._id}
        onSelect={setSelectedId}
        background="dark"
        action={
          customerCasePageSlug && (
            <LinkButton
              link={`/${language}/${customerCasePageSlug}`}
              linkTitle={t("showAll")}
              size="L"
            />
          )
        }
      >
        <div className={styles.content}>
          <div className={styles.info}>
            <Link className={styles.link} href={caseHref}>
              <CardInfo
                title={selectedCustomerCase.basicTitle}
                deliveryNames={deliveryNames}
              />
            </Link>
          </div>
          <Link
            tabIndex={-1}
            className={styles.imageWrapper}
            href={caseHref}
            title={selectedCustomerCase.basicTitle}
          >
            {selectedCustomerCase.image && (
              <SanityImage image={selectedCustomerCase.image} isShared />
            )}
          </Link>
        </div>
      </TabbedSection>
    </div>
  );
};
export default CustomerCaseList;

function CardInfo({
  title,
  deliveryNames,
}: {
  title: string;
  deliveryNames: string[];
}) {
  const t = useTranslations("customer_case");

  return (
    <div className={styles.cardInfo}>
      <FitText className={styles.title} as="h3">
        {title}
      </FitText>
      {deliveryNames.length > 0 && (
        <Text type="label" as="span" color="light">
          {`【${deliveryNames.map((name) => t(name)).join(" · ")}】`}
        </Text>
      )}
    </div>
  );
}
