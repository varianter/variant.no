import { type SchemaTypeDefinition } from "sanity";

import customerCases from "./schemas/documents/customerCase";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerCases],
};
