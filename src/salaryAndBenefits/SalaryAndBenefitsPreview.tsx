"use client"
import { Suspense } from "react";
import SalaryAndBenefits from "./SalaryAndBenefits";
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import {SalaryAndBenefits as SalaryAndBenefitsPayload} from "studio/lib/payloads/salaryAndBenefits";
import { SALARY_AND_BENEFITS_PAGE_QUERY } from 'studio/lib/queries/pages';


interface SalaryAndBenefitsPreviewProps {
  initialSalaryAndBenefits: QueryResponseInitial<SalaryAndBenefitsPayload>;
}

const SalaryAndBenefitsPreview = ({initialSalaryAndBenefits}: SalaryAndBenefitsPreviewProps) => {

  const {data: newData } = useQuery<SalaryAndBenefitsPayload>(
    SALARY_AND_BENEFITS_PAGE_QUERY,
    { slug: initialSalaryAndBenefits.data.slug.current },
    { initial: initialSalaryAndBenefits }
  );

  return (
    <Suspense>
      <SalaryAndBenefits salaryAndBenefits={newData ?? initialSalaryAndBenefits.data} />
    </Suspense>
  )
}

export default SalaryAndBenefitsPreview;