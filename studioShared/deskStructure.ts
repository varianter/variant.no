import { i18n } from "languages";
import {
  StructureResolver,
  DefaultDocumentNodeResolver,
} from "sanity/structure";
import { blogPostsID } from "studioShared/schemas/documents/blogPosts";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blogposts sorted by base language")
        .child(
          S.documentTypeList(blogPostsID)
            .title("List of Blogposts")
            .filter("_type == $type && language == $lang")
            .params({ type: blogPostsID, lang: i18n.base })
        ),
      S.listItem()
        .title("Blogposts sorted into language folders")
        .child(
          S.list()
            .title("Blogposts")
            .items([
              S.listItem()
                .title("Blogposts (EN)")
                .child(
                  S.documentTypeList(blogPostsID)
                    .title("List of Blogposts (EN)")
                    .filter("_type == $type && language == $lang")
                    .params({ type: blogPostsID, lang: "en" })
                ),
              S.listItem()
                .title("Blogposts (NO)")
                .child(
                  S.documentTypeList(blogPostsID)
                    .title("List of Blogposts (NO)")
                    .filter("_type == $type && language == $lang")
                    .params({ type: blogPostsID, lang: "no" })
                ),
              S.listItem()
                .title("Blogposts (SE)")
                .child(
                  S.documentTypeList(blogPostsID)
                    .title("List of Blogposts (SE)")
                    .filter("_type == $type && language == $lang")
                    .params({ type: blogPostsID, lang: "se" })
                ),
              // Add more languages as needed
            ])
        ),
      // Other items can be added here if needed
    ]);
