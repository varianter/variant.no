// Testimonials.stories.tsx

import { Meta, StoryObj } from "@storybook/react";

import { testimonialsMockData } from "./mockData";
import { Testimonials } from "./Testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Components/Sections/Testimonials",
  component: Testimonials,
  parameters: {
    a11y: {
      element: '[role="tablist"]',
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  args: {
    testimonials: testimonialsMockData,
  },
};
