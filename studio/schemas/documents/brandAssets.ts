import { defineField, defineType } from "sanity";

export const brandAssetsID = "brandAssets";

const brandAssets = defineType({
  name: brandAssetsID,
  type: "document",
  title: "Brand Assets",
  fields: [
    defineField({
      name: "primaryLogo",
      type: "image",
      title: "Primary Logo",
      description: "Upload the main logo of your site.",
    }),
    defineField({
      name: "secondaryLogo",
      type: "image",
      title: "Secondary Logo",
      description: "Upload the secondary logo of your site.",
    }),
    defineField({
      name: "favicon",
      type: "image",
      title: "Favicon",
      description:
        "Upload the favicon for your site. It appears in the browser tab.",
    }),
  ],
});

export default brandAssets;
