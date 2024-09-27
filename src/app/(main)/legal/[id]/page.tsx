import Legal from "src/blog/components/legal/Legal";
import LegalPreview from "src/blog/components/legal/LegalPreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { LEGAL_DOCUMENTS_BY_SLUG_AND_LANG_QUERY } from "studio/lib/queries/admin";
import { loadStudioQuery } from "studio/lib/store";

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

  const initialDocument = await loadStudioQuery<LegalDocument>(
    LEGAL_DOCUMENTS_BY_SLUG_AND_LANG_QUERY,
    { slug: id, language: "en" }, //TODO: replace this with selected language for the page
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
