import React from 'react';
import { getStaticProps } from 'pages/prosjekter/svv';
import { NextPage, InferGetStaticPropsType } from 'next';
import Layout from 'src/layout';
import style from './index.module.css';
import Link from 'next/link';
import { Interview } from 'src/kunde/utils/customerUtils';

const Svv: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  React.memo(({ interviews }) => {
    return (
      <Layout title="Økt trafikksikkerhet og ...">
        {/* <SayHi
          className={style.sayhi}
          href="/jobs"
          rel="noopener"
          text="Bli en variant!"
        /> */}
        <section className={style.project}>
          <div className={style.project__introduction}>
            <h2>Statens Vegvesen</h2>
            <p className="lead">
              Statens vegvesen har vært en viktig samarbeidspartner siden
              Variant så sitt lys. I løpet av årene har flere av Variantene vært
              innom og jobbet i ulike prosjekter, og sammen med kunden levert
              løsninger som bidrar til at vi alle kan være tryggere på vegen.
            </p>
            <div className={style.project__introduction__location}>
              <p>
                <strong>Ansvarlig lokasjon</strong>
              </p>
              <div className={style.location}>
                <span>Bergen</span>
                <span>Oslo</span>
                <span>Trondheim</span>
              </div>
            </div>
          </div>
          <div className={style.project__subprojects}>
            <div className={style.subproject}>
              <figure className={style.imageContainer}>
                <div className={style.img__decorationBox}></div>
                <div className={style.img__decorationBox}></div>
                <img src="/images/prosjekt-svv-1.png" alt="case" />
              </figure>
              <div>
                <p className="lead">Trygge tunneler</p>
                <p>
                  I Norge har vi over 1100 tunneler som krever forvaltning og
                  vedlikehold. Sammen med Statens vegvesen har vi utviklet
                  løsninger som effektiviserer arbeidsprosessene rundt
                  inspeksjon og sikkerhetsgodkjenning av tunneler i henhold til
                  gjeldende lov og regelverk.{' '}
                </p>
              </div>
            </div>

            <div className={style.subproject}>
              <div>
                <p className="lead">Økt trafikksikkerhet (Andreas)</p>
                <p>
                  Tekst om prosjekt her. Kan f.eks. være superkort om selve
                  prosjektet, mål, gevinster, etc. Eller mer utdypende, f.eks.
                  under accordion eller egen side? Evt. endre tekststørrelse på
                  «Prosjekt 2», og dele opp i flere avsnitt for om prosjektet,
                  gevinst, impact, osvosv
                </p>
              </div>
              <figure className={style.imageContainer}>
                <div className={style.img__decorationBox}></div>
                <div className={style.img__decorationBox}></div>
                <img src="/images/prosjekt-svv-2.png" alt="case" />
              </figure>
            </div>

            <div className={style.subproject}>
              <figure className={style.imageContainer}>
                <div className={style.img__decorationBox}></div>
                <div className={style.img__decorationBox}></div>
                <img src="/images/prosjekt-svv-3.png" alt="case" />
              </figure>
              <div>
                <p className="lead">Prosjekt 3 Malin</p>
                <p>
                  Tekst om SVV som kunde her. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. In congue malesuada erat, vitae
                  feugiat mi eleifend sed. In dictum, quam ut consectetur
                  bibendum, neque libero eleifend orci, eget tempor tortor quam
                  ac massa. Donec non bibendum ligula. Duis vehicula turpis non
                  arcu porttitor ullamcorper. Suspendisse potenti. Mauris
                  imperdiet erat libero, at bibendum erat hendrerit eget.
                  Praesent laoreet eu tortor eget sodales. Aliquam vulputate
                  sagittis consectetur. Vivamus gravida magna sed efficitur
                  posuere. Praesent eget ipsum arcu.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={style.textCenter}>Variantenes egne ord</h2>
            <div className={style.project__interviews}>
              {interviews?.map((interview: Interview, idx) => {
                return (
                  <div key={idx} className={style.project__interview}>
                    <p className={style.textCenter}>
                      <strong>{interview.variant}</strong>
                    </p>
                    <p className={style.textCenter}>{interview.variantTitle}</p>
                    <img src={interview.image} alt={interview.imageAltText} />
                    <p>{interview.quote}</p>
                    <Link href={`/intervju/${interview.name}`}>
                      <a className={style.buttonLink}>
                        <strong>Les mer</strong>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.contribution}>
            <h2 className={style.textCenter}>Vårt bidrag</h2>
            <div>
              <div className={style.contributionElements}>
                <p>
                  En setning eller to for å oppsummere her. I høyremargen:
                  Vinkle opp mot tjenesteområder, få frem helheten av det som
                  leveres.
                </p>
                <img src="/images/tjenestefjell.png" alt="Tjenestefjell" />
              </div>

              <div className={style.contributionElements}>
                <div>
                  <p>
                    <strong>Digital produktutvikling</strong>
                  </p>
                  <p>
                    Skriv noe om hva vi har bidratt med innenfor dette
                    tjenesteområdet.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Datadrevet</strong>
                  </p>
                  <p>
                    Skriv noe om hva vi har bidratt med innenfor dette
                    tjenesteområdet.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Strategi</strong>
                  </p>
                  <p>
                    Skriv noe om hva vi har bidratt med innenfor dette
                    tjenesteområdet.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Culture first</strong>
                  </p>
                  <p>
                    Skriv noe om hva vi har bidratt med innenfor dette
                    tjenesteområdet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.quote}>
            <blockquote>
              Statens Vegvesen har vært en trygg og god start for en fersk
              konsulent. Det har vært verdifullt å se at min erfaring og
              kunnskap har blitt verdsatt og ønsket.
            </blockquote>
          </div>
        </section>
      </Layout>
    );
  });

export default Svv;
