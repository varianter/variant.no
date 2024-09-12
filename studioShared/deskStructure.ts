import { i18n } from "languages";
import { StructureResolver } from "sanity/structure";
import { customerCaseID } from "./schemas/documents/customerCase";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Customer cases")
        .child(
          S.documentTypeList(customerCaseID)
            .title("Customer cases")
            .filter("_type == $type && language == $lang")
            .params({ type: customerCaseID, lang: i18n.base }),
        ),
    ]);
