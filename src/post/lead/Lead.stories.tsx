import { Meta, StoryObj } from "@storybook/react";

import placeholder from "src/stories/assets/image-placeholder.png";

import Lead from "./Lead";

const meta: Meta<typeof Lead> = {
  title: "Post/Lead",
  component: Lead,
  parameters: {
    a11y: {},
  },
};

export default meta;
type Story = StoryObj<typeof Lead>;

export const Default: Story = {
  args: {
    image: {
      _key: "2052ec0aea39",
      _type: "image",
      alt: "Alt text here",
      src: placeholder,
    },
    richText: [
      {
        _type: "block",
        _key: "272e06bbca76",
        children: [
          {
            _key: "dcf62ae1c1f10",
            _type: "span",
            marks: [],
            text: "In a world grappling with the consequences of climate change and environmental degradation, the need for sustainable practices has become more urgent than ever before. As individuals, communities, and businesses, we have a responsibility to make conscious choices that support the health of our planet.",
          },
        ],
        style: "normal",
      },
    ],
  },
};
