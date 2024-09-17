import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sharedClient } from "./client";

const builder = imageUrlBuilder(sharedClient);

export function urlForShared(source: SanityImageSource) {
  return builder.image(source);
}
