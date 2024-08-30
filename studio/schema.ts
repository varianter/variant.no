import { type SchemaTypeDefinition } from "sanity";
import pageBuilder from "./schemas/builders/pageBuilder";
import navigationManager from "./schemas/documents/navigationManager";
import { link } from "./schemas/objects/link";
import { socialMedia } from "./schemas/objects/socialMedia";
import { footerSection } from "./schemas/objects/footerSection";
import socialMediaLinks from "./schemas/documents/socialMediaProfiles";
import callToActionField from "./schemas/fields/callToActionFields";
import siteSettings from "./schemas/documents/siteSettings";
import blog from "./schemas/documents/blog";
import posts from "./schemas/documents/post";
import categories from "./schemas/fields/categories";
import legalDocument from "./schemas/documents/legalDocuments";
import benefit from "./schemas/documents/benefit";
import salaryAndBenefits from "./schemas/documents/salaryAndBenefits";
import office from "./schemas/documents/office";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    navigationManager,
    socialMediaLinks,
    pageBuilder,
    link,
    socialMedia,
    footerSection,
    callToActionField,
    blog,
    posts,
    categories,
    legalDocument,
    salaryAndBenefits,
    benefit,
    office,
  ],
};
