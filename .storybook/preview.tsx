import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/global.css";
import localFont from "next/font/local";

const fontBrittiSans = localFont({
  src: "../../public/fonts/britti-sans-variable.woff2",
  variable: "--font-britti-sans",
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
        <div className={fontBrittiSans.variable}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
