"use client";

import { useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { PreviewProps } from "src/types/preview";
import { ArticleObject, PageBuilder } from "studio/lib/interfaces/pages";
import { PAGE_QUERY } from "studio/lib/queries/page";

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

  const article = data.sections.find(
    (section, index) => section._type === "article" && index === sectionIndex,
  ) as ArticleObject;

  return (
    <Suspense>
      <Article article={article} />
    </Suspense>
  );
}
