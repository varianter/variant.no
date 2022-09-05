import Head from 'next/head';
import Content from './Content';

const Summersplash2022 = () => {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={'https://www.variant.no/jobs/'}
          key="og:image"
        />
      </Head>

      {/* 
      <section>
        <Link href="/sommerjobb">
          <a>sommerjobb</a>
        </Link>
        <Link href="/nyutdannet">
          <a>nyutdannet</a>
        </Link>
      </section> */}
      <>
        <Content />
      </>
    </>
  );
};

export default Summersplash2022;
