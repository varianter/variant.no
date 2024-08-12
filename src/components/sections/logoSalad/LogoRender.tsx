"use client";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { IImage } from "studio/lib/payloads/media";

export const RenderLogo = ({ asset }: { asset: IImage }) => {
  const renderedLogo = useConvertSanityImageToNextImage(asset);

  return renderedLogo;
};
