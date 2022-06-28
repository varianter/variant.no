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

      <section className={style.fullheightSection}>
        <div className={style.introHalf}>
          <header className={style.header}>
            <h5>Varianttur</h5>
            <h1>København</h1>
            <h1>2. - 4. september</h1>
          </header>

          <nav className={style.nav}>
            <a href="#fredag">Ta meg til programmet</a>
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
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <li>Mandag</li>
              </a>
            </ul>
          </nav>
        </div>

        <div className={style.introHalf}>
          <img
            className={style.introPic}
            src={require('./85349472523692.png')}
            role="none"
            alt="Dette MÅ da være København?"
          />
        </div>
      </section>

      <section className={style.fullheightSection} id="fredag">
        <h3 className="fancy">Fredag</h3>
        <table>
          <tr>
            <td>07:30</td>
            <td>Avreise fra Værnes</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Variantdagen starter med en matbit</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Følger har mulighet til å sjekke ut byen</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td>Innsjekk og fritid før middag</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>
              Uformell middag på{' '}
              <a href="https://boathouse.dk/" target="_blank">
                Boathouse
              </a>
            </td>
          </tr>
        </table>
      </section>

      <section className={style.fullheightSection}>
        <h3 className="fancy">Lørdag</h3>
        <table>
          <tr>
            <td>08:00 - 10:00</td>
            <td>Frokost på hotellet</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>Vi går til båten</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>Vi utforsker farvannene rundt København</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Vi utforsker København i grupper</td>
          </tr>
          <tr>
            <td>18:00</td>
            <td>Felles transport til Refshaleøen</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td>
              En trtt mer formell middag på{' '}
              <a href="https://afkrog.dk/" target="_blank">
                Afkrog - en rå juvel på Reffen
              </a>
            </td>
          </tr>
          <tr>
            <td>02:00 (+1)</td>
            <td>Afkrog blir en avkrok</td>
          </tr>
        </table>
      </section>

      <section className={style.fullheightSection}>
        <h3 className="fancy">Søndag</h3>
        <table>
          <tr>
            <td>08:00 - 10:00</td>
            <td>Frokost</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>Utsjekking</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>Vi utforsker Tivoli</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>Felles lunsj et sted i Tivoli</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td>Hjemreise (vi tar toget til Kastrup)</td>
          </tr>
          <tr>
            <td>19:45</td>
            <td>Fly til Værnes</td>
          </tr>
        </table>
      </section>

      <section className={style.fullheightSection}>
        <h1>Det praktiske</h1>

        <div className={style.informationContentGroup}>
          <h4>Lurer du på noe underveis?</h4>

          <div className={style.informationContentGroupContact}>
            <p>Odd Morten</p>
            <p>
              <a href="tel:+4792807375">+47 92 80 73 75</a>
            </p>

            <p>
              <a
                href="https://guldsmedenhotels.com/axel-hotel-copenhagen-vesterbro/"
                target="_blank"
              >
                Hotell Axel Guldsmeden
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className={style.fullheightSection}>
        <a href="#" className={style.toTop}>
          Dette høres helt topp ut, ta meg med 🚀
        </a>
      </section>
    </div>
  );
}
