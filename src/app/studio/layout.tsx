import { draftMode } from "next/headers";

import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";

import "src/styles/global.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
