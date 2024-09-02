import { defineType, defineField } from "sanity";
import seo from "../objects/seo";

export const companyInfoID = "companyInfo";

const companyInfo = defineType({
  name: companyInfoID,
  type: "document",
  title: "Company Information",
  description:
    "Manage all your global site settings here, including brand assets and company information. " +
    "Everything stored here is essential for consistent branding, and is referenced across various site sections, " +
    "such as your office locations.",
  fields: [
    {
      name: "siteMetadata",
      type: "object",
      title: "Site Metadata",
      description:
        "Basic metadata about your site including name, default language, and contact information.",
      fields: [
        defineField({
          name: "siteName",
          type: "string",
          title: "Site Name",
          description: "The name of your website.",
        }),
        defineField({
          name: "defaultLanguage",
          type: "string",
          title: "Default Language",
          description: "Select the default language for your website.",
          options: {
            list: [
              { title: "English", value: "en" },
              { title: "Norwegian", value: "no" },
            ],
          },
        }),
        defineField({
          name: "contactEmail",
          type: "string",
          title: "Contact Email",
          description:
            "The contact email address for site inquiries or administration.",
        }),
      ],
    },
    {
      name: "brandAssets",
      type: "object",
      title: "Brand Assets",
      description: "Upload your logo and favicon to be used across the site.",
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
    },
    {
      name: "offices",
      type: "object",
      title: "Offices",
      description: "Add all your office locations here.",
      fields: [
        defineField({
          name: "officeLocations",
          type: "array",
          title: "Office Locations",
          of: [
            {
              type: "office",
            },
          ],
        }),
      ],
    },
    {
      // TODO: deprecated, drop support once important deployments have updated
      deprecated: {
        reason: "Analytics and Tracking is no longer used",
      },
      readOnly: true,
      hidden: true,
      name: "analyticsTracking",
      type: "object",
      title: "Analytics and Tracking",
      description:
        "Select your analytics service and add the tracking ID to monitor site traffic and user interactions.",
      fields: [
        defineField({
          name: "service",
          type: "string",
          title: "Analytics Service",
          description: "Select the analytics service you are using.",
          options: {
            list: [
              { title: "Google Analytics", value: "googleAnalytics" },
              { title: "Facebook Pixel", value: "facebookPixel" },
              { title: "Plausible", value: "plausible" },
              { title: "Fathom", value: "fathom" },
              { title: "Matomo", value: "matomo" },
              { title: "Splitbee", value: "splitbee" },
              { title: "Visitor Analytics", value: "visitorAnalytics" },
            ],
            layout: "dropdown",
          },
        }),
        defineField({
          name: "trackingID",
          type: "string",
          title: "Tracking ID",
          description:
            "Enter the tracking ID for the selected analytics service.",
        }),
      ],
    },
    {
      name: "defaultSEO",
      type: "object",
      title: "Default SEO Settings",
      description:
        "If page-specific SEO settings are not provided, these settings will be applied as default.",
      fields: seo.fields,
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Company Information",
      };
    },
  },
});

export default companyInfo;
