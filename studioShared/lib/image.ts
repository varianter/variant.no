import imageUrlBuilder from "@sanity/image-url";
import { sharedClient } from "./client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(sharedClient);

export function urlForShared(source: SanityImageSource) {
  return builder.image(source);
}
