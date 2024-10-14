import { type SchemaTypeDefinition } from "sanity";

import companyInfo from "./schemas/documents/admin/companyInfo";
import companyLocation from "./schemas/documents/admin/companyLocation";
import defaultSeo from "./schemas/documents/admin/defaultSeo";
import legalDocument from "./schemas/documents/admin/legalDocuments";
import compensations from "./schemas/documents/compensations";
import languageSettings from "./schemas/documents/languageSettings";
import pageBuilder from "./schemas/documents/pageBuilder";
import brandAssets from "./schemas/documents/siteSettings/brandAssets";
import brokenLink from "./schemas/documents/siteSettings/brokenLink";
import locale from "./schemas/documents/siteSettings/locale";
import navigationManager from "./schemas/documents/siteSettings/navigationManager";
import socialMediaLinks from "./schemas/documents/siteSettings/socialMediaProfiles";
import customerCasesPage from "./schemas/documents/specialPages/customerCasesPage";
import callToActionField from "./schemas/fields/callToActionFields";
import { richText } from "./schemas/fields/text";
import benefitsByLocation from "./schemas/objects/compensations/benefitsByLocation";
import { footerSection } from "./schemas/objects/footerSection";
import { link } from "./schemas/objects/link";
import seo from "./schemas/objects/seo";
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
    legalDocument,
    compensations,
    customerCasesPage,
    brokenLink,
    benefitsByLocation,
    companyLocation,
    defaultSeo,
    brandAssets,
    languageSettings,
    locale,
    richText,
    seo,
  ],
};
