import { type SchemaTypeDefinition } from "sanity";

import { richText } from "studio/schemas/fields/text";

import customerCases from "./schemas/documents/customerCase";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerCases, richText],
};
