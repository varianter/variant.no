import { Meta, StoryObj } from "@storybook/react";

import { defaultLanguage } from "i18n/supportedLanguages";
import {
  mockLogo,
  mockNavigation,
  mockPathTranslations,
} from "src/components/navigation/mockData";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Navigation/Header",
  component: Header,
  parameters: {
    a11y: {
      // Optional: configure the a11y addon parameters for this story
      element: "header",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    navigation: mockNavigation,
    assets: mockLogo,
    currentLanguage: defaultLanguage?.id ?? "en",
    pathTranslations: mockPathTranslations,
  },
};
