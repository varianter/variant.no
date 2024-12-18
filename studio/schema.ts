import { type SchemaTypeDefinition } from "sanity";

import companyInfo from "./schemas/documents/admin/companyInfo";
import companyLocation from "./schemas/documents/admin/companyLocation";
import defaultSeo from "./schemas/documents/admin/defaultSeo";
import jobPostings from "./schemas/documents/admin/jobPostings";
import legalDocument from "./schemas/documents/admin/legalDocuments";
import compensations from "./schemas/documents/compensations";
import languageSettings from "./schemas/documents/languageSettings";
import pageBuilder from "./schemas/documents/pageBuilder";
import announcement from "./schemas/documents/siteSettings/announcement";
import brandAssets from "./schemas/documents/siteSettings/brandAssets";
import locale from "./schemas/documents/siteSettings/locale";
import navigationManager from "./schemas/documents/siteSettings/navigationManager";
import socialMediaLinks from "./schemas/documents/siteSettings/socialMediaProfiles";
import customerCasesPage from "./schemas/documents/specialPages/customerCasesPage";
import callToActionField from "./schemas/fields/callToActionFields";
import { richText } from "./schemas/fields/text";
import benefitsByLocation from "./schemas/objects/compensations/benefitsByLocation";
import { footerSection } from "./schemas/objects/footerSection";
import jobPosting from "./schemas/objects/jobPosting";
import { link } from "./schemas/objects/link";
import { compensationCalculator } from "./schemas/objects/sections/compensation-calculator";
import { employeeHighlightSection } from "./schemas/objects/sections/employeeHighlight";
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
    benefitsByLocation,
    companyLocation,
    defaultSeo,
    brandAssets,
    languageSettings,
    locale,
    richText,
    seo,
    announcement,
    jobPosting,
    jobPostings,
    employeeHighlightSection,
    compensationCalculator,
  ],
};
