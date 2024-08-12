import { Meta, StoryObj } from "@storybook/react";
import MorePostsGrid from "./MorePostsGrid";
import { mockPosts } from "./mockdata";

const meta: Meta<typeof MorePostsGrid> = {
  title: "Post/MorePostsGrid",
  component: MorePostsGrid,
  parameters: {
    a11y: {},
  },
};

export default meta;
type Story = StoryObj<typeof MorePostsGrid>;

export const Default: Story = {
  args: {
    title: "More news",
    slug: "news",
    posts: mockPosts,
  },
};
