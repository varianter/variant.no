import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export enum ImageAlignment {
  Left = "left",
  Right = "right",
}

export enum ImageSize {
  Large = "large",
  Small = "small",
}

interface IHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}

interface ICrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface IImage {
  _key?: string;
  _type?: string;
  asset?: SanityImageSource; // image from Sanity
  alt?: string;
  crop?: ICrop;
  hotspot?: IHotspot;
  metadata?: {
    lqip: string;
  };
  figureDescription?: string;
}

export interface ImageExtendedProps extends IImage {
  imageAlignment: ImageAlignment;
}
