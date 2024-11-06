import { IImage } from "studio/lib/interfaces/media";

export interface ImageBlock {
  _key: string;
  _type: "imageBlock";
  image: IImage;
  fullWidth?: boolean;
}
