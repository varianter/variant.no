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

const stockholmBlobUrl = require('./assets/stockholm.png');
const timelineUrl = require('./assets/RoadmapStockholm.png');
const mapUrl = require('../../public/illustrations/map-norway-sweeden.png');

export function StockholmInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={stockholmBlobUrl}
        alt="Bryggen i Bergen"
      />

      <h2 className={style.infoBlock__title}>
        <Link href="/stockholm">
          <a className={style.infoBlock__link}>
            <span className={style.infoBlock__text}>Ny variant i Stockholm</span>
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
          <title>En ny Variant i Stockholm</title>
          <meta
            property="og:url"
            content={'https://www.variant.no/stockholm'}
            key="og:url"
          />
          <meta
            property="og:title"
            content="En ny variant i Stockholm. Vi vill att du ska utveckla Stockholm tillsammans med oss."
            key="og:title"
          />
          <meta
            property="og:description"
            content="Vi har väntat länge på detta. Vi vill att du ska utveckla Stockholm tillsammans med oss. Att etablera nästa generations företagskultur där medarbetarnas potential utnyttjas till fullo med tillit och transparens."
            key="og:description"
          />
          <meta
            name="description"
            content="Vi har väntat länge på detta. Vi vill att du ska utveckla Stockholm tillsammans med oss. Att etablera nästa generations företagskultur där medarbetarnas potential utnyttjas till fullo med tillit och transparens."
            key="description"
          />
          <meta
            property="og:image"
            content="https://www.variant.no/images/stockholm_meta.png"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.stockholmBlob}
              src={stockholmBlobUrl}
              alt="Bryggen i Bergen"
            />

            <header className={style.intro}>
              <h2 className={style.title}>Hej, en ny Variant i Stockholm!</h2>
            </header>

            <p className="lead">
              Under 2023 kommer ett helt nytt konsultföretag till Stockholm,
              med ett helt nytt tänkesätt och värdegrund.
              Nu är vi redo att hitta en VD. Vill du vara med och forma ett 
              annorlunda konsultföretag?
            </p>
            <p>
            Läs mer om oss och våran värder i{' '}
              <a
                href="https://handbook.variant.no"
                title="Håndboken til Variant"
              >
                vår öppna handbok.
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
            <h3 className="fancy">Varför Stockholm?</h3>

            <p className={and('lead', style.map__text__lead)}>
              Vår vision är att skapa förtroende, transparens och jämlikhet till europeiska 
              företag. Vi började i Norge med kontor i Norges tre största städer. Sverige och 
              Stockholm är nu nästa naturliga steg.
            </p>

            <p className={and('first', style.map__text__first)}>
              Dessutom är Stockholm en spännande marknad 
              med spännande kunder, spännande kompetensmiljöer och studieorter och inte minst 
              spännande människor.
            </p>
    

            <img
              className={style.mapImage}
              src={mapUrl}
              alt="Karta över kontor i Trondheim, Bergen, Oslo och Stockholm."
            />

            <p className={style.map__text__second}>
              Vi har lärt oss mycket av uppstarten i Norge som vi vill ta med oss ​​österut. 
              Vi är måna om perspektiv och mångfald och vi är säkra på att Stockholm kommer att 
              ge ett superpositivt bidrag till det som börjar bli en stor Variantgemenskap.
            </p>

            <p className={style.map__text__third}>
              Vill du veta mer kan du {' '}
              <a
                href="https://blog.variant.no/hej-stockholm-ebf1309eb32a"
                title="hej, Stockholm!"
              >
                läsa Odd Mortens bloggpost om varför vi åker till Stockholm
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
            <h4 className="fancy">Arbetet har börjat och vi har en plan...</h4>

            <img
              src={timelineUrl}
              className={style.timeline}
              alt="Tidslinje som visar progression med 10 varianter i januari 2024."
            />

            <BlobLink
              text="Läs våra Stockholms- scenarier"
              href="stockholm/vyer"
              size={220}
              className={style.timelineButton}
            />

            <p className={style.timelineText}>
              Vi vet vart vi vill, och vi har precis påbörjat Stockholmsarbetet. 
              Vi har samlat några scenarier som skapar en bild av var vi vill vara 2026.
            </p>
          </div>


          {listings.length > 0 && (
            <div className={style.content}>
              <h3 className="fancy">Låter det intressant?</h3>

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
              Är det något du undrar över? Det enklaste är att ta en pratstund med oss ​​om du är nyfiken (det gillar vi!)!
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
