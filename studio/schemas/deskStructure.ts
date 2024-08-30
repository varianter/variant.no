import { StructureBuilder } from "sanity/structure";
import { pageBuilderID } from "./builders/pageBuilder";
import { blogId } from "./documents/blog";
import {
  TransferIcon,
  UsersIcon,
  CogIcon,
  ControlsIcon,
  ProjectsIcon,
  StackCompactIcon,
  HeartIcon,
  CaseIcon,
} from "@sanity/icons";
import { soMeLinksID } from "./documents/socialMediaProfiles";
import { companyInfoID } from "./documents/companyInfo";
import { postId } from "./documents/post";
import { legalDocumentID } from "./documents/legalDocuments";
import { compensationsId } from "./documents/compensations";

export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Company Information")
        .icon(CaseIcon)
        .child(
          S.document()
            .schemaType(companyInfoID)
            .documentId(companyInfoID)
            .title("Company Information"),
        ),
      S.listItem()
        .title("Legal Documents")
        .icon(CogIcon)
        .child(S.documentTypeList(legalDocumentID).title("Legal Documents")),
      S.listItem()
        .title("Social Media Profiles")
        .icon(UsersIcon)
        .child(S.document().schemaType(soMeLinksID).documentId(soMeLinksID)),
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
        .title("Dynamic Pages")
        .icon(ProjectsIcon)
        .child(S.documentTypeList(pageBuilderID).title("Dynamic Pages")),
      S.listItem()
        .title("Static Pages")
        .icon(StackCompactIcon)
        .child(
          S.list()
            .title("Static Pages")
            .items([
              S.listItem()
                .title("Blog Overview & Settings")
                .icon(ControlsIcon)
                .child(
                  S.document()
                    .schemaType(blogId)
                    .documentId(blogId)
                    .title("Blog Overview & Settings"),
                ),
              S.listItem()
                .title("Compensations")
                .icon(HeartIcon)
                .child(
                  S.documentTypeList(compensationsId).title("Compensations"),
                ),
            ]),
        ),
    ]);
