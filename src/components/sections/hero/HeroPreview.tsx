"use client";

import { useQuery } from "@sanity/react-loader";
import { Hero } from "./Hero";
import { PageBuilder, HeroSection } from "studio/lib/payloads/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";

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
    { initial: initialData }
  );

  const heroSection = newData
    ? (newData.sections.find(
        (section, index) => section._type === "hero" && index === sectionIndex
      ) as HeroSection)
    : (initialData.data.sections.find(
        (section, index) => section._type === "hero" && index === sectionIndex
      ) as HeroSection);

  return (
    <Suspense>
      <Hero hero={heroSection} isLanding={isLanding} />
    </Suspense>
  );
}
