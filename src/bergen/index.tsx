import { colors } from '@variant/profile';
import Head from 'next/head';
import BlobLink from 'src/components/blob-link';
import Layout from 'src/layout';
import style from './bergen.module.css';

const bergen = require('./bergen-blob.png');

export default function VariantTur() {
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
              alt="Bilde av bane til Bergen Lufthavn av Jørgen Håland fra Unsplash"
            />
            <p>
              En god del av kompensasjonen som leder i Variant er knyttet til
              verdiutvikling av selskapet og avkastning på aksjer. Begge disse
              momentene er relatert til vekst. Vi er ambisiøse på Bergens vegne.
              Variants egenart bygger på at en relativt stor gruppe flinke
              mennesker sammen utfordrer hverandre og bygger på hverandre. Dette
              er et selskap som våger å vokse fort. Vi har en modell for
              bærekraftig vekst, og et realistisk mål om å bygge et fagmiljø med
              30 dyktige varianter på 3 år.
            </p>

            <p>
              Tabellen under beskriver våre vekstmål de neste årene. Dette er
              altså de mål vi sikter mot og som vil kunne gi en pekepinn på hva
              avkastning på dine aksjer og verdiutvikling av din eierandel.
            </p>

            <p>
              Vi er ambisiøse og søker deg som også har lyst til å oppnå noe.
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
        </div>
      </div>
    </Layout>
  );
}
