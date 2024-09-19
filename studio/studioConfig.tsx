import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { languageID } from "internationalization/languageSchemaField";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import deskStructure from "./schemas/deskStructure";
import { languageSettingsID } from "./schemas/documents/languageSettings";
import { legalDocumentID } from "./schemas/documents/legalDocuments";

const config: WorkspaceOptions = {
  name: "studio",
  title: "Studio",
  subtitle: "Our Own Space",
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
      supportedLanguages: (client) =>
        client.fetch(
          `*[_type == ${languageSettingsID}][0].${languageID}[!default]{id, title}`
        ),
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
