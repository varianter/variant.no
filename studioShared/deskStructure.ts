import { i18n } from "languages";
import { StructureResolver } from "sanity/structure";
import { customerCasesID } from "./schemas/documents/customerCases";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Costumer cases")
        .child(
          S.documentTypeList(customerCasesID)
            .title("Costumer cases")
            .filter("_type == $type && language == $lang")
            .params({ type: customerCasesID, lang: i18n.base })
        ),
    ]);
