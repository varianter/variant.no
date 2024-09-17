import { Meta, StoryObj } from "@storybook/react";

import { postMock } from "./mockData";
import PostPreview from "./PostPreview";

const meta: Meta<typeof PostPreview> = {
  title: "Blog/PostPreview",
  component: PostPreview,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "article",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostPreview>;

export const Default: Story = {
  args: postMock,
};
