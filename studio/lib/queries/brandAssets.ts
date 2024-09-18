import { groq } from "next-sanity";

import { brandAssetsID } from "studio/schemas/documents/siteSettings/brandAssets";

export const BRAND_ASSETS_QUERY = groq`
  *[_type == "${brandAssetsID}" && _id == "${brandAssetsID}"][0]
`;
