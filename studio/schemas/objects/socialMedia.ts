import { defineType } from "sanity";
import SoMeInputs, { SoMePlatforms } from "../../components/SoMeInputs";

export const SocialMediaID = {
  link: "socialMediaLinkID",
  platform: "socialMediaPlatform",
  url: "socialMediaUrl",
};

export const socialMedia = defineType({
  name: SocialMediaID.link,
  title: "Social Media Profile",
  type: "object",
  components: {
    input: SoMeInputs,
  },
  fields: [
    {
      name: SocialMediaID.url,
      type: "url",
      title: "URL",
      validation: (rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ["http", "https"],
        }),
    },
    {
      name: SocialMediaID.platform,
      type: "string",
      title: "Platform",
      options: {
        list: SoMePlatforms,
      },
    },
  ],
  preview: {
    select: {
      platform: "platform",
      url: "url",
    },
    prepare(selection) {
      const { platform, url } = selection;
      return {
        title: platform || "No platform specified",
        subtitle: url || "No URL specified",
      };
    },
  },
});
