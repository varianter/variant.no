import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import {
  mockNavigation,
  mockSocialMediaProfiles,
  mockCompanyInfo,
} from "../mockData";

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
