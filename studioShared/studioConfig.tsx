import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { structureTool } from "sanity/structure";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { media } from "sanity-plugin-media";

import { supportedLanguages } from "i18n/supportedLanguages";
import StudioIcon from "studio/components/studioIcon/StudioIcon";

import { deskStructure } from "./deskStructure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";

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
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    internationalizedArray({
      languages: supportedLanguages,
      fieldTypes: ["string", "richText"],
    }),
  ],
};

export default config;
