import Head from 'next/head';
import Layout from 'src/layout';
import style from './oslo.module.css';

const barcode = require('./barcode.png');

export default function VariantTur() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Verdiutvikling Variant Oslo AS</title>
        </Head>
        <div className={style.wrapper}>
          <header className={style.intro}>
            <h2 className={style.title}>
              Verdiutvikling
              <br />
              Variant Oslo AS
            </h2>
          </header>
          <div className={style.content}>
            <img
              className={style.barcode}
              src={barcode}
              alt="Barcode by Jacek Dylag on Unsplash"
            />
            <p>
              En god del av kompensasjonen som leder i Variant er knyttet til
              verdiutvikling av selskapet og avkastning på aksjer. Begge disse
              momentene er relatert til vekst. Vi er ambisiøse på Oslos vegne.
              Variants egenart bygger på at en relativt stor gruppe flinke
              mennesker sammen utfordrer hverandre og bygger på hverandre. Dette
              er et selskap som våger å vokse fort. Vi har en modell for
              bærekraftig vekst, og et realistisk mål om å bygge et fagmiljø med
              40 dyktige varianter på 3 år.
            </p>

            <p>
              Tabellen under beskriver våre vekstmål de neste årene. Dette er
              altså de mål vi sikter mot og som vil kunne gi en pekepinn på hva
              avkastning på dine aksjer og verdiutvikling av din eierandel.
            </p>

            <div className={style.tableContainer}>
              <table className={style.forecast} cellSpacing={0} cellPadding={0}>
                <thead>
                  <tr>
                    <th></th>
                    <th className={style.forecast_heading}>2021</th>
                    <th className={style.forecast_heading}>2022</th>
                    <th className={style.forecast_heading}>2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ansatte per 31.12 </td>
                    <td className={style.number}>6 varianter</td>
                    <td className={style.number}>20 varianter</td>
                    <td className={style.number}>40 varianter</td>
                  </tr>
                  <tr>
                    <td>Lønn daglig leder (kr)</td>
                    <td className={style.number}>1 100 000</td>
                    <td className={style.number}>1 300 000</td>
                    <td className={style.number}>1 500 000</td>
                  </tr>
                  <tr>
                    <td>Omsetning (i 1000 kr)</td>
                    <td className={style.number}>3 200</td>
                    <td className={style.number}>25 000</td>
                    <td className={style.number}>60 000</td>
                  </tr>
                  <tr>
                    <td>Resultat før skatt (i 1000 kr)</td>
                    <td className={style.number}>191</td>
                    <td className={style.number}>3 800</td>
                    <td className={style.number}>7 200</td>
                  </tr>
                  <tr>
                    <td>Totalt utbytte for selskapet (i 1000 kr)</td>
                    <td className={style.number}>100</td>
                    <td className={style.number}>2 600</td>
                    <td className={style.number}>5 100</td>
                  </tr>
                  <tr>
                    <td>Selskapets totale verdiutvikling (i 1000 kr)</td>
                    <td className={style.number}>8 000</td>
                    <td className={style.number}>30 000</td>
                    <td className={style.number}>75 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Vi er ambisiøse og søker deg som også har lyst til å oppnå noe.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
