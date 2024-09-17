import {
  Navigation,
  LinkType,
  SectionType,
} from "studio/lib/payloads/navigation";
import { callToActionFieldID } from "studio/schemas/fields/callToActionFields";
import { linkID } from "studio/schemas/objects/link";
import primaryLogoFile from "../../stories/assets/energiai-primary-logo.svg";
import secondaryLogoFile from "../../stories/assets/energiai-secondary-logo.svg";
import { SocialMediaProfiles } from "studio/lib/payloads/socialMedia";

// Mock Navigation Data
export const mockNavigation: Navigation = {
  _id: "main-navigation",
  main: [
    {
      _key: "functionality",
      _type: linkID,
      linkTitle: "Functionality",
      linkType: LinkType.Internal,
      internalLink: { _ref: "functionality" },
    },
    {
      _key: "forpartners",
      _type: linkID,
      linkTitle: "For Partners",
      linkType: LinkType.Internal,
      internalLink: { _ref: "forPartners" },
    },
    {
      _key: "news",
      _type: linkID,
      linkTitle: "News",
      linkType: LinkType.Internal,
      internalLink: { _ref: "news" },
    },
    {
      _key: "aboutus",
      _type: linkID,
      linkTitle: "About Us",
      linkType: LinkType.Internal,
      internalLink: { _ref: "about" },
    },
    {
      _key: "login",
      _type: callToActionFieldID,
      linkTitle: "Log in",
      linkType: LinkType.External,
      url: "https://www.example.com",
    },
    {
      _key: "getstarted",
      _type: callToActionFieldID,
      linkTitle: "Get started",
      linkType: LinkType.External,
      url: "https://www.example.com",
    },
  ],
  footer: [
    {
      _key: "47456f5da563",
      _type: "footerSection",
      sectionTitle: "Social Media",
      sectionType: SectionType.SocialMedia,
      socialMediaLinks: {
        _ref: "soMeLinksID",
      },
    },
    {
      _key: "c3d5803182fb",
      _type: "footerSection",
      sectionTitle: "Content",
      sectionType: SectionType.Content,
      linksAndContent: [
        {
          _key: "1133695b2690",
          _type: linkID,
          linkTitle: "News",
          linkType: LinkType.Internal,
          internalLink: { _ref: "518fde35-d473-4cd9-afe3-3251d21170d7" },
          newTab: false,
        },
        {
          _key: "b627f75b08a6",
          _type: linkID,
          linkTitle: "About Us",
          linkType: LinkType.Internal,
          internalLink: { _ref: "8d16f870-72f5-4599-87c7-1e961bc5d427" },
          newTab: false,
        },
        {
          _key: "edf10e77f0f0",
          _type: linkID,
          linkTitle: "Functionality",
          linkType: LinkType.Internal,
          internalLink: { _ref: "d43233d8-9fb4-41b5-86cd-610c5d0fa07e" },
          newTab: false,
        },
        {
          _key: "3371f124134c",
          _type: linkID,
          linkTitle: "Contact Us",
          linkType: LinkType.Internal,
          internalLink: { _ref: "696ab97f-4830-4812-9aa3-4050196fab58" },
          newTab: false,
        },
      ],
    },
  ],
};

export const mockCompanyInfo = {
  companyName: "Variant",
  organizationNumber: "",
  companyPhone: "",
  companyEmail: "",
};

export const mockLogo = {
  primaryLogo: {
    src: primaryLogoFile,
    alt: "Primary Logo",
  },
  secondaryLogo: {
    src: secondaryLogoFile,
    alt: "Secondary Logo",
  },
  favicon: {},
};

// Mock Social Media Profiles
export const mockSocialMediaProfiles: SocialMediaProfiles = {
  _id: "profile123",
  _type: "soMeLinksID",
  soMeLinkArray: [
    {
      _type: "socialMediaLink",
      _key: "3",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/username",
    },
    {
      _type: "socialMediaLink",
      _key: "4",
      platform: "Instagram",
      url: "https://www.instagram.com/username",
    },
    {
      _type: "socialMediaLink",
      _key: "1",
      platform: "YouTube",
      url: "https://www.youtube.com/username",
    },
  ],
};
