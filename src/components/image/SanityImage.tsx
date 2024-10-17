"use client";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { UseNextSanityImageProps, useNextSanityImage } from "next-sanity-image";
import { useEffect, useState } from "react";

import { client } from "studio/lib/client";
import { IImage } from "studio/lib/interfaces/media";
import { sharedClient } from "studioShared/lib/client";

/**
 * Builds Next.js props for a given Sanity image from an unknown Sanity project.
 *
 * Each generated image source is checked for existence in order to pick the correct source project.
 *
 * NOTE: It is assumed that an image id is only valid for a single project.
 * The result of providing an id that resolves to a valid image in multiple projects is therefore not well-defined.
 *
 * @param image asset props for image from unknown Sanity project
 */
const useNextSanityGlobalImage = (
  image: SanityImageSource,
): UseNextSanityImageProps | null => {
  const studioImage = useNextSanityImage(client, image);
  const sharedImage = useNextSanityImage(sharedClient, image);

  const [globalImage, setGlobalImage] =
    useState<UseNextSanityImageProps | null>(null);

  useEffect(() => {
    fetch(studioImage.src).then((r) => r.ok && setGlobalImage(studioImage));
    fetch(sharedImage.src).then((r) => r.ok && setGlobalImage(sharedImage));
  }, [studioImage, sharedImage]);

  return globalImage;
};

const SanityAssetImage = ({
  image,
  imageProps,
}: {
  image: IImage;
  imageProps?: UseNextSanityImageProps;
}) => {
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
      style={{
        objectFit: "cover",
        objectPosition,
        maxWidth: "100%",
        maxHeight: "100%",
        height: "auto",
        width: "auto",
      }}
    />
  );
};

export function SanityStudioImage({ image }: { image: IImage }) {
  const imageProps = useNextSanityImage(client, image);
  return <SanityAssetImage image={image} imageProps={imageProps} />;
}

export function SanitySharedImage({ image }: { image: IImage }) {
  const imageProps = useNextSanityImage(sharedClient, image);
  return <SanityAssetImage image={image} imageProps={imageProps} />;
}

function SanityGlobalImage({ image }: { image: IImage }) {
  const imageProps = useNextSanityGlobalImage(image);
  return (
    <SanityAssetImage image={image} imageProps={imageProps ?? undefined} />
  );
}

export function SanityImage({ image }: { image: IImage }) {
  if (image?.src) {
    return (
      <Image
        alt={image?.alt || ""}
        src={image.src.src}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        width={300}
        height={300}
      />
    );
  }
  return <SanityGlobalImage image={image} />;
}
