import { groq } from "next-sanity";

export const REDIRECT_BY_SOURCE_SLUG_QUERY = groq`
  *[_type == "redirect" && source.current == $slug][0]{
    "destinationSlug": select(
      destination.type == "slug" => destination.slug.current,
      destination.type == "reference" => destination.reference->slug.current
    )
  }
`;
