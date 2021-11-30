import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const favicon = require('@variant/profile/lib/logo/favicon.png');

type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

export default function Layout({ children, title = 'Variant' }: LayoutProps) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.variant.no/bergen/vyer" />
        <meta
          property="og:image"
          content="https://www.variant.no/og-header-min.png"
        />
      </Head>

      {children}
    </main>
  );
}
