import { type SchemaTypeDefinition } from "sanity";

import pageBuilder from "./schemas/builders/pageBuilder";
import defaultSeo from "./schemas/documents/admin/defaultSeo";
import blog from "./schemas/documents/blog";
import brandAssets from "./schemas/documents/brandAssets";
import companyInfo from "./schemas/documents/companyInfo";
import companyLocation from "./schemas/documents/companyLocation";
import compensations from "./schemas/documents/compensations";
import languageSettings from "./schemas/documents/languageSettings";
import legalDocument from "./schemas/documents/legalDocuments";
import navigationManager from "./schemas/documents/navigationManager";
import posts from "./schemas/documents/post";
import redirect from "./schemas/documents/redirect";
import socialMediaLinks from "./schemas/documents/socialMediaProfiles";
import callToActionField from "./schemas/fields/callToActionFields";
import categories from "./schemas/fields/categories";
import benefitsByLocation from "./schemas/objects/compensations/benefitsByLocation";
import { footerSection } from "./schemas/objects/footerSection";
import { link } from "./schemas/objects/link";
import { socialMedia } from "./schemas/objects/socialMedia";

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
    languageSettings,
    defaultSeo,
    brandAssets,
  ],
};
