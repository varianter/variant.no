import { ImageBlock } from "./imageBlock";
import { TextBlock } from "./textBlock";

export interface EmptySection {
  _key: string;
  _type: "emptySection";
}

export type SplitSectionSection = TextBlock | ImageBlock | EmptySection;

export interface SplitSection {
  _key: string;
  _type: "splitSection";
  sections: SplitSectionSection[];
}
