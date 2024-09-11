import { dataset, projectId } from "./env";
import { schema } from "./schema";
import { structureTool } from "sanity/structure";
import { WorkspaceOptions } from "sanity";
import StudioIcon from "../studio/components/studioIcon/StudioIcon";

const config: WorkspaceOptions = {
  name: "sharedStudio",
  title: "Shared Studio",
  subtitle: "Sharing is Caring!",
  icon: () => <StudioIcon variant={"shared"} />,
  basePath: "/shared",
  projectId,
  dataset,
  schema,
  plugins: [structureTool()],
};

export default config;
