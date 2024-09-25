import { Meta, StoryObj } from "@storybook/react";

import { LogoSalad } from "./LogoSalad";
import { extendedMockLogoSalad, mockLogoSalad } from "./mockData";

const meta: Meta<typeof LogoSalad> = {
  title: "Components/Sections/LogoSalad",
  component: LogoSalad,
  parameters: {
    a11y: {
      element: "article",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogoSalad>;

export const Default: Story = {
  args: {
    logoSalad: mockLogoSalad,
  },
};

export const Extended: Story = {
  args: {
    logoSalad: extendedMockLogoSalad,
  },
};
