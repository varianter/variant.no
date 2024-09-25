"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { CalloutObject, PageBuilder } from "studio/lib/interfaces/pages";
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

  const callout = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex,
      ) as CalloutObject)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "callout" && index === sectionIndex,
      ) as CalloutObject);

  return (
    <Suspense>
      <Callout callout={callout} />
    </Suspense>
  );
}
