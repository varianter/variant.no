"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { LogoSaladObject, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import { LogoSalad } from "./LogoSalad";

export default function LogoSaladPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const logoSalad = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "logoSalad" && index === sectionIndex,
      ) as LogoSaladObject)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "logoSalad" && index === sectionIndex,
      ) as LogoSaladObject);

  return (
    <Suspense>
      <LogoSalad logoSalad={logoSalad} />
    </Suspense>
  );
}
