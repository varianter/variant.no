import Head from 'next/head';
import style from './varianttur.module.css';

export default function Cph22() {
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
            København, <span>2. - 4. sep</span>
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
          <h4>Velkommen til København!</h4>
          <p>
            Vi er henrykte, ja bortimot ekstatiske, over å igjen kunne invitere
            varianter og deres nærmeste til varianttur. Dette er noe vi har sett
            fram til og virkelig gledet oss til. I år bærer ferden til perlen
            blant kystbyene (ifølge Edvard Munch) nemlig Kragerø. Vi skal bo på
            flotte{' '}
            <a
              href="https://guldsmedenhotels.com/da/axel-hotel-copenhagen-vesterbro/"
              target="_blank"
            >
              Axel Guldsmeden
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
                <a
                  href="https://guldsmedenhotels.com/da/axel-hotel-copenhagen-vesterbro/"
                  target="_blank"
                >
                  Axel Guldsmeden
                </a>
              </p>
            </div>

            <div className={style.informationContentGroup}>
              <h4>Lurer du på noe underveis?</h4>

              <div className={style.informationContentGroupContact}>
                <p>Odd Morten</p>
                <p>
                  <a href="tel:+4792807375">+47 92 80 73 75</a>
                </p>

                <p>Axel Guldsmeden Hotel</p>
                <p>
                  <a href="tel:+4533313266">+45 33 31 32 66</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.agenda} id="fredag">
          <h3 className="fancy">Fredag</h3>
          <ul>
            <li>
              <p>07:30</p>
              <p>Avreise fra Værnes</p>
            </li>
            <li>
              <p>12:00</p>
              <p>Variantdagen starter med en matbit</p>
            </li>
            <li>
              <p>12:00</p>
              <p>Følger har mulighet til å sjekke ut byen</p>
            </li>
            <li>
              <p>17:00</p>
              <p>Innsjekk og fritid før middag</p>
            </li>
            <li>
              <p>19:00</p>
              <p>
                Uformell middag på{' '}
                <a href="https://boathouse.dk/" target="_blank">
                  Boathouse
                </a>
              </p>
            </li>
          </ul>
        </section>

        <section className={style.agenda} id="lørdag">
          <h3 className="fancy">Lørdag</h3>
          <ul>
            <li>
              <p>08:00 - 10:00</p>
              <p>Frokost på hotellet</p>
            </li>
            <li>
              <p>10:00</p>
              <p>Vi går til båten</p>
            </li>
            <li>
              <p>11:00</p>
              <p>Vi utforsker farvannene rundt København</p>
            </li>
            <li>
              <p>12:00</p>
              <p>Vi utforsker København i grupper</p>
            </li>
            <li>
              <p>18:00</p>
              <p>Felles transport til Refshaleøen</p>
            </li>
            <li>
              <p>19:00</p>
              <p>
                En litt mer formell middag på{' '}
                <a href="https://afkrog.dk/" target="_blank">
                  Afkrog - en rå juvel på Reffen
                </a>
              </p>
            </li>
            <li>
              <p>02:00 (+1)</p>
              <p>Afkrog blir en avkrok</p>
            </li>
          </ul>
        </section>

        <section className={style.agenda} id="søndag">
          <h3 className="fancy">Søndag</h3>
          <ul>
            <li>
              <p>08:00 - 10:00</p>
              <p>Frokost</p>
            </li>
            <li>
              <p>11:00</p>
              <p>Utsjekking</p>
            </li>
            <li>
              <p>11:00</p>
              <p>Vi utforsker Tivoli</p>
            </li>
            <li>
              <p>15:00</p>
              <p>Felles lunsj et sted i Tivoli</p>
            </li>
            <li>
              <p>17:00</p>
              <p>Hjemreise (vi tar toget til Kastrup)</p>
            </li>
            <li>
              <p>19:45</p>
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
