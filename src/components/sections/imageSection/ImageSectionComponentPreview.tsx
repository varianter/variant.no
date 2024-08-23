"use client";
import { useQuery } from "@sanity/react-loader";
import {
  ImageSection,
  PageBuilder,
  TestimonialsSection,
} from "studio/lib/payloads/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";
import ImageSectionComponent from "./ImageSectionComponent";

export default function ImageSectionComponentPreview({
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
          section._type === "imageSection" && index === sectionIndex,
      ) as ImageSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "imageSection" && index === sectionIndex,
      ) as ImageSection);

  return (
    <Suspense>
      <ImageSectionComponent section={testimonialsSection} />
    </Suspense>
  );
}
