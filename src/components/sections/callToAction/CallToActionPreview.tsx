"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { CallToActionSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import CallToAction from "./CallToAction";

export default function CallToActionPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const callToActionSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "ctaSection" && index === sectionIndex,
      ) as CallToActionSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "ctaSection" && index === sectionIndex,
      ) as CallToActionSection);

  return (
    <Suspense>
      <CallToAction callToAction={callToActionSection} />
    </Suspense>
  );
}
