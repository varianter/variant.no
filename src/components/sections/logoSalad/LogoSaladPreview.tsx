"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { LogoSalad } from "./LogoSalad";
import { PageBuilder, LogoSaladSection } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";

export default function LogoSaladPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const logoSaladSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "logoSalad" && index === sectionIndex,
      ) as LogoSaladSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "logoSalad" && index === sectionIndex,
      ) as LogoSaladSection);

  return (
    <Suspense>
      <LogoSalad logoSalad={logoSaladSection} />
    </Suspense>
  );
}
