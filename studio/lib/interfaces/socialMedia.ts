// Define the SocialMediaLink interface based on the expected structure
export interface SocialMediaLink {
  _type: string;
  _key?: string;
  url: string;
  platform: string;
}

// Define the SocialMediaProfiles interface based on the document schema
export interface SocialMediaProfiles {
  _id: string;
  _type: "soMeLinksID";
  soMeLinkArray?: SocialMediaLink[];
}
