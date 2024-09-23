import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { languageID } from "internationalization/languageSchemaField";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { legalDocumentID } from "./schemas/documents/legalDocuments";
import { deskStructure } from "./deskStructure";

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
    templates: (prev) => {
      const prevFiltered = prev.filter(
        (template) => template.id !== "legalDocument"
      );

      // Ensures no legal document is created with an empty language field
      return [
        ...prevFiltered,
        {
          id: "legalDocument-language",
          title: "Legal Document with Language",
          schemaType: "legalDocument",
          parameters: [{ name: "language", type: "string" }],
          value: (params: { language: string }) => ({
            language: params.language,
          }),
        },
      ];
    },
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
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
};

export default config;
