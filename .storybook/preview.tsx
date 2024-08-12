import React from "react";
import type { Preview } from "@storybook/react";
import { Darker_Grotesque, Figtree } from "next/font/google";
import "../src/styles/global.css";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darkerGrotesque",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-figtree",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        type: "code",
      },
    },
    a11y: {
      element: "#root",
      config: {},
      options: {},
      manual: false,
    },
  },
  decorators: [
    (Story) => {
      if (typeof window !== "undefined") {
        (window as any).STORYBOOK_ENV = "storybook";
      }

      return (
        <div className={`${figtree.variable} ${darkerGrotesque.variable}`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
