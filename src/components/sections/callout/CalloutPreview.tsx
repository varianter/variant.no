"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { CalloutSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import Callout from "./Callout";

export default function CalloutPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const calloutSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex,
      ) as CalloutSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex,
      ) as CalloutSection);

  return (
    <Suspense>
      <Callout callout={calloutSection} />
    </Suspense>
  );
}
