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
            <Arrow className={style.infoBlock__arrow} color="standard__black" />
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

            <p>Her har vi en introtekst som kommer en gang.</p>

            <p>
              It's ends here. Does it come in black? I'm Batman Swear to me! No
              guns, no killing. I seek the means to fight injustice. To turn
              fear against those who prey on the fearful. I'm not wearing hockey
              pads. Accomplice? I'm gonna tell them the whole thing was your
              idea. I will go back to Gotham and I will fight men Iike this but
              I will not become an executioner.
            </p>

            <p>
              This isn't a car. Bats frighten me. It's time my enemies shared my
              dread. Swear to me! Swear to me! My anger outweights my guilt.
              Well, you see... I'm buying this hotel and setting some new rules
              about the pool area. I'm Batman Does it come in black?
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
