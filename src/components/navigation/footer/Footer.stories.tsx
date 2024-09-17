import { Meta, StoryObj } from "@storybook/react";

import {
  mockCompanyInfo,
  mockNavigation,
  mockSocialMediaProfiles,
} from "src/components/navigation/mockData";

import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Navigation/Footer",
  component: Footer,
  parameters: {
    a11y: {
      element: "footer",
      config: {},
      options: {},
      manual: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    navigationData: mockNavigation,
    companyInfo: mockCompanyInfo,
    soMeData: mockSocialMediaProfiles,
  },
};
