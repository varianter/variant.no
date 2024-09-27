import React from "react";
import type { Preview } from "@storybook/react";
import { Figtree } from "next/font/google";
import "../src/styles/global.css";
import localFont from "next/font/local";

const fontRecoleta = localFont({
  src: "../../public/_assets/recoleta.otf",
  variable: "--font-recoleta",
});

const fontFigtree = Figtree({
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
        <div className={`${fontFigtree.variable} ${fontRecoleta.variable}`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
