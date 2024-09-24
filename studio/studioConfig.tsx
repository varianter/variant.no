import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";

import { languageID } from "internationalization/languageSchemaField";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { deskStructure } from "./deskStructure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { legalDocumentID } from "./schemas/documents/admin/legalDocuments";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

const config: WorkspaceOptions = {
  name: "studio",
  title: "Studio",
  subtitle: "Our Own Space",
  icon: () => <StudioIcon variant="studio" />,
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    ...schema,
    templates: (prev) => prev.filter((template) => !template.value.language),
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // When async initial value templates are supported by the plugin, we can fetch dynamic languages like:
      // (client) => {
      //   return client.fetch(
      //     `*[_type == "languageSettings"].languages[]{id, title}`
      //   );
      // }
      // Currently, we have to use a static list of supported languages for both Norway and Sweden
      // Limitation: Variant Norway and Varaint Sweden will not be able to filter out unsupported languages
      supportedLanguages: [
        { id: "no", title: "Norwegian" },
        { id: "se", title: "Swedish" },
        { id: "en", title: "English" },
      ],
      schemaTypes: [legalDocumentID],
      languageField: languageID,
      apiVersion,
      // Optional. Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      // bulkPublish: true,
    }),
    internationalizedArray({
      languages: [
        { id: "no", title: "Norwegian" },
        { id: "se", title: "Swedish" },
        { id: "en", title: "English" },
      ],
      // languages: (client) =>
      //   client.fetch(
      //     `*[_type == "languageSettings"].languages[!default]{id, title}`
      //   ),
      fieldTypes: ["string"],
    }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
    media(),
  ],
};

export default config;
