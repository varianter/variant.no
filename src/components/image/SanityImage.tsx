"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { client } from "studio/lib/client";
import { IImage } from "studio/lib/interfaces/media";
import { sharedClient } from "studioShared/lib/client";

export function SanityImage({
  image,
  objectFit = "cover",
  isShared = false,
}: {
  image: IImage;
  objectFit?: "cover" | "none";
  isShared?: boolean;
}) {
  const sanityClient = isShared ? sharedClient : client;
  const imageProps = useNextSanityImage(sanityClient, image);
  const objectPosition = image.hotspot
    ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
    : "50% 50%"; // Default to center if no hotspot is defined

  if (!imageProps) {
    return null;
  }

  return (
    <Image
      alt={image?.alt || ""}
      {...imageProps}
      width={imageProps.width}
      height={imageProps.height}
      blurDataURL={image.metadata?.lqip}
      style={
        objectFit === "none"
          ? {}
          : {
              objectFit: "cover",
              objectPosition,
              maxWidth: "100%",
              maxHeight: "100%",
            }
      }
    />
  );
}
