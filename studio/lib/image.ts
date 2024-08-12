import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// export const urlForImage = (source: Image) => {
//   return builder?.image(source).auto("format").fit("max").url();
// };
