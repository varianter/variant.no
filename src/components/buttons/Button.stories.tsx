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
        options: ["large", "medium", "small"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["iconLeft", "iconRight"],
      },
    },
    background: {
      control: {
        type: "select",
        options: ["dark", "light"],
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
    children: "Primary large Button",
    background: "dark",
  },
};

export const PrimaryMedium: Story = {
  args: {
    size: "medium",
    type: "primary",
    children: "Primary Medium Button",
    background: "dark",
  },
};

export const PrimarySmall: Story = {
  args: {
    size: "small",
    type: "primary",
    children: "Primary Small Button",
    background: "dark",
  },
};

export const SecondaryLarge: Story = {
  args: {
    size: "large",
    type: "secondary",
    children: "Secondary Large Button",
  },
};

export const SecondaryMedium: Story = {
  args: {
    size: "medium",
    type: "secondary",
    children: "Secondary Medium Button",
    background: "dark",
  },
};

export const SecondarySmall: Story = {
  args: {
    size: "small",
    type: "secondary",
    children: "Secondary Small Button",
    background: "dark",
  },
};

export const PrimaryLargeLeftIcon: Story = {
  args: {
    size: "large",
    type: "primary",
    children: "Primary Large Left Icon Button",
    icon: "iconLeft",
    background: "dark",
  },
};

export const FilledMediumRightIcon: Story = {
  args: {
    size: "medium",
    type: "primary",
    children: "Primary Medium Left Icon Button",
    icon: "iconRight",
    background: "dark",
  },
};
