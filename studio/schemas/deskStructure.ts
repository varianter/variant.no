import { StructureBuilder } from "sanity/structure";
import { pageBuilderID } from "./builders/pageBuilder";
//import { blogId } from "./documents/blog";
import {
  TransferIcon,
  UsersIcon,
  CogIcon,
  ProjectsIcon,
  InfoOutlineIcon,
  HeartIcon,
  SparkleIcon,
  CaseIcon,
  TranslateIcon,
  DoubleChevronRightIcon,
  PinIcon,
  SearchIcon,
  ImagesIcon,
} from "@sanity/icons";

import { legalDocumentID } from "./documents/admin/legalDocuments";
import { compensationsId } from "./documents/compensations";
import { brokenLinksID } from "./documents/siteSettings/brokenLinks";
import { companyLocationID } from "./documents/admin/companyLocation";
import { supportedLanguagesID } from "./documents/siteSettings/supportedLanguages";
import { defaultSeoID } from "./documents/admin/defaultSeo";
import { brandAssetsID } from "./documents/siteSettings/brandAssets";
import { companyInfoID } from "./documents/admin/companyInfo";
import { soMeLinksID } from "./documents/siteSettings/socialMediaProfiles";

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
            .title("Supported Languages")
            .icon(TranslateIcon)
            .child(
              S.document()
                .schemaType(supportedLanguagesID)
                .documentId(supportedLanguagesID)
                .title("Supported Languages"),
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
            .title("Broken Links")
            .icon(DoubleChevronRightIcon)
            .child(S.documentTypeList(brokenLinksID).title("Redirects")),
        ]),
    );

// Section for dynamic and customizable Pages
const pagesSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .icon(ProjectsIcon)
    .child(S.documentTypeList(pageBuilderID).title("Pages"));

//Section for set pages
const SpecialPagesSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Special Pages")
    .icon(SparkleIcon)
    .child(
      S.list()
        .title("Special Pages")
        .items([
          // S.listItem()
          //   .title("Blog Overview & Settings")
          //   .icon(ControlsIcon)
          //   .child(
          //     S.document()
          //       .schemaType(blogId)
          //       .documentId(blogId)
          //       .title("Blog Overview & Settings"),
          //   ),
          S.listItem()
            .title("Compensations")
            .icon(HeartIcon)
            .child(
              S.document()
                .schemaType(compensationsId)
                .documentId(compensationsId)
                .title("Compensations"),
            ),
        ]),
    );

// Main export
const buildDeskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      adminSection(S),
      siteSettingSection(S),
      pagesSection(S),
      SpecialPagesSection(S),
    ]);

export default buildDeskStructure;
