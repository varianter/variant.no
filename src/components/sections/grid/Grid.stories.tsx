import { Meta, StoryObj } from "@storybook/react";

import Grid from "./Grid";
import { mockGrid } from "./mockdata";

const meta: Meta<typeof Grid> = {
  title: "Components/Sections/Grid",
  component: Grid,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "ul",
      config: {},
      options: {},
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    grid: mockGrid,
  },
};
