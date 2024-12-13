import { InlineIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { isSanityKeyTypeObject } from "studio/lib/interfaces/global";
import { humanizeCamelCase } from "studio/utils/stringUtils";
import { SplitSectionSection } from "studioShared/lib/interfaces/splitSection";

import emptySection from "./emptySection";
import imageBlock from "./imageBlock";
import textBlock from "./textBlock";

export const splitSectionSections = [textBlock, imageBlock, emptySection];

const splitSection = defineField({
  name: "splitSection",
  title: "Split Section",
  icon: InlineIcon,
  description: "Section containing two other sections, displayed side-by-side",
  type: "object",
  fields: [
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: splitSectionSections,
      validation: (rule) => rule.length(2),
    },
  ],
  preview: {
    select: {
      sections: "sections",
    },
    prepare({ sections }) {
      if (!isSplitSectionSections(sections)) {
        throw new TypeError(
          "Expected 'sections' to be an array with element type SplitSectionSection.",
        );
      }
      return {
        title: sections
          .map((section) => humanizeCamelCase(section._type))
          .join(" | "),
      };
    },
  },
});

function isSplitSectionSections(
  value: unknown,
): value is SplitSectionSection[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        isSanityKeyTypeObject(item) &&
        splitSectionSections.some((s) => s.name === item._type),
    )
  );
}

export default splitSection;
