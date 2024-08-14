import { useNextSanityImage } from 'next-sanity-image';
import { client } from 'studio/lib/client';
import { IImage } from 'studio/lib/payloads/media';
import Image from 'next/image';
import { JSX, CSSProperties } from 'react';

const MockImage = ({ image, style }: {
  image: IImage,
  style?: CSSProperties | undefined
}) => {
  if (!image.src) {
    return null;
  }
  return (
    <Image
      alt={image?.alt || ''}
      src={image.src.src}
      width={0}
      height={0}
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        ...(style ?? {}),
      }}
    />
  );
};

const SanityImage = ({ image, style }: {
  image: IImage,
  style?: CSSProperties | undefined
}) => {
  const sanityImageSrc = useNextSanityImage(client, image);
  const objectPosition = image.hotspot
    ? `${(image.hotspot.x || 0.5) * 100}% ${(image.hotspot.y || 0.5) * 100}%`
    : '50% 50%'; // Default to center if no hotspot is defined
  if (!sanityImageSrc) {
    return null;
  }
  return (
    <Image
      alt={image?.alt || ''}
      {...sanityImageSrc}
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition,
        ...(style ?? {}),
      }}
    />
  );
};

// Custom hook for converting an image from Sanity to Next.js image component
export function useConvertSanityImageToNextImage(
  image: IImage | undefined,
  style?: CSSProperties | undefined,
): JSX.Element | null {
  // Return mockData.image for stories in Storybook
  if (image?.src) {
    return <MockImage image={image} style={style} />;
  }

  // Return image from sanity
  if (image) {
    return <SanityImage image={image} style={style} />;
  }

  return null;
}
