import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { documentInternationalization } from "@sanity/document-internationalization";
import { i18n } from "languages";
import { blogPostsID } from "./schemas/documents/blogPosts";
import { deskStructure } from "./deskStructure";
import { titleSlug } from "studio/schemas/schemaTypes/slug";

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/shared/[[...index]]/page.tsx` route
 */

export default defineConfig({
  basePath: "/shared",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: [blogPostsID],
      languageField: `language`,
      metadataFields: [titleSlug],
      apiVersion,
    }),
  ],
});
