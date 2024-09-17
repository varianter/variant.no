import { defineField, defineType } from "sanity";

import seo from "studio/schemas/objects/seo";

export const defaultSeoID = "seoFallback";

const defaultSeo = defineType({
  name: defaultSeoID,
  type: "document",
  title: "SEO Configurations",
  description:
    "Configure global settings for your site including brand assets, tracking codes, and default SEO settings.",
  fields: [
    defineField({
      ...seo,
      title: "Default SEO Settings",
      description:
        "If page-specific SEO settings are not provided, these settings will be applied as default.",
      options: {
        collapsible: false,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "SEO Configurations",
      };
    },
  },
});

export default defaultSeo;
