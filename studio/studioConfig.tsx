import { visionTool } from "@sanity/vision";
import { WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";

import StudioIcon from "./components/studioIcon/StudioIcon";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import deskStructure from "./schemas/deskStructure";

const config: WorkspaceOptions = {
  name: "studio",
  title: "Studio",
  subtitle: "Our Own Space",
  icon: () => <StudioIcon variant={"studio"} />,
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './studio/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
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
