import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CUSTOMER_CASES_PAGE_QUERY } from "studio/lib/queries/specialPages";

import CustomerCases from "./CustomerCases";

interface CustomerCasesPreviewProps {
  initialCustomerCases: QueryResponseInitial<CustomerCasePage>;
}

const CustomerCasesPreview = ({
  initialCustomerCases,
}: CustomerCasesPreviewProps) => {
  const { data } = useQuery<CustomerCasePage>(
    CUSTOMER_CASES_PAGE_QUERY,
    { slug: initialCustomerCases.data.slug.current },
    { initial: initialCustomerCases },
  );

  return (
    data && (
      <Suspense>
        <CustomerCases />
      </Suspense>
    )
  );
};

export default CustomerCasesPreview;
