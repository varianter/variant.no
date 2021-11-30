import { colors } from '@variant/profile';
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BlobLink from 'src/components/blob-link';
import JobListingItem from 'src/jobs/list-item';
import Layout from 'src/layout';
import style from './bergen.module.css';
import { getStaticProps } from 'pages/bergen';
import Link from 'next/link';
import Arrow from 'src/components/arrow';

const bergen = require('./bergen-blob.png');

export function BergenInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={bergen}
        alt="Bryggen i Bergen"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/bergen">
          <a className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>Ny variant i Bergen</span>
            <Arrow className={style.infoBlock__arrow} color="standard__white" />
          </a>
        </Link>
      </h2>
    </div>
  );
}

const Bergen: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
}) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>En ny Variant i Bergen</title>
          <meta
            property="og:url"
            content={'https://www.variant.no/bergen'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="En ny Variant i Bergen. Vi ønsker at du skal utvikle Bergen sammen med oss."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Dette har vi ventet lenge på. Vi ønsker at du skal utvikle Bergen sammen med oss. Å etablere neste generasjon selskapskultur hvor medarbeideres potensiale utnyttes til det fulle med tillit og transparens."
            key="og:description"
          />
          <meta
            name="description"
            content="Dette har vi ventet lenge på. Vi ønsker at du skal utvikle Bergen sammen med oss. Å etablere neste generasjon selskapskultur hvor medarbeideres potensiale utnyttes til det fulle med tillit og transparens."
            key="description"
          />
          <meta
            property="og:image"
            content="http://localhost:3000/images/eg_ve_te_bergen.jpg"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <header className={style.intro}>
            <h2 className={style.title}>En ny Variant i Bergen</h2>
          </header>
          <div className={style.content}>
            <img
              className={style.bergenBlob}
              src={bergen}
              alt="Bryggen i Bergen"
            />
            <p>
              Dette har vi ventet lenge på. Vi ønsker at du skal utvikle Bergen
              sammen med oss. Å etablere neste generasjon selskapskultur hvor
              medarbeideres potensiale utnyttes til det fulle med tillit og
              transparens. En kultur som bygger på gjensidig raushet, åpenhet og
              læreglede. Dette er gode verdier som{' '}
              <a
                href="https://handbook.variant.no"
                title="Håndboken til Variant"
              >
                du lese mer om i den åpne håndboken vår
              </a>
              .
            </p>
            <p>
              Her har vi samlet all informasjon om våre ambisjoner i Bergen. Odd
              Morten har også tidligere skrevet en bloggpost om{' '}
              <a
                href="https://blog.variant.no/hallaisen-bergen-d88c7b976ef4"
                title="Hallaisen, Bergen!"
              >
                hvorfor vi etablerer oss i en av Norges vakreste byer
              </a>
              . Vi anbefaler også at du leser om våre{' '}
              <Link href="bergen/vyer">
                <a>Bergensvyer</a>
              </Link>{' '}
              og{' '}
              <Link href="bergen/verdiutvikling">
                <a>verdiutvikling til Variant Bergen AS</a>
              </Link>
              .
            </p>
          </div>

          <div className={style.buttonGroup}>
            <BlobLink
              text="Se Bergensvyer"
              href="bergen/vyer"
              size={400}
              className={style.buttonGroup__first}
            />
            <BlobLink
              text="Les om verdiutvikling"
              href="bergen/verdiutvikling"
              size={400}
              className={style.buttonGroup__second}
              background={colors.colorPairs.primary.default.bg}
            />
          </div>

          {listings.length > 0 && (
            <div className={style.content}>
              <h3 className="fancy">Høres det interessant ut?</h3>

              {listings.map((item) => (
                <JobListingItem
                  item={item}
                  key={`${item.name}_${item.title}_${item.location}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Bergen;
