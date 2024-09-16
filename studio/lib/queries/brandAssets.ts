import { groq } from "next-sanity";
import { brandAssetsID } from "../../schemas/documents/brandAssets";

export const BRAND_ASSETS_QUERY = groq`
  *[_type == "${brandAssetsID}" && _id == "${brandAssetsID}"][0]
`;
