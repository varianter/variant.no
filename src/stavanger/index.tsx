import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BlobLink from 'src/components/blob-link';
import JobListingItem from 'src/jobs/list-item';
import Layout from 'src/layout';
import style from './stavanger.module.css';
import { getStaticProps } from 'pages/stavanger';
import Link from 'next/link';
import Arrow from 'src/components/arrow';
import { and } from 'src/utils/css';
import { EmployeeTile } from 'src/employees';

const stavangerBlobUrl = require('./assets/stavanger.png');
const timelineUrl = require('./assets/timeline.svg');
const blobmapUrl = require('./assets/blobmap.svg');
const mapUrl = require('./assets/map.png');

export function StavangerInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={stavangerBlobUrl}
        alt="Bryggen i Bergen"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/stavanger" className={style.infoBlock__link}>
          <span className={style.infoBlock__text}>Ny variant i Stavanger</span>
          <Arrow className={style.infoBlock__arrow} color="standard__white" />
        </Link>
      </h2>
    </div>
  );
}

const Stavanger: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>En ny Variant i Stavanger</title>
          <meta
            property="og:url"
            content={'https://www.variant.no/stavanger'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="En ny Variant i Stavanger. Vi ønsker at du skal utvikle Stavanger sammen med oss."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Dette har vi ventet lenge på. Vi ønsker at du skal utvikle Stavanger sammen med oss. Å etablere neste generasjon selskapskultur hvor medarbeideres potensiale utnyttes til det fulle med tillit og transparens."
            key="og:description"
          />
          <meta
            name="description"
            content="Dette har vi ventet lenge på. Vi ønsker at du skal utvikle Stavanger sammen med oss. Å etablere neste generasjon selskapskultur hvor medarbeideres potensiale utnyttes til det fulle med tillit og transparens."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.no/images/bergen_meta.png"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.stavangerBlob}
              src={stavangerBlobUrl}
              alt="Bryggen i Bergen"
            />

            <header className={style.intro}>
              <h2 className={style.title}>Hey, en ny Variant i Stavanger!</h2>
            </header>

            <p className="lead">
              På kort tid har vi sikret oss de aller første ansatte (hipp
              hurra!), vi har fått kontorer i kontorfellesskapet i Vaskerelven
              39, og nå er vi klare for flere folk. Vil du være med å forme et
              annerledes konsulentselskap?
            </p>
            <p>
              Les mer om oss og våre verdier i{' '}
              <a
                href="https://handbook.variant.no"
                title="Håndboken til Variant"
              >
                den åpne håndboken vår
              </a>
              .
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--map'],
            )}
          >
            <h3 className="fancy">Så, hvorfor Stavanger?</h3>

            <p className={and('lead', style.map__text__lead)}>
              Den korte oppsummeringen er; Bergen har et spennende marked og
              kunder, spennende fagmiljøer og studiesteder, og ikke minst
              spennende folk.
            </p>

            <p className={style.map__text__first}>
              Den litt lengre forklaringen er at siden Variant ble startet i
              2018 har vi hatt stor vekst. Variant-konseptet har blitt veldig
              godt mottatt og vi får også tilbakemeldinger på at vi har
              inspirert andre. Vi ønsker derfor å spre verdiene og tankesettene
              våre videre.
            </p>

            <img
              className={style.mapImage}
              src={mapUrl}
              alt="Kart over kontorer i Trondheim, Bergen og Oslo."
            />

            <p className={style.map__text__second}>
              Vi lærte mye fra oppstarten i Oslo som vi ønsker å ta med oss
              vestover. Det er vanskelig å ha gode diskusjoner mellom byer når
              man bare er to, og Bergen vil gi oss enda en stemme og nye
              perspektiver inn i det som begynner å bli et stort
              Variant-fellesskap.
            </p>

            <p className={style.map__text__third}>
              Om du ønsker å lese mer så kan du{' '}
              <a
                href="https://blog.variant.no/hallaisen-bergen-d88c7b976ef4"
                title="Hallaisen, Bergen!"
              >
                lese Odd Mortens bloggpost om hvorfor vi drar til Bergen
              </a>
              .
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--timeline'],
            )}
          >
            <h4 className="fancy">Reisen har startet og vi har en plan...</h4>

            <img
              src={timelineUrl}
              className={style.timeline}
              alt="Tidslinje som viser progresjon med 12 varianter i desember 2022."
            />

            <BlobLink
              text="Les våre Stavangersscenarioer"
              href="stavanger/vyer"
              size={220}
              className={style.timelineButton}
            />

            <p className={style.timelineText}>
              Vi vet hvor vi vil, og har allerede kommet godt i gang på
              Bergensreisen. Vi har samlet noen scenarioer som skaper et bilde
              av hvor vi ønsker å være i 2025, men om du fortsatt synes at det
              er litt lenge til så har{' '}
              <a
                href="https://blog.variant.no/nytt-%C3%A5r-nytt-kontor-og-endelig-ny-variantdag-d147bf855d22"
                rel="external noopner"
              >
                Andreas skrevet noen ord om den første måneden i Variant
              </a>
              .
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--blobmap'],
            )}
          >
            <h3 className="fancy">
              Vi skal bygge et miljø med fokus på tverrfaglighet
            </h3>

            {/* <p className={and('lead', style.blobmap__text__lead)}>
              Noe tekst om hvorfor og hva vi legger i dette. Noe tekst om
              hvorfor og hva vi legger i dette. Noe tekst om hvorfor og hva vi
              legger i dette. Noe tekst om hvorfor og hva vi legger i dette. Noe
              tekst om hvorfor og hva vi legger i dette. Noe tekst om hvorfor og
              hva vi legger i dette.
            </p> */}

            <img
              src={blobmapUrl}
              className={style.blobmap__image}
              alt="Fordeling Oslo, Bergen og Trondheim. Hvor Trondheim er størst og Oslo er større enn Bergen."
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

          <div className={and(style.content, style['content--block'])}>
            <p className={and('lead', 'fancy', style.footerLine)}>
              Er det noe du lurer på? Det enkleste er å ta en prat med oss hvis
              du er nysgjerrig (det liker vi!)!
            </p>
          </div>

          <div
            className={and(
              style.content,
              style['content--block'],
              style['content--employees'],
            )}
          >
            {employees.map((employee) => (
              <EmployeeTile key={employee.email} employee={employee} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stavanger;
