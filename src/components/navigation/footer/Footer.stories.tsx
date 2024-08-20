import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import {
  mockNavigation,
  mockSocialMediaProfiles,
  mockSiteSettings,
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
    siteSettings: mockSiteSettings,
    soMeData: mockSocialMediaProfiles,
  },
};
