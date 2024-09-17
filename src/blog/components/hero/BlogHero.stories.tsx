import { Meta, StoryObj } from "@storybook/react";

import BlogHero from "./BlogHero";

const meta: Meta<typeof BlogHero> = {
  title: "Blog/BlogHero",
  component: BlogHero,
  parameters: {
    a11y: {
      element: "ul",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlogHero>;

export const Default: Story = {
  args: {
    title: "Seriously good news",
    categories: [
      {
        _key: "all-posts-label",
        _type: "category",
        name: `All news`,
      },
      {
        _key: "releaseNotes",
        _type: "category",
        name: `Release Notes`,
      },
      {
        _key: "company",
        _type: "category",
        name: `Company`,
      },
      {
        _key: "customerCases",
        _type: "category",
        name: `Customer cases`,
      },
      {
        _key: "compliance",
        _type: "category",
        name: `Compliance`,
      },
    ],
    ariaLabel: "Seriously good news",
    tabListRef: null,
    selectedTabIndex: 0,
  },
};
