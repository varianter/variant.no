import { defineField, defineType } from "sanity";

import { isInternationalizedString } from "studio/lib/interfaces/global";
import { internationalizedImage } from "studio/schemas/fields/media";
import { richTextID, titleID } from "studio/schemas/fields/text";
import { titleSlug } from "studio/schemas/schemaTypes/slug";
import { firstTranslation } from "studio/utils/i18n";
import { customerCaseProjectInfo } from "studioShared/schemas/fields/customerCaseProjectInfo";
<<<<<<< HEAD
import listBlock from "studioShared/schemas/objects/listBlock";
=======
import imageBlock from "studioShared/schemas/objects/imageBlock";
>>>>>>> v3
import richTextBlock from "studioShared/schemas/objects/richTextBlock";

export const customerCaseID = "customerCase";

const customerCase = defineType({
  name: customerCaseID,
  type: "document",
  title: "Customer Case",
  fields: [
    defineField({
      ...titleSlug,
      type: "internationalizedArrayString",
    }),
    defineField({
      name: titleID.basic,
      type: "internationalizedArrayString",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "internationalizedArrayText",
      title: "Description",
      description:
        "Short paragraph displayed at the top of the customer case page",
    }),
    defineField({
      ...internationalizedImage,
      title: "Header Image",
      description: "Large image displayed at the top of the customer case page",
    }),
    defineField({
      ...customerCaseProjectInfo,
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: "sections",
      title: "Sections",
      description: "Add sections here",
      type: "array",
<<<<<<< HEAD
      of: [richTextBlock, listBlock],
=======
      of: [richTextBlock, imageBlock],
>>>>>>> v3
    }),
    defineField({
      name: richTextID,
      title: "Body",
      type: "internationalizedArrayRichText",
    }),
  ],
  preview: {
    select: {
      title: titleID.basic,
    },
    prepare({ title }) {
      if (!isInternationalizedString(title)) {
        throw new TypeError(
          `Expected 'title' to be InternationalizedString, was ${typeof title}`,
        );
      }
      return {
        title: firstTranslation(title) ?? undefined,
        subtitle: "Customer case",
      };
    },
  },
});

export default customerCase;
