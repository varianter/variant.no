import { Meta, StoryObj } from "@storybook/react";

import PostHero from "./PostHero";

const meta: Meta<typeof PostHero> = {
  title: "Post/PostHero",
  component: PostHero,
  parameters: {
    a11y: {},
  },
};

export default meta;
type Story = StoryObj<typeof PostHero>;

export const Default: Story = {
  args: {
    title: "Such a good story title",
    date: "2024-07-24T09:09:02Z",
  },
};
