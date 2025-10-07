import seo from "./seo";

const seoWithoutImage = {
  ...seo,
  fields: seo.fields?.filter((field) => field.name !== "seoImage") || [],
};

export default seoWithoutImage;
