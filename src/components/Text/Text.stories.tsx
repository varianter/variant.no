import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "display",
          "h1",
          "h2",
          "h3",
          "bodySuperLarge",
          "bodyLarge",
          "body",
          "small",
          "caption",
        ],
      },
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Display: Story = {
  args: {
    type: "display",
    children: "This is a display text",
  },
};

export const H1: Story = {
  args: {
    type: "h1",
    children: "This is an H1 text",
  },
};

export const H2: Story = {
  args: {
    type: "h2",
    children: "This is an H2 text",
  },
};

export const H3: Story = {
  args: {
    type: "h3",
    children: "This is an H3 text",
  },
};

export const BodySuperLarge: Story = {
  args: {
    type: "bodySuperLarge",
    children: "This is a Body Super Large text",
  },
};

export const BodyLarge: Story = {
  args: {
    type: "bodyLarge",
    children: "This is a Body Large text",
  },
};

export const Body: Story = {
  args: {
    type: "body",
    children: "This is a Body text",
  },
};

export const Small: Story = {
  args: {
    type: "small",
    children: "This is a Small text",
  },
};

export const Caption: Story = {
  args: {
    type: "caption",
    children: "This is a Caption text",
  },
};
