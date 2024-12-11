import type { Meta, StoryObj } from "@storybook/react";

import { LinkType } from "studio/lib/interfaces/navigation";

import LinkButton from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "Components/Links/LinkButton",
  component: LinkButton,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "a",
      config: {},
      options: {},
      manual: false,
    },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["XL", "L", "M", "S"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    link: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const PrimaryLarge: Story = {
  args: {
    size: "XL",
    type: "primary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Primary Large Button",
      url: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const PrimarySmall: Story = {
  args: {
    size: "S",
    type: "primary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Primary Small Button",
      url: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const SecondaryLarge: Story = {
  args: {
    size: "XL",
    type: "secondary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Secondary Large Button",
      url: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const SecondarySmall: Story = {
  args: {
    size: "S",
    type: "secondary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Secondary Small Button",
      url: "/about",
      linkType: LinkType.Internal,
    },
  },
};
