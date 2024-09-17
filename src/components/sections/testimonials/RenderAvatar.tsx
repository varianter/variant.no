"use client";

import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { IImage } from "studio/lib/interfaces/media";

export const RenderImage = ({ image }: { image: IImage }) => {
  const renderedImage = useConvertSanityImageToNextImage(image);

  return renderedImage;
};
