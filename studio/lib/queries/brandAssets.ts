import { groq } from "next-sanity";
<<<<<<< HEAD
import { brandAssetsID } from "../../schemas/documents/siteSettings/brandAssets";
=======

import { brandAssetsID } from "studio/schemas/documents/brandAssets";
>>>>>>> v3

export const BRAND_ASSETS_QUERY = groq`
  *[_type == "${brandAssetsID}" && _id == "${brandAssetsID}"][0]
`;
