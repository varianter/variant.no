import Head from 'next/head';
import { NextPage, InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages';
import Content from './Content';

const Summersplash2022: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
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
