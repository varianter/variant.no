import { documentInternationalization } from "@sanity/document-internationalization";
import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";

import { languageID } from "internationalization/languageSchemaField";
import {
  defaultLanguage,
  supportedLanguages,
} from "internationalization/supportedLanguages";
import StudioIcon from "studio/components/studioIcon/StudioIcon";

import { deskStructure } from "./deskStructure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { customerCaseID } from "./schemas/documents/customerCase";

const config: WorkspaceOptions = {
  name: "sharedStudio",
  title: "Shared Studio",
  subtitle: "Sharing is Caring!",
  icon: () => <StudioIcon variant="shared" />,
  basePath: "/shared",
  projectId,
  dataset,
  schema: {
    ...schema,
    templates: (prev) =>
      prev.filter(
        (template) => template.value.language === defaultLanguage?.id
      ),
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    documentInternationalization({
      supportedLanguages: supportedLanguages,
      schemaTypes: [customerCaseID],
      languageField: languageID,
      apiVersion,
      // Optional. Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      // bulkPublish: true,
    }),
  ],
};

export default config;
