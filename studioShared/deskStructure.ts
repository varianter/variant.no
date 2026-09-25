import { ProjectsIcon, StarIcon } from "@sanity/icons";
import { StructureResolver } from "sanity/structure";

import { PreviewIFrame } from "./components/Preview";
import { customerCaseID } from "./schemas/documents/customerCase";
import { frontpageSettingsID } from "./schemas/documents/frontpageSettings";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Customer cases")
        .icon(ProjectsIcon)
        .child(
          S.documentTypeList(customerCaseID)
            .title("Customer cases")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType(customerCaseID)
                .views([
                  S.view.form(),
                  S.view.component(PreviewIFrame).title("Preview"),
                ]),
            ),
        ),
      S.divider(),
      S.listItem()
        .title("Frontpage Settings")
        .icon(StarIcon)
        .child(
          S.documentTypeList(frontpageSettingsID).title("Frontpage Settings"),
        ),
    ]);
