"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { PageBuilder, TestimonialsObject } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

import { Testimonials } from "./Testimonials";

export default function TestimonialsPreview({
  sectionIndex,
  initialData,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const testimonials = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "testimonials" && index === sectionIndex,
      ) as TestimonialsObject)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "testimonials" && index === sectionIndex,
      ) as TestimonialsObject);

  return (
    <Suspense>
      <Testimonials testimonials={testimonials} />
    </Suspense>
  );
}
