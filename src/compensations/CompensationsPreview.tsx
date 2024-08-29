"use client";
import { Suspense } from "react";
import Compensations from "./Compensations";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { CompensationsPage } from "studio/lib/payloads/compensations";
import { COMPENSATIONS_PAGE_QUERY } from "studio/lib/queries/pages";

interface CompensationsPreviewProps {
  initialCompensations: QueryResponseInitial<CompensationsPage>;
}

const CompensationsPreview = ({
  initialCompensations,
}: CompensationsPreviewProps) => {
  const { data } = useQuery<CompensationsPage>(
    COMPENSATIONS_PAGE_QUERY,
    { slug: initialCompensations.data.slug.current },
    { initial: initialCompensations },
  );

  return (
    <Suspense>
      <Compensations compensations={data} />
    </Suspense>
  );
};

export default CompensationsPreview;
