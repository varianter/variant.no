"use client";

import { useQuery } from "@sanity/react-loader";
import { Testimonials } from "./Testimonials";
import { PageBuilder, TestimonialsSection } from "studio/lib/payloads/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";

export default function TestimonialsPreview({
  sectionIndex,
  initialData,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const testimonialsSection = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "testimonials" && index === sectionIndex,
      ) as TestimonialsSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "testimonials" && index === sectionIndex,
      ) as TestimonialsSection);

  return (
    <Suspense>
      <Testimonials testimonials={testimonialsSection} />
    </Suspense>
  );
}
