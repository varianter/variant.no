import { WorkspaceOptions } from "sanity";
import StudioIcon from "../studio/components/studioIcon/StudioIcon";
import { defineField } from "sanity";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { i18n } from "languages";
import { customerCaseID } from "./schemas/documents/customerCase";
import { deskStructure } from "./deskStructure";

const config: WorkspaceOptions = {
  name: "sharedStudio",
  title: "Shared Studio",
  subtitle: "Sharing is Caring!",
  icon: () => <StudioIcon variant={"shared"} />,
  basePath: "/shared",
  projectId,
  dataset,
  schema: {
    ...schema,
    templates: (prev) =>
      prev.filter((template) => template.value.language === i18n.base),
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // TODO: a function that takes the client and returns a promise of an array of supported languages
      // MUST return an "id" and "title" as strings
      // supportedLanguages: (client) => client.fetch(`*[_type == "language"]{id, title}`),
      supportedLanguages: i18n.languages,
      schemaTypes: [customerCaseID],
      languageField: `language`,
      metadataFields: [defineField({ name: "slug", type: "slug" })],
      apiVersion,
      // TODO:
      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      // bulkPublish: true,
    }),
  ],
};

export default config;
