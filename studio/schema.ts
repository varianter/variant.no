import { type SchemaTypeDefinition } from "sanity";
import pageBuilder from "./schemas/builders/pageBuilder";
import navigationManager from "./schemas/documents/navigationManager";
import { link } from "./schemas/objects/link";
import { socialMedia } from "./schemas/objects/socialMedia";
import { footerSection } from "./schemas/objects/footerSection";
import socialMediaLinks from "./schemas/documents/socialMediaProfiles";
import callToActionField from "./schemas/fields/callToActionFields";
import companyInfo from "./schemas/documents/companyInfo";
import blog from "./schemas/documents/blog";
import posts from "./schemas/documents/post";
import categories from "./schemas/fields/categories";
import legalDocument from "./schemas/documents/legalDocuments";
import companyLocation from "./schemas/documents/companyLocation";
import compensations from "./schemas/documents/compensations";
import redirect from "./schemas/documents/redirect";
import benefitsByLocation from "./schemas/objects/compensations/benefitsByLocation";
import supportedLanguages from "./schemas/documents/supportedLanguages";
import defaultSeo from "./schemas/documents/admin/defaultSeo";
import brandAssets from "./schemas/documents/brandAssets";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    companyInfo,
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
    compensations,
    redirect,
    benefitsByLocation,
    companyLocation,
    supportedLanguages,
    defaultSeo,
    brandAssets,
  ],
};
