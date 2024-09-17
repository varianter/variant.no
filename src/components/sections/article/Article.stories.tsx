import { Meta, StoryObj } from "@storybook/react";

import Article from "./Article";
import {
  articleLeftMock,
  articleRightMock,
  extendedArticleLargeLeftMock,
  extendedArticleLargeRightMock,
} from "./mockData";

const meta: Meta<typeof Article> = {
  title: "Components/Sections/Article",
  component: Article,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "article",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

// DEFAULT
export const DefaultWithImageAlignedRight: Story = {
  args: {
    article: articleLeftMock,
  },
};

export const DefaultWithImageAlignedLeft: Story = {
  args: {
    article: articleRightMock,
  },
};

// EXTENDED
export const ExtendedWithImageAlignedRight: Story = {
  args: {
    article: extendedArticleLargeRightMock,
  },
};

export const ExtendedWithImageAlignedLeft: Story = {
  args: {
    article: extendedArticleLargeLeftMock,
  },
};
