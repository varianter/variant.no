import Head from 'next/head';
import style from './varianttur.module.css';

export default function Varianttur() {
  return (
    <div className={style.container}>
      <Head>
        <title>Varianttur</title>
      </Head>

      <div className={style.background}>
        <div className={style.backgroundFirst}>
          <img src={require('./background-blob-1.svg')} role="none" alt="" />
        </div>
        <div className={style.backgroundSecond}>
          <img src={require('./background-blob-2.svg')} role="none" alt="" />
        </div>
      </div>

      <div className={style.wrapper}>
        <header className={style.header}>
          <h1>
            Kragerø, <span>10. - 12. sep</span>
          </h1>
          <p>Varianttur</p>
        </header>

        <nav className={style.nav}>
          <h4>Hopp til</h4>
          <ul>
            <a href="#fredag">
              <li>Fredag</li>
            </a>
            <a href="#lørdag">
              <li>Lørdag</li>
            </a>
            <a href="#søndag">
              <li>Søndag</li>
            </a>
          </ul>
        </nav>

        <section className={style.description}>
          <h4>Velkommen til Kragerø!</h4>
          <p>
            Vi er henrykte, ja bortimot ekstatiske, over å igjen kunne invitere
            varianter og deres nærmeste til varianttur. Dette er noe vi har sett
            fram til og virkelig gledet oss til. I år bærer ferden til perlen
            blant kystbyene (ifølge Edvard Munch) nemlig Kragerø. Vi skal bo på
            flotte{' '}
            <a href="https://www.krageroresort.no/" target="_blank">
              Kragerø Resort
            </a>
            .
          </p>
          <p>
            Etter et år med til dels betydelige sosiale restriksjoner er det
            ekstra morsomt å vite at vi kan sette av andre helga i september til
            å bli kjent med nye medlemmer i variantfamilien. Og enda bedre kjent
            med gamle.
          </p>
          <p>
            I år har vi jobbet for å lage et opplegg som både er avslappende,
            ernærende og utviklende samtidig som det sosiale står i sentrum.
            Blant annet inviterer vi til tidenes første åpne variantdag. Som
            alltid skal vi på båttur, denne gang i Telemarks skjærgård. Selv om
            programmet er innholdsrikt vil det også være rom for litt egen tid i
            spaavdelingen for de som har lyst til det.
          </p>

          <p>Med dette ønsker vi alle en flott helg og god tur! Vi sees.</p>
          <p>Mvh Turkomitéen</p>
        </section>

        <img
          src={require('./travel-blob.svg')}
          role="none"
          alt=""
          className={style.travelBlob}
        />

        <section className={style.information}>
          <img src={require('./information-blob.png')} role="none" alt="" />

          <div className={style.informationContent}>
            <div className={style.informationContentGroup}>
              <h4>Hotell</h4>
              <p>
                <a href="https://www.krageroresort.no/" target="_blank">
                  Kragerø Resort
                </a>
              </p>
            </div>

            <div className={style.informationContentGroup}>
              <h4>Lurer du på noe underveis?</h4>

              <div className={style.informationContentGroupContact}>
                <p>Odd Morten</p>
                <p>
                  <a href="tel:92807375">92 80 73 75</a>
                </p>

                <p>Kragerø Resort</p>
                <p>
                  <a href="tel:35971100">35 97 11 00</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.agenda} id="fredag">
          <h3 className="fancy">Fredag</h3>
          <ul>
            <li>
              <p>06:15</p>
              <p>Avreise fra Molde</p>
            </li>
            <li>
              <p>08:15</p>
              <p>Avreise fra Værnes</p>
            </li>
            <li>
              <p>09:45</p>
              <p>Avreise felles buss fra Torp</p>
            </li>
            <li>
              <p>11:00</p>
              <p>
                Vi møter Oslo-gjengen for en herlig lunsj på{' '}
                <a href="https://oyaspiseri.no/" target="_blank">
                  Øya Spiseri
                </a>{' '}
                i Porsgrunn
              </p>
            </li>
            <li>
              <p>13:00</p>
              <p>
                Åpen Variantdag - reisefølger er også velkomne til å delta - vi
                lover relevant program for alle
              </p>
            </li>
            <li>
              <p>17:00</p>
              <p>Innsjekk og fritid før middag</p>
            </li>
            <li>
              <p>20:00</p>
              <p>Middag på hotellet</p>
            </li>
          </ul>
        </section>

        <section className={style.agenda} id="lørdag">
          <h3 className="fancy">Lørdag</h3>
          <ul>
            <li>
              <p>07:00 - 09:45</p>
              <p>Frokost</p>
            </li>
            <li>
              <p>10:00 - 12:00</p>
              <p>Vår egen Variant Team Challenge</p>
            </li>
            <li>
              <p>12:30</p>
              <p>Felles lunsj på hotellet</p>
            </li>
            <li>
              <p>14:00 - 16:30</p>
              <p>Båttur i skjærgården</p>
            </li>
            <li>
              <p>19:00</p>
              <p>Middag på hotellet</p>
            </li>
          </ul>
        </section>

        <section className={style.agenda} id="søndag">
          <h3 className="fancy">Søndag</h3>
          <ul>
            <li>
              <p>07:00 - 11:00</p>
              <p>Frokost</p>
            </li>
            <li>
              <p>11:00</p>
              <p>Utsjekking</p>
            </li>
            <li>
              <p>12:00</p>
              <p>Buss til Langesund</p>
            </li>
            <li>
              <p>13:00</p>
              <p>
                Lunsj på{' '}
                <a
                  href="https://www.nordicchoicehotels.com/hotels/norway/langesund/quality-hotel-skjargarden/facilities/restaurant-and-bar/"
                  target="_blank"
                >
                  Quality Hotel Skjærgården
                </a>
              </p>
            </li>
            <li>
              <p>15:40</p>
              <p>Fly til Molde</p>
            </li>
            <li>
              <p>16:00</p>
              <p>Avreise fra lunsjsted med felles buss til Torp</p>
            </li>
            <li>
              <p>18:10</p>
              <p>Fly til Værnes</p>
            </li>
          </ul>
        </section>
      </div>

      <a href="#" className={style.toTop}>
        Til toppen
      </a>
    </div>
  );
}
