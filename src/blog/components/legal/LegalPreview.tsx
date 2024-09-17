"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { NAV_QUERY } from "studio/lib/queries/navigation";

import Legal from "./Legal";

export default function LegalPreview({
  initialDocument,
}: {
  initialDocument: QueryResponseInitial<LegalDocument>;
}) {
  const { data: newDoc } = useQuery<LegalDocument | null>(
    NAV_QUERY,
    {},
    { initial: initialDocument },
  );

  return newDoc && <Legal document={newDoc} />;
}
