import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BackButton from "./BackButton";

const meta: Meta<typeof BackButton> = {
  title: "Components/Buttons/BackButton",
  component: BackButton,
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
  },
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
