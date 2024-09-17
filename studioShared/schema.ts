import { type SchemaTypeDefinition } from "sanity";

import blogPosts from "./schemas/documents/blogPosts";
import customerCases from "./schemas/documents/customerCase";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPosts, customerCases],
};
