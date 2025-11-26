"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CUSTOMER_CASES_PAGE_QUERY } from "studio/lib/queries/specialPages";
import { CustomerCaseBase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";

import CustomerCases from "./CustomerCases";

interface CustomerCasesPreviewProps {
  initialCustomerCases: QueryResponseInitial<CustomerCasePage>;
  initialCustomerCasesList: QueryResponseInitial<CustomerCaseBase[]>;
  domain: string;
}

const CustomerCasesPreview = ({
  initialCustomerCases,
  initialCustomerCasesList,
  domain,
}: CustomerCasesPreviewProps) => {
  const { data: customerCasesPage } = useQuery<CustomerCasePage>(
    CUSTOMER_CASES_PAGE_QUERY,
    { slug: initialCustomerCases.data.slug },
    { initial: initialCustomerCases },
  );

  const { data: customerCasesList } = useQuery<CustomerCaseBase[]>(
    CUSTOMER_CASES_QUERY,
    { language: customerCasesPage?.language, domain },
    { initial: initialCustomerCasesList },
  );

  return (
    customerCasesPage &&
    customerCasesList && (
      <Suspense>
        <CustomerCases
          customerCasesPage={customerCasesPage}
          customerCases={customerCasesList}
        />
      </Suspense>
    )
  );
};

export default CustomerCasesPreview;
