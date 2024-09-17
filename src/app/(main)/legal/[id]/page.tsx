import Legal from "src/blog/components/legal/Legal";
import LegalPreview from "src/blog/components/legal/LegalPreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { LEGAL_DOCUMENT_SLUG_QUERY } from "studio/lib/queries/legalDocuments";
import { loadQuery } from "studio/lib/store";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
};

// TODO: hide from SEO???

async function Page({ params }: Props) {
  const { id } = params;
  const { perspective, isDraftMode } = getDraftModeInfo();

  const initialDocument = await loadQuery<LegalDocument>(
    LEGAL_DOCUMENT_SLUG_QUERY,
    { slug: id },
    { perspective },
  );

  if (!initialDocument) {
    throw new Error("Page not found");
  }

  if (isDraftMode) {
    return <LegalPreview initialDocument={initialDocument} />;
  }
  if (initialDocument) {
    return <Legal document={initialDocument.data} />;
  }
}

export default Page;
