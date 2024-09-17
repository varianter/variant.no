import type { Meta, StoryObj } from "@storybook/react";

import { LinkType } from "studio/lib/interfaces/navigation";

import CustomLink from "./CustomLink";

const meta: Meta<typeof CustomLink> = {
  title: "Components/Links/CustomLink",
  component: CustomLink,
  parameters: {
    a11y: {
      element: "a",
      config: {},
      options: {},
      manual: false,
    },
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["link", "headerLink", "footerLink"],
      },
    },
    link: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

const mockLink = {
  _key: "699dd3782bda",
  _type: "linkID",
  internalLink: {
    _ref: "5e2aeb44-3148-4591-b3b9-9ff628b95adb",
    _type: "reference",
  },
  linkTitle: "News",
  linkType: LinkType.Internal,
  newTab: false,
};

export const Link: Story = {
  args: {
    type: "link",
    link: mockLink,
  },
};

export const HeaderLink: Story = {
  args: {
    type: "headerLink",
    link: mockLink,
  },
};

export const FooterLink: Story = {
  args: {
    type: "footerLink",
    link: mockLink,
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#333" }],
    },
  },
};
