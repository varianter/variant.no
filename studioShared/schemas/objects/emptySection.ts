import { SquareIcon } from "@sanity/icons";
import { defineField } from "sanity";

import EmptySectionInput from "studioShared/components/EmptySectionInput";

const emptySection = defineField({
  name: "emptySection",
  title: "Blank Space",
  description: "Displays as blank space on the page.",
  type: "object",
  icon: SquareIcon,
  fields: [
    {
      name: "placeholder",
      title: "Just some blank space, nothing to see here",
      type: "string",
      components: {
        input: EmptySectionInput,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Blank Space",
      };
    },
  },
});

export default emptySection;
