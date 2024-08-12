import { richText, title } from "../fields/text";
import image from "../fields/media";

export const testimony = {
  name: "testimony",
  type: "object",
  title: "Testimony",
  fields: [
    title,
    {
      name: "subTitle",
      type: "string",
      title: "Subtitle",
    },
    image,
    richText,
  ],
};

export default testimony;
