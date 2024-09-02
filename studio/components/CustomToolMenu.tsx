import { ToolMenuProps } from "sanity";
import { Inline, Stack } from "@sanity/ui";
import { ToolMenuLinkButton } from "./toolMenuLinkButton/ToolMenuLinkButton";

export default function CustomToolMenu(props: ToolMenuProps) {
  const Wrapper = props.context === "topbar" ? Inline : Stack;
  return (
    <Wrapper space={4}>
      {props.renderDefault(props)}
      <ToolMenuLinkButton
        value={"/shared"}
        label={"Shared Studio"}
        context={props.context}
      />
    </Wrapper>
  );
}
