import { colorInput } from "@sanity/color-input";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { media } from "sanity-plugin-media";

import { languageID } from "i18n/languageSchemaField";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { deskStructure } from "./deskStructure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { legalDocumentID } from "./schemas/documents/admin/legalDocuments";

const SUPPORTED_LANGUAGES_QUERY = `*[_type == "languageSettings" && !(_id in path("drafts.*"))].languages[]{id, title}`;

const config: WorkspaceOptions = {
  name: "studio",
  title: "Studio",
  subtitle: "Variant Norge",
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
      supportedLanguages: (client) => {
        return client.fetch(SUPPORTED_LANGUAGES_QUERY);
      },
      schemaTypes: [legalDocumentID],
      languageField: languageID,
      apiVersion,
      // Optional. Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      // bulkPublish: true,
    }),
    internationalizedArray({
      languages: (client) => {
        return client.fetch(SUPPORTED_LANGUAGES_QUERY);
      },
      fieldTypes: ["string", "richText", "seo", "text"],
    }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
    media(),
    colorInput(),
  ],
};

export default config;
