import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    a11y: {
      element: "button",
      config: {},
      options: {},
      manual: false,
    },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "small"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    onClick: { action: "clicked" },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLarge: Story = {
  args: {
    size: "large",
    type: "primary",
    children: "Primary Large Button",
  },
};

export const PrimarySmall: Story = {
  args: {
    size: "small",
    type: "primary",
    children: "Primary Small Button",
  },
};

export const SecondaryLarge: Story = {
  args: {
    size: "large",
    type: "secondary",
    children: "Secondary Large Button",
  },
};

export const SecondarySmall: Story = {
  args: {
    size: "small",
    type: "secondary",
    children: "Secondary Small Button",
  },
};
