import { IImage } from "studio/lib/interfaces/media";

export interface ImageBlock {
  _key: string;
  _type: "imageBlock";
  images: IImage[];
  fullWidth?: boolean;
}
