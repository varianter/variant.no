import { ToolMenuProps } from "sanity";
import { Inline } from "@sanity/ui";
import { LinkButton } from "./linkButton/LinkButton";

export default function CustomToolMenu(props: ToolMenuProps) {
  return (
    <Inline>
      {props.renderDefault(props)}
      <LinkButton value="/shared" />
    </Inline>
  );
}
