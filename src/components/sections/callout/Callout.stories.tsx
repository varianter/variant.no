import { Meta, StoryObj } from "@storybook/react";

import Callout from "./Callout";
import { calloutMockData } from "./mockData";

const meta: Meta<typeof Callout> = {
  title: "Components/Sections/Callout",
  component: Callout,
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
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    callout: calloutMockData,
  },
};
