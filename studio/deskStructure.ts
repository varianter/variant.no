import {
  CaseIcon,
  CogIcon,
  ConfettiIcon,
  EarthGlobeIcon,
  HeartIcon,
  ImagesIcon,
  InfoOutlineIcon,
  PinIcon,
  ProjectsIcon,
  SearchIcon,
  SparkleIcon,
  TransferIcon,
  TranslateIcon,
  UsersIcon,
} from "@sanity/icons";
import { StructureBuilder } from "sanity/structure";

import { companyInfoID } from "./schemas/documents/admin/companyInfo";
import { companyLocationID } from "./schemas/documents/admin/companyLocation";
import { defaultSeoID } from "./schemas/documents/admin/defaultSeo";
import { legalDocumentID } from "./schemas/documents/admin/legalDocuments";
import { compensationsId } from "./schemas/documents/compensations";
import { languageSettingsID } from "./schemas/documents/languageSettings";
import { pageBuilderID } from "./schemas/documents/pageBuilder";
import { announcementID } from "./schemas/documents/siteSettings/announcement";
import { brandAssetsID } from "./schemas/documents/siteSettings/brandAssets";
import { localeID } from "./schemas/documents/siteSettings/locale";
import { soMeLinksID } from "./schemas/documents/siteSettings/socialMediaProfiles";
import { customerCasesPageID } from "./schemas/documents/specialPages/customerCasesPage";

// Admin Section
const adminSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Admin")
    .icon(CaseIcon)
    .child(
      S.list()
        .title("Admin")
        .items([
          S.listItem()
            .title("Parent Company")
            .icon(InfoOutlineIcon)
            .child(
              S.document()
                .schemaType(companyInfoID)
                .documentId(companyInfoID)
                .title("Parent Company"),
            ),
          S.listItem()
            .title("Company Locations")
            .icon(PinIcon)
            .child(
              S.documentTypeList(companyLocationID).title("Company Locations"),
            ),
          S.listItem()
            .title("Legal Documents")
            .icon(CogIcon)
            .child(
              S.documentTypeList(legalDocumentID).title("Legal Documents"),
            ),
        ]),
    );

// Site Settings Section
const siteSettingSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Site Settings")
    .icon(CogIcon)
    .child(
      S.list()
        .title("Site Settings")
        .items([
          S.listItem()
            .title("Brand Assets")
            .icon(ImagesIcon)
            .child(
              S.document()
                .schemaType(brandAssetsID)
                .documentId(brandAssetsID)
                .title("Brand Assets"),
            ),
          S.listItem()
            .title("Navigation Manager")
            .icon(TransferIcon)
            .child(
              S.document()
                .schemaType("navigationManager")
                .documentId("navigationManager")
                .title("Navigation Manager"),
            ),
          S.listItem()
            .title("Social Media Profiles")
            .icon(UsersIcon)
            .child(
              S.document().schemaType(soMeLinksID).documentId(soMeLinksID),
            ),
          S.listItem()
            .title("Languages")
            .icon(TranslateIcon)
            .child(
              S.document()
                .schemaType(languageSettingsID)
                .documentId(languageSettingsID)
                .title("Languages"),
            ),
          S.listItem()
            .title("Region")
            .icon(EarthGlobeIcon)
            .child(
              S.document()
                .schemaType(localeID)
                .documentId(localeID)
                .title("Region"),
            ),
          S.listItem()
            .title("Default SEO")
            .icon(SearchIcon)
            .child(
              S.document()
                .schemaType(defaultSeoID)
                .documentId(defaultSeoID)
                .title("Default SEO"),
            ),
          S.listItem()
            .title("Announcement")
            .icon(ConfettiIcon)
            .child(
              S.document()
                .schemaType(announcementID)
                .documentId(announcementID)
                .title("Announcement"),
            ),
        ]),
    );

// Section for dynamic and customizable Pages
const pagesSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .icon(ProjectsIcon)
    .child(S.documentTypeList(pageBuilderID).title("Pages"));

//Section for set pages
const specialPagesSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Special Pages")
    .icon(SparkleIcon)
    .child(
      S.list()
        .title("Special Pages")
        .items([
          S.listItem()
            .title("Compensations")
            .icon(HeartIcon)
            .child(
              S.document()
                .schemaType(compensationsId)
                .documentId(compensationsId)
                .title("Compensations"),
            ),
          S.listItem()
            .title("Customer Cases")
            .icon(ProjectsIcon)
            .child(
              S.document()
                .schemaType(customerCasesPageID)
                .documentId(customerCasesPageID)
                .title("Customer Cases"),
            ),
        ]),
    );

// Main export
export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      adminSection(S),
      siteSettingSection(S),
      pagesSection(S),
      specialPagesSection(S),
    ]);
