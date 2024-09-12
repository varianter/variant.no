import { defineField } from "sanity";
import { title } from "../../fields/text";
import testimony from "../testimony";

export const testimonialsID = "testimonials";

export const testimonals = defineField({
  name: testimonialsID,
  title: "Testimonials",
  type: "object",
  fields: [
    title,
    {
      name: "listOfTestimonials",
      title: "List of Testimonials",
      type: "array",
      of: [testimony],
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(4)
          .error("You must have between 1 and 4 testimonials."),
    },
    {
      name: "imagesAsCircles",
      title: "Display Images as Circles",
      type: "boolean",
      description:
        "Enable this option to crop testimonial images into circular shapes.",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "basicTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Testimonials",
      };
    },
  },
});

export default testimonals;
