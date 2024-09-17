"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { ArticleSection, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";

import Article from "./Article";

export default function ArticlePreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data } = useQuery<PageBuilder>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  const articleSection = data.sections.find(
    (section, index) => section._type === "article" && index === sectionIndex,
  ) as ArticleSection;

  return (
    <Suspense>
      <Article article={articleSection} />
    </Suspense>
  );
}
