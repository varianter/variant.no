import React from 'react';
import style from './index.module.css';
import Link from 'next/link';

import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile';
import { and } from 'src/utils/css';

interface ContentProps {
  mode: 'job' | 'internship';
}

export default function ContentComponent({ mode }: ContentProps) {
  return (
    <>
      <section
        key={0}
        className={and(style.firstSection, 'color-scroll-section')}
        data-background-color={'#FAD2E2'}
      >
        {mode === 'internship' && (
          <section className={style.mainTitleSection}>
            <span>Søk senest 3. oktober</span>
            <h1 className={style.job_title}>
              Er du en av våre 10 sommervarianter i 2022?
            </h1>
            <img
              className={style.arrow}
              aria-label="Pil som forklarer at Variant i 2022 tilbyr sommerjobb både i Trondheim og Oslo"
              src={require('./images/pil.svg')}
            />
            <h4>
              Enten i Trondheim eller Oslo!{' '}
              <span aria-label="konfetti-emoji">🎉</span>
            </h4>
          </section>
        )}

        {mode === 'job' && (
          <section className={style.mainTitleSection}>
            <span>Søk senest 3. oktober</span>
            <h1 className={style.job_title}>
              Er du en av våre fire nye varianter?
            </h1>
            <img
              className={style.arrow}
              aria-label="Pil som forklarer at Variant i 2022 tilbyr fast jobb både i Trondheim og Oslo"
              src={require('./images/pil.svg')}
            />
            <h4>
              Kontorer i både Trondheim og Oslo!{' '}
              <span aria-label="konfetti-emoji">🎉</span>
            </h4>
          </section>
        )}

        <div className={style.imageBlob}>
          <BaseBlob
            seed="Variant"
            width={500}
            height={500}
            color={colors.colorPairs.secondary3.default.bg}
            imageProps={{ src: require('./images/sommerjobbere2020.jpg') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
      </section>

      <section
        key={1}
        className={and(style.secondSection, 'color-scroll-section')}
        data-background-color={'#423D89'}
      >
        <section className={style.leftText}>
          <h3>Hva går sommerjobben ut på?</h3>
          <div>
            <p>
              En sommerjobb i Variant passer for deg som har lyst å anvende
              læring fra studiene i praksis. Hos oss vil du jobbe i et
              tverrfaglig team sammen med andre utviklere og designere der målet
              er å løse et reelt oppdrag for en av våre kunder.
            </p>

            <p>
              Du trenger ikke å være spesialist for å få sommerjobb hos oss, men
              du bør ha et ønske om å lære mens du er her. Gjennom sommeren vil
              sommerstudentene få god oppfølging fra erfarne konsulenter som vil
              at du skal lykkes, og for å sikre dette har sommerstudentene våre
              ferie i fellesferien.
            </p>

            <p>
              Variant har sentrale lokaler i{' '}
              <a
                target="blank"
                rel="noopener"
                href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
              >
                Varianthuset i Trondheim sentrum
              </a>{' '}
              og{' '}
              <a
                target="blank"
                rel="noopener"
                href="https://www.google.com/maps/place/Spaces+-+Spaces+Oslo+Kvadraturen/@59.9096596,10.7460537,18z/data=!4m5!3m4!1s0x46416e89a671fbe3:0x278831a2eb8f70ea!8m2!3d59.9097229!4d10.7467068"
              >
                Kvadraturen i Oslo.
              </a>
            </p>
          </div>
        </section>

        <div className={style.rightText}>
          <BaseBlob
            seed="Variant"
            width={500}
            height={500}
            color={colors.colorPairs.secondary2.default.bg}
            imageProps={{ src: require('./images/sommerjobbere2020.jpg') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />

          <p>
            Prosjektet varer i fire + to uker med tre uker ferie i mellomtiden,
            og vil gi god innsikt i hva det vil si å jobbe i konsulentbransjen.
            Du kommer til å lære masse nyttig, samtidig som du har det gøy med
            de andre variantene.{' '}
          </p>
        </div>
      </section>

      <section
        key={2}
        className={and(style.thirdSection, 'color-scroll-section')}
        data-background-color={'#F4F1E7'}
      >
        <section className={style.leftText}>
          <h3>Hvorfor jobbe i Variant?</h3>

          <div>
            <p>
              Variant er en variant av et konsulentselskap som er raus, åpen og
              læreglad.
            </p>

            <p>
              En sommerjobb i Variant er en god arena for personlig utvikling,
              både faglig og sosialt. og vi mener at en sommer hos oss vil gjøre
              deg bedre rustet både for resterende tid på skolebenken, men også
              senere i arbeidslivet.
            </p>

            <p>
              Håndboka vår beskriver hvem vi er og hva vi står for. I Variant
              trenger du ikke lure på hvordan{' '}
              <a href="https://avtaler.variant.no/avtaler/ansettelse-sommerjobb.html">
                kontrakten
              </a>{' '}
              din vil se ut dersom du skulle få tilbud om sommerjobb, den ligger
              selvsagt åpent tilgjengelig på våre nettsider.
            </p>

            <p>
              Til tross for en litt uforutsigbar periode så har vi satt opp en
              plan for både hvordan vi ønsker å ivareta dere faglig, men også
              for å bli bedre kjent med hverandre.
            </p>
          </div>
        </section>

        <section className={style.rightText}>
          <div className={style.handbookAd}>
            <h4>Sjekk ut håndboka vår?</h4>

            <img
              className={style.handbookArrow}
              aria-label="Pil til Variant sin håndbok"
              src={require('./images/pil.svg')}
            />

            <a href="https://handbook.variant.no/" target="blank">
              <BaseBlob
                seed="Variant"
                width={500}
                height={500}
                color={colors.colorPairs.secondary2.default.bg}
                imageProps={{
                  src: require('./images/sommerjobbere2020.jpg'),
                }}
                alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
              />
            </a>
          </div>
        </section>
      </section>

      <section
        key={3}
        className={and(style.fourthSection, 'color-scroll-section')}
        data-background-color={'#028377'}
      >
        <h3>Hva skjer etter søknadsfristen?</h3>
        <section className={style.leftText}>
          <div>
            <p>
              Vi i Variant liker ikke tradisjonelle intervjuer. De plasserer
              søker i en unaturlig situasjon, og man blir ikke godt nok kjent
              med hverandre. Etter at vi har sett igjennom alle søknadene
              inviterer vi derfor alle utvalgte kandidater til en uformell
              samtale. Dette er det vi kaller kaffeprat. Hensikten med samtalen
              er for å finne ut om begge parter har felles verdier og mål. Og
              nei, du er selvsagt ikke nødt til å drikke kaffe.
            </p>

            <p>
              Dersom du får jobbtilbud og takker ja, inkluderes du straks i
              Variant på lik linje med de fast ansatte. Du får tilgang til
              Slack´en vår, og mulighet til å delta på alle sosiale og faglige
              arrangementer. Dette inkluderer blant annet spill- og fagkvelder,
              nyttårskalas og variantdager, som er fine muligheter til å bli
              bedre kjent før sommerjobben starter i juni.
            </p>
          </div>
        </section>

        <div className={style.imageBlob}>
          <BaseBlob seed="Variant" width={500} height={500} color={'#534DAC'} />
        </div>

        <section className={style.timelineContainer}>
          <div className={style.timelineEvent}>
            <h4>Søknadsfrist</h4>
            <h5>3. oktober</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Kaffeprat med utvalgte kandidater</h4>
            <h5>6. - 7. oktober</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Tilbud om sommerjobb</h4>
            <h5>8. oktober</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Mulighet for å delta på alle sosiale arrangementer</h4>
            <h5>november - juni</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Første arbeidsperiode</h4>
            <h5>13. juni - 8. juli (4 uker)</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Fellesferie</h4>
            <h5>11. - 29. juli (3 uker)</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Andre arbeidsperiode</h4>
            <h5>1. - 12. august (2 uker)</h5>
          </div>

          <div className={style.timelineEvent}>
            <h4>Tilbud om fast ansettelse?</h4>
          </div>
        </section>
      </section>

      <section
        key={4}
        className={and(style.fifthSection, 'color-scroll-section')}
        data-background-color={'#FFDCD7'}
      >
        <section className={style.rightText}>
          <h3>Hva ser vi etter i en søknad?</h3>

          <p>
            Selv om vi liker å skille oss ut, setter vi pris på en søknad med
            CV, søknadsbrev og karakterutskrift. Det viktigste for oss er å få
            et helhetlig bilde. Både av deg som person, din eksisterende
            kompetanse og dine ambisjoner. Så hvem er du, og hvorfor søker du
            sommerjobb i Variant? Vi trenger mennesker som bryr seg om å skape
            en bedre hverdag. Er det deg?
          </p>
        </section>

        <section className={style.leftText}>
          <div className={style.applyArrow}>
            <h4>Du kan søke på neste side!</h4>
            <img
              className={and(style.arrow, style.upsideDown)}
              aria-label="Pil som viser at du kan søke lenger nede på siden"
              src={require('./images/pil.svg')}
            />
          </div>
        </section>

        <div className={style.imageBlob}>
          <BaseBlob
            seed="Variant"
            width={500}
            height={500}
            color={colors.colorPairs.secondary2.default.bg}
            imageProps={{ src: require('public/images/marius.png') }}
            alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
          />
        </div>
      </section>

      <section
        key={5}
        className={and(style.sixtSection, 'color-scroll-section')}
        data-background-color={'#423D89'}
      >
        <section className={style.leftText}>
          <section className={style.applyLinksContainer}>
            <Link href="/jobs/utvikler-trondheim">
              <a className={style.applyLink}>
                <h3>
                  Søk som designer
                  <span role="img" aria-label="blyant">
                    ✏️
                  </span>
                </h3>
              </a>
            </Link>

            <Link href="/jobs/utvikler-trondheim">
              <a className={style.applyLink}>
                <h3>
                  Søk som utvikler
                  <span role="img" aria-label="datamaskin">
                    💻
                  </span>
                </h3>
              </a>
            </Link>
          </section>

          <div>
            <p>Vi håper du søker, og ser frem til å bli bedre kjent med deg.</p>
            <p>
              Har du spørsmål om sommerjobbene eller Variant? Ta gjerne kontakt
              med meg.
            </p>
            <p>
              - Marius Krakeli, utvikler og rekrutteringsansvarlig i Variant
            </p>
            <p>
              <a href="mailto:mk@variant.no">mk@variant.no</a> |{' '}
              <a href="tel:41637572">41 63 75 72</a>
            </p>
          </div>
        </section>

        <img
          className={style.imageBlob}
          src={require('public/images/marius.png')}
          alt="Variant sine sommerstudenter i 2020 foran Varianthuset i Trondheim"
        />

        <img
          className={style.variantLogo}
          src={require('./images/variant-white.svg')}
          role="none"
        />
      </section>
    </>
  );
}
