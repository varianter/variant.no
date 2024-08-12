import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageAlignment } from "studio/schemas/fields/media";

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
  imageSrc?: SanityImageSource;
  src?: { src: string }; // Mock URL for Storybook
  alt?: string;
  crop?: ICrop;
  hotspot?: IHotspot;
}

export interface ImageExtendedProps extends IImage {
  imageAlignment: ImageAlignment;
}
