"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { HeroObject, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import { Hero } from "./Hero";

interface HeroPreviewProps extends PreviewProps {
  isLanding: boolean;
}

export default function HeroPreview({
  sectionIndex,
  initialData,
  isLanding,
}: HeroPreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const heroObject = newData
    ? (newData.sections.find(
        (section, index) => section._type === "hero" && index === sectionIndex,
      ) as HeroObject)
    : (initialData.data.sections.find(
        (section, index) => section._type === "hero" && index === sectionIndex,
      ) as HeroObject);

  return (
    <Suspense>
      <Hero hero={heroObject} isLanding={isLanding} />
    </Suspense>
  );
}
