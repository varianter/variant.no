import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./env";
import { schema } from "./schema";

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/shared/[[...index]]/page.tsx` route
 */

export default defineConfig({
  basePath: "/shared",
  projectId,
  dataset,
  schema,
  plugins: [structureTool()],
});
