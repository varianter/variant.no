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
} from "@sanity/icons";
import { soMeLinksID } from "./documents/socialMediaProfiles";
import { companyInfoID } from "./documents/companyInfo";
import { legalDocumentID } from "./documents/legalDocuments";
import { compensationsId } from "./documents/compensations";
import { redirectId } from "./documents/redirect";
import { companyLocationID } from "./documents/companyLocation";
import { languageID } from "./documents/languageDetails";

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
            .title("SEO Redirects")
            .icon(DoubleChevronRightIcon)
            .child(S.documentTypeList(redirectId).title("Redirects")),
          //TODO: Add SEO Settings
          S.listItem()
            .title("Languages")
            .icon(TranslateIcon)
            .child(S.document().schemaType(languageID).title("Languages")),
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
export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      adminSection(S),
      siteSettingSection(S),
      pagesSection(S),
      SpecialPagesSection(S),
    ]);
