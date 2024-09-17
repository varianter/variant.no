import { Meta, StoryObj } from "@storybook/react";

import CallToAction from "./CallToAction";
import { ctaMockData } from "./mockData";

const meta: Meta<typeof CallToAction> = {
  title: "Components/Sections/CallToAction",
  component: CallToAction,
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
type Story = StoryObj<typeof CallToAction>;

// DEFAULT
export const Default: Story = {
  args: {
    callToAction: ctaMockData,
  },
};
