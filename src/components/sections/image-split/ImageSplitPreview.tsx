"use client";
import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { ImageSplitSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";

import ImageSplit from "./ImageSplit";

export default function ImageSplitComponentPreview({
  sectionIndex,
  initialData,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id, language: initialData.data.language },
    { initial: initialData },
  );

  const imageSplitSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "imageSplitSection" && index === sectionIndex,
      ) as ImageSplitSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "imageSplitSection" && index === sectionIndex,
      ) as ImageSplitSection);

  return (
    <Suspense>
      <ImageSplit section={imageSplitSection} />
    </Suspense>
  );
}
