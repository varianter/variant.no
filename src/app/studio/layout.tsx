import { draftMode } from "next/headers";

import LiveVisualEditing from "studio/lib/loaders/AutomaticVisualEditing";

import "src/styles/global.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Override padding from global.css. Hackish but just for studio, as the padding is annoying */}
      <body style={{ padding: "0 !important" }}>
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
