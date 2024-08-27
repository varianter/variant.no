import { useNextSanityImage } from "next-sanity-image";
// TODO: add support for sharedClient
import { client } from "studio/lib/client";
import { IImage } from "studio/lib/payloads/media";
import Image from "next/image";
import { JSX } from "react";

const MockImage = ({ image }: { image: IImage }) => {
  if (!image.src) {
    return null;
  }
  return (
    <Image
      alt={image?.alt || ""}
      src={image.src.src}
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
};

const SanityImage = ({ image }: { image: IImage }) => {
  const sanityImageSrc = useNextSanityImage(client, image);
  const objectPosition = image.hotspot
    ? `${(image.hotspot.x || 0.5) * 100}% ${(image.hotspot.y || 0.5) * 100}%`
    : "50% 50%"; // Default to center if no hotspot is defined
  if (!sanityImageSrc) {
    return null;
  }
  return (
    <Image
      alt={image?.alt || ""}
      {...sanityImageSrc}
      width={sanityImageSrc.width}
      height={sanityImageSrc.height}
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

// Custom hook for converting an image from Sanity to Next.js image component
export function useConvertSanityImageToNextImage(
  image: IImage | undefined,
): JSX.Element | null {
  // Return mockData.image for stories in Storybook
  if (image?.src) {
    return <MockImage image={image} />;
  }

  // Return image from sanity
  if (image) {
    return <SanityImage image={image} />;
  }

  return null;
}
