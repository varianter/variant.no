"use client";

import { useQuery } from "@sanity/react-loader";
import Article from "./Article";
import { PageBuilder, ArticleSection } from "studio/lib/payloads/pages";
import { PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { PreviewProps } from "src/types/preview";
import { validateDraftDataInDevelopment } from "../../../utils/preview";

export default function ArticlePreview({
  initialData,
  sectionIndex,
}: PreviewProps) {
  const { data: newData } = useQuery<PageBuilder | null>(
    PAGE_QUERY,
    { id: initialData.data._id },
    { initial: initialData },
  );

  validateDraftDataInDevelopment(newData);
  const pageData = newData || initialData.data;

  const articleSection = pageData.sections.find(
    (section, index) => section._type === "article" && index === sectionIndex,
  ) as ArticleSection;

  return (
    <Suspense>
      <Article article={articleSection} />
    </Suspense>
  );
}
