import { StructureResolver } from "sanity/structure";

import { customerCaseID } from "./schemas/documents/customerCase";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Customer cases")
        .child(S.documentTypeList(customerCaseID).title("Customer cases")),
    ]);
