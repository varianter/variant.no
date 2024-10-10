"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY } from "studio/lib/queries/admin";

import Legal from "./Legal";

export default function LegalPreview({
  initialDocument,
}: {
  initialDocument: QueryResponseInitial<LegalDocument>;
}) {
  const { data: newDoc } = useQuery<LegalDocument | null>(
    LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
    {
      slug: initialDocument.data.slug,
      language: initialDocument.data.language,
    },
    { initial: initialDocument },
  );

  return newDoc && <Legal document={newDoc} />;
}
