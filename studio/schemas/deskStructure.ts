import { StructureBuilder } from "sanity/structure";
import { pageBuilderID } from "./builders/pageBuilder";
import { blogId } from "./documents/blog";
import {
  TransferIcon,
  UsersIcon,
  CogIcon,
  ControlsIcon,
  ProjectsIcon,
  ComposeIcon,
} from "@sanity/icons";
import { soMeLinksID } from "./documents/socialMediaProfiles";
import { siteSettingsID } from "./documents/siteSettings";
import { postId } from "./documents/post";
import { legalDocumentID } from "./documents/legalDocuments";

export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType(siteSettingsID)
            .documentId(siteSettingsID)
            .title("Site Settings")
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
            .title("Navigation Manager")
        ),
      S.listItem()
        .title("Pages")
        .icon(ProjectsIcon)
        .child(S.documentTypeList(pageBuilderID).title("Pages")),
      S.listItem()
        .title("Blog")
        .icon(ComposeIcon)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Blog Overview & Settings")
                .icon(ControlsIcon)
                .child(
                  S.document()
                    .schemaType(blogId)
                    .documentId(blogId)
                    .title("Blog Overview & Settings")
                ),
              S.listItem()
                .title("Posts")
                .icon(ComposeIcon)
                .child(S.documentTypeList(postId).title("Posts")),
            ])
        ),
    ]);