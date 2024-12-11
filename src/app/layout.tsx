import localFont from "next/font/local";
import { draftMode } from "next/headers";

import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";

import "src/styles/global.css";

const fontBrittiSans = localFont({
  src: "../../public/_assets/britti-sans-variable.woff2",
  variable: "--font-britti-sans",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={params.locale}>
      <body className={fontBrittiSans.variable}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
