import { defineConfig, defineField } from "sanity";
import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { i18n } from "languages";
import { customerCaseID } from "./schemas/documents/customerCase";
import { deskStructure } from "./deskStructure";

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/shared/[[...index]]/page.tsx` route
 */
export default defineConfig({
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
      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      // bulkPublish: true,
    }),
  ],
});
