"use client";
import { stegaClean } from "@sanity/client/stega";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { COMPENSATIONS_PAGE_QUERY } from "studio/lib/queries/specialPages";

import Compensations from "./Compensations";

interface CompensationsPreviewProps {
  initialCompensations: QueryResponseInitial<CompensationsPage>;
  initialLocations: QueryResponseInitial<CompanyLocation[]>;
}

const CompensationsPreview = ({
  initialCompensations,
  initialLocations,
}: CompensationsPreviewProps) => {
  const { data: compensationsData } = useQuery<CompensationsPage>(
    COMPENSATIONS_PAGE_QUERY,
    { slug: initialCompensations.data.slug.current },
    { initial: initialCompensations },
  );

  const { data: locationData } = useQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    { initial: initialLocations },
  );

  compensationsData.salariesByLocation = stegaClean(
    compensationsData.salariesByLocation,
  );

  return (
    locationData && (
      <Suspense>
        <Compensations
          compensations={compensationsData}
          locations={locationData}
        />
      </Suspense>
    )
  );
};

export default CompensationsPreview;
