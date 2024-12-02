"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { ContactBoxSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";

import ContactBox from "./ContactBox";

export default function ContactBoxPreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id, language: initialData.data.language },
    { initial: initialData },
  );

  const section = newData
    ? (newData.sections.find(
        (section, index) =>
          section._type === "contactBox" && index === sectionIndex,
      ) as ContactBoxSection)
    : (initialData.data.sections.find(
        (section, index) =>
          section._type === "contactBox" && index === sectionIndex,
      ) as ContactBoxSection);

  return (
    <Suspense>
      <ContactBox section={section} language={initialData.data.language} />
    </Suspense>
  );
}
