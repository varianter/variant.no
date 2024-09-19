import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { CUSTOMER_CASES_PAGE_QUERY } from "studio/lib/queries/specialPages";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";

import CustomerCases from "./CustomerCases";

interface CustomerCasesPreviewProps {
  initialCustomerCases: QueryResponseInitial<CustomerCasePage>;
  initialSharedCustomerCases: QueryResponseInitial<CustomerCase>;
}

const CustomerCasesPreview = ({
  initialCustomerCases,
  initialSharedCustomerCases,
}: CustomerCasesPreviewProps) => {
  const { data: customerCases } = useQuery<CustomerCasePage>(
    CUSTOMER_CASES_PAGE_QUERY,
    { slug: initialCustomerCases.data.slug.current },
    { initial: initialCustomerCases },
  );

  const { data: sharedCustomerCases } = useQuery<CustomerCase>(
    CUSTOMER_CASES_QUERY,
    {},
    { initial: initialSharedCustomerCases },
  );

  return (
    customerCases &&
    sharedCustomerCases && (
      <Suspense>
        <CustomerCases
          customerCases={customerCases}
          sharedCustomerCases={sharedCustomerCases}
        />
      </Suspense>
    )
  );
};

export default CustomerCasesPreview;
