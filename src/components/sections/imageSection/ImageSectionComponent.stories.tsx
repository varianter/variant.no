import { Meta, StoryObj } from "@storybook/react";
import placeholder from "../../../stories/assets/image-placeholder.png";
import ImageSectionComponent from "./ImageSectionComponent";

const meta: Meta<typeof ImageSectionComponent> = {
  title: "Components/Sections/Image",
  component: ImageSectionComponent,
  parameters: {
    a11y: {
      element: "img",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageSectionComponent>;

export const Default: Story = {
  args: {
    section: {
      _key: "2052ec0aea39",
      _type: "imageSection",
      basicTitle: "Awesome title",
      image: {
        _key: "2052ec0aea39",
        _type: "image",
        alt: "placeholder alt",
        src: placeholder,
      },
    },
  },
};
