import {
  CaseIcon,
  CogIcon,
  DoubleChevronRightIcon,
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

import { pageBuilderID } from "studio/schemas/builders/pageBuilder";
//import { blogId } from "./documents/blog";
import { defaultSeoID } from "studio/schemas/documents/admin/defaultSeo";
import { brandAssetsID } from "studio/schemas/documents/brandAssets";
import { companyInfoID } from "studio/schemas/documents/companyInfo";
import { companyLocationID } from "studio/schemas/documents/companyLocation";
import { compensationsId } from "studio/schemas/documents/compensations";
import { languageSettingsID } from "studio/schemas/documents/languageSettings";
import { legalDocumentID } from "studio/schemas/documents/legalDocuments";
import { redirectId } from "studio/schemas/documents/redirect";
import { soMeLinksID } from "studio/schemas/documents/socialMediaProfiles";

// Admin Section
const adminSection = (S: StructureBuilder) =>
  S.listItem()
    .title("Admin")
    .icon(CaseIcon)
    .child(
      S.list()
        .title("Company Details")
        .items([
          S.listItem()
            .title("Company Information")
            .icon(InfoOutlineIcon)
            .child(
              S.document()
                .schemaType(companyInfoID)
                .documentId(companyInfoID)
                .title("Company Information"),
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
              S.documentTypeList(legalDocumentID).title("Company Locations"),
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
            .child(S.documentTypeList(redirectId).title("Redirects")),
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
export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      adminSection(S),
      siteSettingSection(S),
      pagesSection(S),
      specialPagesSection(S),
    ]);
