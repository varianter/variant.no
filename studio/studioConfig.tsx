import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { SanityClient } from "next-sanity";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import {
  Language,
  internationalizedArray,
} from "sanity-plugin-internationalized-array";
import { media } from "sanity-plugin-media";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";

import { languageID } from "i18n/languageSchemaField";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { deskStructure } from "./deskStructure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { legalDocumentID } from "./schemas/documents/admin/legalDocuments";

const SUPPORTED_LANGUAGES_QUERY = `*[_type == "languageSettings" && !(_id in path("drafts.*"))].languages[]{id, title}`;

let cachedSupportedLanguages: Promise<Language[]> | null = null;
//TODO: This might not be the perfect solution, but it works for now.
function getSupportedLanguages(client: SanityClient) {
  if (!cachedSupportedLanguages) {
    cachedSupportedLanguages = client
      .fetch(SUPPORTED_LANGUAGES_QUERY)
      .catch((err: Error) => {
        cachedSupportedLanguages = null; // Reset cache on error
        throw err;
      });
  }

  return cachedSupportedLanguages;
}

const config: WorkspaceOptions = {
  name: "studio",
  title: "Studio",
  subtitle: `Website content`,
  icon: () => <StudioIcon variant="studio" />,
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: (client) => getSupportedLanguages(client),
      schemaTypes: [legalDocumentID],
      languageField: languageID,
      apiVersion,
    }),
    internationalizedArray({
      languages: (client) => getSupportedLanguages(client),
      fieldTypes: ["string", "richText", "seo", "text"],
    }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
          disable: "/api/disable-draft",
        },
      },
    }),
    media(),
    simplerColorInput(),
  ],
};

export default config;
