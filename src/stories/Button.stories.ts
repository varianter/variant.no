import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "src/components/buttons/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "radio", options: ["dark", "light"] },
    type: { control: "radio", options: ["primary", "secondary"] },
    size: { control: "radio", options: ["large", "medium", "small"] },
  },
  args: {
    onClick: fn(),
    background: "light", // Setter "light" som standard bakgrunn
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const PrimaryDark: Story = {
  args: {
    type: "primary",
    background: "dark",
    children: "Primary Dark Button",
  },
};

export const SecondaryDark: Story = {
  args: {
    type: "secondary",
    background: "dark",
    children: "Secondary Dark Button",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
    disabled: true,
  },
};
