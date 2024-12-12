import { defineType } from "sanity";

import { SocialMediaID } from "studio/schemas/objects/socialMedia";

export const soMeLinksID = "soMeLinksID";

const socialMediaLinks = defineType({
  name: soMeLinksID,
  type: "document",
  title: "Social Media Profiles",
  fields: [
    {
      name: "soMeLinkArray",
      title: "Social Media Profiles",
      type: "array",
      of: [{ type: SocialMediaID.link }],
      description:
        "Add links to your social media profiles. This allows visitors to connect with you on social platforms. If the link does not match any of the predefined platforms listed, please add the link directly to the footer through the Navigation Manager",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Social Media Profiles",
      };
    },
  },
});

export default socialMediaLinks;
