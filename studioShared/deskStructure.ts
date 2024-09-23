import { StructureResolver } from "sanity/structure";

import { defaultLanguage } from "internationalization/supportedLanguages";

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
            // only show costumer cases in the base language
            .filter("_type == $type && language == $lang")
            .params({
              type: customerCaseID,
              lang: defaultLanguage?.id,
            })
        ),
    ]);
