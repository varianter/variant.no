"use client";
import { stegaClean } from "@sanity/client/stega";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import { COMPENSATIONS_PAGE_QUERY } from "studio/lib/queries/specialPages";

import Compensations from "./Compensations";

interface CompensationsPreviewProps {
  initialCompensations: QueryResponseInitial<CompensationsPage>;
  initialLocations: QueryResponseInitial<CompanyLocation[]>;
  initialLocale: QueryResponseInitial<LocaleDocument>;
}

const CompensationsPreview = ({
  initialCompensations,
  initialLocations,
  initialLocale,
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

  const { data: locale } = useQuery<LocaleDocument>(LOCALE_QUERY, {
    initial: initialLocale,
  });

  compensationsData.salariesByLocation = stegaClean(
    compensationsData.salariesByLocation,
  );

  return (
    locationData &&
    locale && (
      <Suspense>
        <Compensations
          compensations={compensationsData}
          locations={locationData}
          locale={locale}
        />
      </Suspense>
    )
  );
};

export default CompensationsPreview;
