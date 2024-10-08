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
        <meta
          property="og:title"
          content="Hallaien! Vil du utvikle Stavanger?"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Her har vi skrevet litt om våre tanker om å bygge Variant i Stavanger. Nå er vi spente på hva du tenker."
          key="og:description"
        />
        <meta
          name="description"
          content="Her har vi skrevet litt om våre tanker om å bygge Variant i Stavanger. Nå er vi spente på hva du tenker."
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.variant.no/stavanger/vyer"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/images/og-variant-stavanger.jpg"
        />
      </Head>

      {children}
    </main>
  );
}
