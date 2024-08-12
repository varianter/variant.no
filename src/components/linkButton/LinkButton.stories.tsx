import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "./LinkButton";
import { LinkType } from "studio/lib/payloads/navigation";

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
        options: ["large", "small"],
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
    size: "large",
    type: "primary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Primary Large Button",
      internalLink: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const PrimarySmall: Story = {
  args: {
    size: "small",
    type: "primary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Primary Small Button",
      internalLink: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const SecondaryLarge: Story = {
  args: {
    size: "large",
    type: "secondary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Secondary Large Button",
      internalLink: "/about",
      linkType: LinkType.Internal,
    },
  },
};

export const SecondarySmall: Story = {
  args: {
    size: "small",
    type: "secondary",
    link: {
      _key: "key",
      _type: "link",
      linkTitle: "Secondary Small Button",
      internalLink: "/about",
      linkType: LinkType.Internal,
    },
  },
};
