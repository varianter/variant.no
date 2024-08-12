"use client";

import { useQuery } from "@sanity/react-loader";
import Callout from "./Callout";
import { PageBuilder, CalloutSection } from "studio/lib/payloads/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";

export default function CalloutPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData }
  );

  const calloutSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex
      ) as CalloutSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex
      ) as CalloutSection);

  return (
    <Suspense>
      <Callout callout={calloutSection} />
    </Suspense>
  );
}
