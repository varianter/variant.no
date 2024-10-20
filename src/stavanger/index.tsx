import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import JobListingItem from 'src/jobs/list-item';
import Layout from 'src/layout';
import style from './stavanger.module.css';
import { getStaticProps } from 'pages/stavanger';
import Link from 'next/link';
import Arrow from 'src/components/arrow';
import { and } from 'src/utils/css';
import { EmployeeTile } from 'src/employees';
import BlobLink from '@components/blob-link';

const stavangerBlobUrl = require('./assets/stavanger.png');
const bygningUrl = require('./assets/finkel.png');

export function StavangerInfoBlock() {
  return (
    <div className={style.infoBlock}>
      <img
        className={style.infoBlock__blob}
        src={stavangerBlobUrl}
        alt="Breiavatnet i natten"
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
            content="https://www.variant.no/images/og-variant-stavanger.jpg"
            key="og:image"
          />
        </Head>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img
              className={style.stavangerBlob}
              src={stavangerBlobUrl}
              alt="Breiavatnet i natten"
            />

            <header className={style.intro}>
              <h2 className={style.title}>Hey, en ny Variant i Stavanger!</h2>
            </header>

            <p className="lead">
              I løpet av høsten og vinteren skal vi etablere oss i vakre
              Stavanger. Da trenger vi folk, dyktige folk, mye folk! Vil du være
              med å forme et annerledes konsulentselskap?
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

            <div className={style.contentNarrow}>
              <p>
                Den korte oppsummeringen er; Stavanger har et spesielt viktig
                marked i landet og mange spennende kunder. I tillegg spennende
                fagmiljøer og studiesteder, og ikke minst spennende folk.
              </p>

              <p>
                Den litt lengre forklaringen er at siden Variant ble startet i
                2018 har vi hatt stor vekst. Variant-konseptet har blitt veldig
                godt mottatt og vi får også tilbakemeldinger på at vi har
                inspirert andre. Vi ønsker derfor å spre verdiene og
                tankesettene våre videre. Bærekraft har vært viktig for oss
                siden -, for alltid egentlig. Vi mener at i akkurat i Stavanger
                kan vi jobbe med bærekraftsutfordinger som faktisk betyr noe.
              </p>
            </div>

            <div className={style.contentSplit}>
              <img src={bygningUrl} alt="Hus i Stavanger sentrum" />

              <div>
                <p>
                  Vi lærte mye fra oppstarten i Oslo og Bergen som vi ønsker å
                  ta med oss sør-vestover. Jo flere selskaper vi har, jo flere
                  stemmer får vi inn på vårt bord. Dette skaper bedre
                  perpektiver og bedre beslutninger. Stavanger vil gi oss enda
                  en stemme og nye perspektiver inn i det som begynner å bli et
                  stort Variant-fellesskap.
                </p>

                <p>
                  Om du ønsker å lese mer så kan du{' '}
                  <a
                    href="https://blog.variant.no/kor-e-det-stavanger-a0c519d1e7f2"
                    title="Kor e det, Stavanger?"
                  >
                    lese Odd Mortens bloggpost om hvorfor vi drar til Stavanger
                  </a>
                  .
                </p>
              </div>
            </div>

            <div
              className={and(
                style.contentNarrow,
                style['contentNarrow--marginTop'],
              )}
            >
              <h3 className={and('fancy')}>Bærekraft</h3>
              <p>
                Det vi skal opprette i Stavanger vil minne om de selskapene vi
                har i Trondheim, Oslo og Bergen, men dette selskapet vil ha en
                enda tydeligere bærekraftsprofil. Og da tenker vi i første rekke
                på hvordan vi skal bidra hos kunder som jobber med virkelig
                viktige og vanskelige bærekraftsspørsmål.
              </p>

              <p>
                Konkret handler dette blant annet om å delta i prosjekter som
                reduserer karbonutslipp, bidrar til økt bruk av fornybar energi
                og bærekraftig matforskyning. Dette må vi gjøre sammen med våre
                kunder. Vi er sikre på at vår plattform, våre verdier, vår
                kultur og vår kompetanse er nødvendig for å lykkes med slike
                problemstillinger.
              </p>
            </div>

            <BlobLink
              text="Les om våre vyer for Stavanger"
              href="stavanger/vyer"
              size={220}
              className={style.timelineButton}
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
              <EmployeeTile
                key={employee.email}
                alwaysEmail
                subtitle={mailToTitle(employee.email)}
                employee={employee}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

/**
 * Hacky workaround to get title quickly for stavanger.
 * New web page incoming: "flytta læll™"
 * @param mail string
 * @returns string
 */
function mailToTitle(mail: string) {
  if (mail.startsWith('mb@')) {
    return 'CTO';
  }
  if (mail.startsWith('te@')) {
    return 'CDO';
  }
  if (mail.startsWith('ah@')) {
    return 'Kommersiell direktør';
  }
  if (mail.startsWith('oms@')) {
    return 'Konserndirektør';
  }

  return undefined;
}

export default Stavanger;
