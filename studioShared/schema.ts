import { type SchemaTypeDefinition } from "sanity";

import { richText } from "studio/schemas/fields/text";

import customerCases from "./schemas/documents/customerCase";
import frontpageSettings from "./schemas/documents/frontpageSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerCases, frontpageSettings, richText],
};
