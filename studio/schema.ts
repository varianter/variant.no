import { type SchemaTypeDefinition } from "sanity";

import companyInfo from "./schemas/documents/admin/companyInfo";
import companyLocation from "./schemas/documents/admin/companyLocation";
import defaultSeo from "./schemas/documents/admin/defaultSeo";
import legalDocument from "./schemas/documents/admin/legalDocuments";
import blog from "./schemas/documents/blog";
import compensations from "./schemas/documents/compensations";
import languageSettings from "./schemas/documents/languageSettings";
import pageBuilder from "./schemas/documents/pageBuilder";
import posts from "./schemas/documents/post";
import brandAssets from "./schemas/documents/siteSettings/brandAssets";
import brokenLink from "./schemas/documents/siteSettings/brokenLink";
import navigationManager from "./schemas/documents/siteSettings/navigationManager";
import socialMediaLinks from "./schemas/documents/siteSettings/socialMediaProfiles";
import customerCasesPage from "./schemas/documents/specialPages/customerCasesPage";
import callToActionField from "./schemas/fields/callToActionFields";
import categories from "./schemas/fields/categories";
import benefitsByLocation from "./schemas/objects/compensations/benefitsByLocation";
import { footerSection } from "./schemas/objects/footerSection";
import { link } from "./schemas/objects/link";
import { socialMedia } from "./schemas/objects/socialMedia";
import { richText } from "./schemas/fields/text";

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
    customerCasesPage,
    brokenLink,
    benefitsByLocation,
    companyLocation,
    defaultSeo,
    brandAssets,
    languageSettings,
    richText,
  ],
};
