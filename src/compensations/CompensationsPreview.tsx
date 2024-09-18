"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/companyDetails";
import { COMPENSATIONS_PAGE_QUERY } from "studio/lib/queries/pages";

import Compensations from "./Compensations";

interface CompensationsPreviewProps {
  initialCompensations: QueryResponseInitial<CompensationsPage>;
  initialLocations: QueryResponseInitial<CompanyLocation[]>;
}

const CompensationsPreview = ({
  initialCompensations,
  initialLocations,
}: CompensationsPreviewProps) => {
  const { data } = useQuery<CompensationsPage>(
    COMPENSATIONS_PAGE_QUERY,
    { slug: initialCompensations.data.slug.current },
    { initial: initialCompensations },
  );

  const { data: locationData } = useQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    { initial: initialLocations },
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