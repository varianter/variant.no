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
          "desktopLink",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "h7",
          "labelSmall",
          "labelLight",
          "labelRegular",
          "labelSemibold",
          "labelBold",
          "quoteItalic",
          "quoteNormal",
          "bodyExtraSmall",
          "bodySmall",
          "bodyNormal",
          "bodySmall",
          "bodyBig",
          "bodyXl",
          "mobileH1",
          "mobileBodyNormal",
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

export const DesktopLink: Story = {
  args: {
    type: "desktopLink",
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

export const H4: Story = {
  args: {
    type: "h4",
    children: "This is an H4 text",
  },
};

export const H5: Story = {
  args: {
    type: "h5",
    children: "This is an H5 text",
  },
};

export const H6: Story = {
  args: {
    type: "h6",
    children: "This is an H6 text",
  },
};

export const H7: Story = {
  args: {
    type: "h7",
    children: "This is an H7 text",
  },
};

export const LabelSmall: Story = {
  args: {
    type: "labelSmall",
    children: "This is a Label Small text",
  },
};

export const LabelLight: Story = {
  args: {
    type: "labelLight",
    children: "This is a Label Light text",
  },
};

export const LabelRegular: Story = {
  args: {
    type: "labelRegular",
    children: "This is a Label Regular text",
  },
};

export const LabelSemibold: Story = {
  args: {
    type: "labelSemibold",
    children: "This is a Label Semibold text",
  },
};

export const QuoteItalic: Story = {
  args: {
    type: "quoteItalic",
    children: "This is a Quote Italic text",
  },
};

export const QuoteNormal: Story = {
  args: {
    type: "quoteNormal",
    children: "This is a Quote Normal text",
  },
};

export const BodySmall: Story = {
  args: {
    type: "bodySmall",
    children: "This is a Small text",
  },
};

export const BodyNormal: Story = {
  args: {
    type: "bodyNormal",
    children: "This is a Body text",
  },
};

export const BodyBig: Story = {
  args: {
    type: "bodyBig",
    children: "This is a Body Super Large text",
  },
};

export const BodyXl: Story = {
  args: {
    type: "bodyXl",
    children: "This is a Body Large text",
  },
};

export const MobileH1: Story = {
  args: {
    type: "mobileH1",
    children: "This is a Mobile H1 text",
  },
};

export const MobileBodyNormal: Story = {
  args: {
    type: "mobileBodyNormal",
    children: "This is a Mobile Body text",
  },
};
