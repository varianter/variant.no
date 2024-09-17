import { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./Hero";
import { mockHeroSection } from "./mockData";

const meta: Meta<typeof Hero> = {
  title: "Components/Sections/Hero",
  component: Hero,
  parameters: {
    a11y: {
      element: "div",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Landing: Story = {
  args: {
    hero: mockHeroSection,
    isLanding: true,
  },
};

export const Default: Story = {
  args: {
    hero: mockHeroSection,
    isLanding: false,
  },
};
