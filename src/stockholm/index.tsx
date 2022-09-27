import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BlobLink from 'src/components/blob-link';
import JobListingItem from 'src/jobs/list-item';
import Layout from 'src/layout';
import style from './stockholm.module.css';
import { getStaticProps } from 'pages/stockholm';
import Link from 'next/link';
import Arrow from 'src/components/arrow';
import { and } from 'src/utils/css';
import { EmployeeTile } from 'src/employees';

const bergenBlobUrl = require('./assets/bergen.png');
const timelineUrl = require('./assets/timeline.svg');
const blobmapUrl = require('./assets/blobmap.svg');
const mapUrl = require('../../public/illustrations/map-norway-sweeden.png');

export function BergenInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={bergenBlobUrl}
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

const Stockholm: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  listings,
  employees,
}) => {
  const [firstEmployee, secondEmployee] = employees;

  return (
    <Layout>
      <div>
        <Head>
          <title>En ny Variant i Bergen</title>
          <meta
            property="og:url"
            content={'https://www.variant.no/stockholm'}
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
            content="https://www.variant.no/images/bergen_meta.png"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.bergenBlob}
              src={bergenBlobUrl}
              alt="Bryggen i Bergen"
            />

            <header className={style.intro}>
              <h2 className={style.title}>Hej, en ny Variant i Stockholm!</h2>
            </header>

            <p className="lead">
              I løpet av 2023 kommer et helt nytt konsulentselskap til Stockholm, 
              med et helt nytt tanke- og verdisett.
              Nå er vi klare for å finne CEO. Vil du være med å forme et
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
            <h3 className="fancy">Så, hvorfor Stockholm?</h3>

            <p className={and('lead', style.map__text__lead)}>
              Vår visjon er å bring tillit, åpenhet og likeverd til europeisk næringsliv. Vi startet i 
              Norge, og med med kontorer i Norges tre største byer, er Sverige og Stockholme det neste 
              naturlige steg. I tillegg, Stockholm  har et spennende marked og
              kunder, spennende fagmiljøer og studiesteder, og ikke minst
              spennende folk.
            </p>

    

            <img
              className={style.mapImage}
              src={mapUrl}
              alt="Kart over kontorer i Trondheim, Bergen og Oslo."
            />

            <p className={style.map__text__second}>
              Vi har lærte mye fra oppstarten i Norge som vi ønsker å ta med oss
              østover. Vi er opptatt av perspektiver og mangfold, og vi er sikre på at Stockholm 
              vil bidra superpositivt inn i det som begynner å bli et stort
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
              text="Les våre Stockholms- scenarioer"
              href="stockholm/vyer"
              size={220}
              className={style.timelineButton}
            />

            <p className={style.timelineText}>
              Vi vet hvor vi vil, og vi har så vidt kommet igang med Stockholmsarbeidet.  
              Vi har samlet noen scenarioer som skaper et bilde
              av hvor vi ønsker å være i 2026.
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
            {firstEmployee && <EmployeeTile employee={firstEmployee} />}
            {secondEmployee && <EmployeeTile employee={secondEmployee} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stockholm;
