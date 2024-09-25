import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CustomerCaseDocument } from "studio/lib/interfaces/specialPages";
import { CUSTOMER_CASES_PAGE_QUERY } from "studio/lib/queries/specialPages";

import CustomerCases from "./CustomerCases";

interface CustomerCasesPreviewProps {
  initialCustomerCases: QueryResponseInitial<CustomerCaseDocument>;
}

const CustomerCasesPreview = ({
  initialCustomerCases,
}: CustomerCasesPreviewProps) => {
  const { data: customerCases } = useQuery<CustomerCaseDocument>(
    CUSTOMER_CASES_PAGE_QUERY,
    { slug: initialCustomerCases.data.slug.current },
    { initial: initialCustomerCases },
  );

  return (
    customerCases && (
      <Suspense>
        <CustomerCases customerCasesPage={customerCases} />
      </Suspense>
    )
  );
};

export default CustomerCasesPreview;
