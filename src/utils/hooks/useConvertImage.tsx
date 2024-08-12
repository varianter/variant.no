import { useNextSanityImage } from "next-sanity-image";
import { client } from "studio/lib/client";
import { IImage } from "studio/lib/payloads/media";
import Image from "next/image";
import { JSX } from "react";

// Custom hook for converting an image from Sanity to Next.js image component
export function useConvertSanityImageToNextImage(
  image: IImage | undefined
): JSX.Element | null {
  if (!image) {
    return null;
  }

  // Use the useNextSanityImage hook to get the image data including hotspot and crop
  const nextImageSrc = useNextSanityImage(client, image);

  if (!image?.src && !nextImageSrc) {
    return null;
  }

  // Return mockData.image for stories in Storybook
  if (image.src) {
    return (
      <Image
        alt={image?.alt || ""}
        src={image.src.src}
        width={0}
        height={0}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    );
  }

  if (nextImageSrc) {
    // Safely access the hotspot properties
    const objectPosition = image.hotspot
      ? `${(image.hotspot.x || 0.5) * 100}% ${(image.hotspot.y || 0.5) * 100}%`
      : "50% 50%"; // Default to center if no hotspot is defined

    return (
      <Image
        alt={image?.alt || ""}
        {...nextImageSrc}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition,
        }}
      />
    );
  }

  return null;
}
