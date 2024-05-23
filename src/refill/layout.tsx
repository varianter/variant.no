import Head from 'next/head';
import { and } from 'src/utils/css';
import style from './refill.module.css';

import { PropsWithChildren } from 'react';
import Link from 'next/link';

export default function RefillLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className={style.layout}>
      <Head>
        <title>Refill - Variant</title>
        <link rel="icon" href="/refill/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content="Refill" key="og:title" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:url"
          content="https://www.variant.no/refill"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/refill/og.jpg"
          key="og:image"
        />
      </Head>

      <main className={and(style.main)}>{children}</main>

      <Link href="/" className={style.backLink}>
        ← variant.no
      </Link>
    </div>
  );
}
