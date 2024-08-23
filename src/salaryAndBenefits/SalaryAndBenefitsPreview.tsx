"use client";
import { Suspense } from "react";
import SalaryAndBenefits from "./SalaryAndBenefits";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SalaryAndBenefitsPage } from "studio/lib/payloads/salaryAndBenefits";
import { SALARY_AND_BENEFITS_PAGE_QUERY } from "studio/lib/queries/pages";

interface SalaryAndBenefitsPreviewProps {
  initialSalaryAndBenefits: QueryResponseInitial<SalaryAndBenefitsPage>;
}

const SalaryAndBenefitsPreview = ({
  initialSalaryAndBenefits,
}: SalaryAndBenefitsPreviewProps) => {
  const { data: newData } = useQuery<SalaryAndBenefitsPage>(
    SALARY_AND_BENEFITS_PAGE_QUERY,
    { slug: initialSalaryAndBenefits.data.slug.current },
    { initial: initialSalaryAndBenefits },
  );

  if (process.env.NODE_ENV !== "production") {
    if (typeof newData !== "object" || newData === null) {
      console.error(
        `newData has an unexpected type: ${typeof newData}. Expected an object.`,
      );
    }
  }
  const pageData = newData || initialSalaryAndBenefits.data;

  return (
    <Suspense>
      <SalaryAndBenefits salaryAndBenefits={pageData} />
    </Suspense>
  );
};

export default SalaryAndBenefitsPreview;
