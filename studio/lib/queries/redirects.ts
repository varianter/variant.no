import { groq } from "next-sanity";

export const REDIRECT_BY_SOURCE_SLUG_QUERY = groq`
  *[_type == "redirect" && source.current == $slug][0]{
    "destination": select(
      destination.type == "reference" => destination.reference->slug.current,
      destination.type == "external" => destination.external
    )
  }
`;
