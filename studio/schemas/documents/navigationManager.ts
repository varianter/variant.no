import { defineType } from "sanity";
import { linkID } from "../objects/link";
import { footerSectionID } from "../objects/footerSection";
import { pageBuilderID } from "../builders/pageBuilder";
import { callToActionFieldID } from "../fields/callToActionFields";

export const navManagerID = {
  navigationManager: "navigationManager",
  setLanding: "setLanding",
  type: "menuType",
  main: "main",
  sidebar: "sidebar",
  footer: "footer",
};

const navigationManager = defineType({
  name: navManagerID.navigationManager,
  type: "document",
  title: "Navigation Manager",
  fields: [
    {
      name: navManagerID.setLanding,
      type: "reference",
      to: [{ type: pageBuilderID }],
      title: "Landing Page",
      description:
        "Select the landing page for your website. This is the primary page that visitors see first. It sets the tone of your website and should guide visitors to key areas of interest.",
      options: {
        disableNew: true,
      },
    },
    {
      name: navManagerID.main,
      title: "Main Menu",
      description:
        "Add links to the main menu. These links will appear at the top of your website and help visitors navigate to important sections. The first Call to Action (CTA) will be styled as a primary link button. Note: The order in which you add the links here is how they will be displayed on the website.",
      type: "array",
      of: [{ type: linkID }, { type: callToActionFieldID }],
      validation: (rule) =>
        rule.custom((links) => {
          if (!Array.isArray(links)) return true;
          const ctaCount = links.filter(
            (link) => link._type === callToActionFieldID,
          ).length;
          return ctaCount <= 2 || "You can only have two Call to Action links";
        }),
    },
    {
      name: navManagerID.footer,
      title: "Footer Menu",
      description:
        "The footer menu consists of different sections. Here you can add and define these sections. Each section can contain either social media links or custom links and text or images (e.g., logos). Note: The order in which you add the sections here is how they will be displayed on the website.",
      type: "array",
      of: [{ type: footerSectionID.main }],
    },
    {
      name: navManagerID.sidebar,
      title: "Sidebar Menu",
      description:
        "Add links to the sidebar menu. These links will appear on smaller screens and provide easy navigation on mobile devices. If the sidebar menu is not provided, the main menu will be used instead. Note: The order in which you add the links here is how they will be displayed on the website.",
      type: "array",
      of: [{ type: linkID }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation Manager",
      };
    },
  },
});

export default navigationManager;
