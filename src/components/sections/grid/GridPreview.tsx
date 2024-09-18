"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { GridSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import Grid from "./Grid";

export default function GridPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const grid = newData
    ? (newData.sections.find(
        (section, index) => section._type === "grid" && index === sectionIndex,
      ) as GridSection)
    : (initialData.data.sections.find(
        (section, index) => section._type === "grid" && index === sectionIndex,
      ) as GridSection);

  return (
    <Suspense>
      <Grid grid={grid} />
    </Suspense>
  );
}
