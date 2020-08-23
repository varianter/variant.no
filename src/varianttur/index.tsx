import Head from 'next/head';
import React, { useState } from 'react';
import { and } from 'src/utils/strings';
import style from './varianttur.module.css';

export default function VariantTur() {
  const [isHildeMode, setHildeMode] = useState(false);
  const containerClass = isHildeMode ? style.hildeMode : '';

  return (
    <div className={containerClass}>
      <Head>
        <title>Varianttur 2020</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&amp;family=Monsieur+La+Doulaise&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={and(style.wrapper, style.paper, style.firstPage)}>
        <div className={style.wrapperContent}>
          <header className={style.intro}>
            <h1 className={style.intro__head}>Varianttur</h1>
            <h2 className={style.intro__sub}>til Hotell Union Øye</h2>
          </header>
          <div className={style.content}>
            <div className={style.invitation}>
              <p className={style.greating}>
                Til etterlatte av kanselliråd Angell!
              </p>
              <p>
                Klokken tretten minutter over syv, den første fredagen i
                september må De snarest slippe Dem ut av sengen, slenge en
                morgenkåp om Deres skuldre og gjøre Dem klar for avreise mot
                Nidaros' flyport. Målet for reisen er herskapelige Hotell Union
                Øye i biledskjønne Norangsdalen. Bedrøvlig nok vil ikke de
                sundmørske tinder, besteget av Sir Wiliam Slingsby, bli reisens
                hovedanliggende. Langt mer forskrekkelige og mindre yndige
                hendelser har vederfart oss.
              </p>
              <p className={style.regards}>
                Ærbødigst hilsen <br />
                M. B.
              </p>
              <p>
                <strong>PS!</strong> Jeg vil telegrafere Dem Deres
                reisedokumenter når passasjen nærmer seg.
              </p>
              <p>
                <strong>PPS!</strong> Jeg anmoder også om at De medbringer en
                ledsager på reisen.
              </p>
            </div>
          </div>
        </div>

        <label htmlFor="hilde-mode-checkbox" className={style.option}>
          <input
            type="checkbox"
            name="hilde-mode-checkbox"
            className={style.hildeModeCheckbox}
            onChange={(e) => setHildeMode(e.currentTarget.checked)}
            checked={isHildeMode}
            id="hilde-mode-checkbox"
          />
          Aktiver enklere lesing
        </label>
        <div className={style.firstPageBg}></div>
      </div>
      <div className={and(style.wrapper, style.paper)}>
        <h3>Fredag 4. september</h3>
        <dl>
          <dt>
            <span className={style.hilde}>10:15</span>
            <span className={style.agatha}>Femten over ti</span>
          </dt>
          <dd>
            🛫
            <a href="https://www.airportia.com/flights/sk4147/trondheim/%C3%85lesund/?date=2020-09-04">
              SK4147 fra Værnes til Vigra
            </a>
          </dd>

          <dt>
            <span className={style.hilde}>12:00</span>
            <span className={style.agatha}>Noon</span>
          </dt>
          <dd>
            🧆 <span className={style.hilde}>Lunsj</span>
            <span className={style.agatha}>Nonsmat</span> i Ålesund
          </dd>

          <dt>
            <span className={style.hilde}>14:00</span>
            <span className={style.agatha}>På slaget to</span>
          </dt>
          <dd>
            🚤 <span className={style.hilde}>Båt</span>
            <span className={style.agatha}>Dampskip</span> inn
            <a href="https://no.visitalesund.com/toppattraksjonar/hjorundfjorden">
              Hjørundford
            </a>
            og til <a href="https://www.unionoye.no/">Hotell Union Øye</a>
          </dd>

          <dt>
            <span className={style.hilde}>19:00</span>
            <span className={style.agatha}>I syvtiden</span>
          </dt>
          <dd>
            🍽 <span className={style.hilde}>Middag</span>
            <span className={style.agatha}>Dinering</span> på hotellet
          </dd>

          <dt>
            <span className={style.hilde}>22:00</span>
            <span className={style.agatha}>Klokken ti på aftenen</span>
          </dt>
          <dd>🔪 Murder Mystery</dd>
        </dl>

        <h3>Lørdag 5. september</h3>

        <dl>
          <dt>
            <span className={style.hilde}>07:00-09:00</span>
            <span className={style.agatha}>Mellom syv og ni</span>
          </dt>
          <dd>
            🍳 <span className={style.hilde}>Frokost</span>
            <span className={style.agatha}>Morgenmat</span>
          </dd>

          <dt>
            <span className={style.hilde}>09:00</span>
            <span className={style.agatha}>Like ved klokken ni</span>
          </dt>
          <dd>
            ⛰ Avmars
            <a href="https://www.visitnorway.no/listings/topptur-til-slogen-(1564-m-o-h-)/20373/">
              Slogen
            </a>
            , for de som ønsker det
          </dd>

          <dt>
            <span className={style.hilde}>11:00-15:00</span>
            <span className={style.agatha}>Fra elleve til i tredien</span>
          </dt>
          <dd>
            Ulike <span className={style.hilde}>aktiviteter</span>
            <span className={style.agatha}>
              operasjoner til Deres seleksjon
            </span>
            :
          </dd>
          <dd>
            🚣‍♂️{' '}
            <a href="https://www.unionoye.no/no/aktiviteter/kajakk/">Kajakk</a>
          </dd>
          <dd>
            🚴‍♀️
            <a href="https://www.unionoye.no/no/aktiviteter/norangsdalen/">
              <span className={style.hilde}>Sykkel</span>
              <span className={style.agatha}>Velosiped</span>
            </a>
          </dd>
          <dd>
            🐄
            <a href="https://www.unionoye.no/no/moter--selskap/oyes-beste-avloser/">
              <span className={style.hilde}>Avløserkonkurranse</span>
              <span className={style.agatha}>Stedfortrederkonkurranse</span>
            </a>
          </dd>

          <dt>
            <span className={style.hilde}>13:00</span>
            <span className={style.agatha}>Noe etter noon</span>
          </dt>
          <dd>
            🥗 <span className={style.hilde}>Lunsj</span>
            <span className={style.agatha}>Formiddagsmat</span>
          </dd>

          <dt>
            <span className={style.hilde}>19:00</span>
            <span className={style.agatha}>På slaget syv om aftenen</span>
          </dt>
          <dd>
            🦐 <span className={style.hilde}>Middag</span>
            <span className={style.agatha}>Aftensmat</span>
          </dd>

          <dt>
            <span className={style.hilde}>22:00</span>
            <span className={style.agatha}>Utover natten</span>
          </dt>
          <dd>
            🎊 <span className={style.hilde}>Party</span>
            <span className={style.agatha}>Selskap</span>
          </dd>
        </dl>

        <h3>Søndag 6. september</h3>

        <dl>
          <dt>
            <span className={style.hilde}>09:00-11:00</span>
            <span className={style.agatha}>Mellom ni og elleve</span>
          </dt>
          <dd>
            🥞 <span className={style.hilde}>Frokost</span>
            <span className={style.agatha}>Dugursbespisning</span>
          </dd>

          <dt>
            <span className={style.hilde}>12:30</span>
            <span className={style.agatha}>Klokken halv ett</span>
          </dt>
          <dd>
            🚌 <span className={style.hilde}></span>
            <span className={style.agatha}></span>Avgang mot Otta
          </dd>

          <dt>
            <span className={style.hilde}>15:00</span>
            <span className={style.agatha}>I tretiden på ettermiddagen</span>
          </dt>
          <dd>
            🥯 <span className={style.hilde}>Lunsj i Lom</span>
            <span className={style.agatha}>Traktement i Lom</span>
          </dd>

          <dt>
            <span className={style.hilde}>17:36</span>
            <span className={style.agatha}>Seks minutter over halv seks</span>
          </dt>
          <dd>
            🚝 <span className={style.hilde}>Tog til Trondheim</span>
            <span className={style.agatha}>Nidarosekspressen over Dovre</span>
          </dd>

          <dt>
            <span className={style.hilde}>20:46</span>
            <span className={style.agatha}>
              Fjorten minutter på ni om aftenen
            </span>
          </dt>
          <dd>
            💤 <span className={style.hilde}>Ankomst i byen</span>
            <span className={style.agatha}>Tilstedekomst i Nidaros</span>
          </dd>
        </dl>
      </div>
    </div>
  );
}
