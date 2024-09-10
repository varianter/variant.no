"use client";
import { Suspense } from "react";
import Compensations from "./Compensations";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { CompensationsPage } from "studio/lib/payloads/compensations";
import { CompanyLocation } from "studio/lib/payloads/companyDetails";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/companyDetails";
import { COMPENSATIONS_PAGE_QUERY } from "studio/lib/queries/pages";

interface CompensationsPreviewProps {
  initialCompensations: QueryResponseInitial<CompensationsPage>;
  initialLocation: QueryResponseInitial<CompanyLocation>;
}

const CompensationsPreview = ({
  initialCompensations,
  initialLocation,
}: CompensationsPreviewProps) => {
  const { data } = useQuery<CompensationsPage>(
    COMPENSATIONS_PAGE_QUERY,
    { slug: initialCompensations.data.slug.current },
    { initial: initialCompensations },
  );

  const { data: locationData } = useQuery<CompanyLocation>(
    COMPANY_LOCATIONS_QUERY,
    { initial: initialLocation },
  );

  return (
    locationData && (
      <Suspense>
        <Compensations compensations={data} locations={locationData} />
      </Suspense>
    )
  );
};

export default CompensationsPreview;
