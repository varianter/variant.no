import Head from 'next/head';
import style from './varianttur.module.css';

export default function Berlin23() {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate
    .getDate()
    .toString()
    .concat(
      (currentDate.getMonth() + 1).toString(),
      currentDate.getFullYear().toString(),
    );

  let currentProgramDay = 'fredag';
  if (formattedCurrentDate === '2682023') currentProgramDay = 'lordag';
  else if (formattedCurrentDate === '2782023') currentProgramDay = 'sondag';

  return (
    <div className={style.container}>
      <Head>
        <title>Varianttur</title>
      </Head>

      <section className={style.firstPage} id="top">
        <div className={style.firstPageLeft}>
          <header className={style.header}>
            <p>Varianttur</p>
            <h1>Berlin 🌭</h1>
            <h2>25. - 27. august</h2>
          </header>

          <nav className={style.toProgram}>
            <a href={`#${currentProgramDay}`}>Ta meg til programmet</a>
          </nav>

          <JippiBlob />
        </div>

        <img
          className={style.imageMaxWidth}
          src={require('./berlinblob.png')}
          role="none"
          alt="Berlin."
        />

        <div className={style.bouncingArrow} />
      </section>

      <section className={style.agenda} id="fredag">
        <h3 className="fancy">Fredag</h3>

        <ul>
          <li>
            <p>05:30</p>
            <p>🧳 Innsjekk Oslo Lufthavn Gardermoen</p>
          </li>
          <li>
            <p>07:30</p>
            <p>✈️ Fly til Berlin - DY1102</p>
          </li>
          <li>
            <p>10:00</p>
            <p>🚌 Buss fra flyplassen</p>
          </li>
          <li>
            <p>10:30</p>
            <p>🥪 Lunsjstopp på <a href="https://www.bloomberlin.de/work/bloombistro">Bloom</a></p>
          </li>
          <li>
            <p>11:30</p>
            <p>🚌 Buss til <a href="https://www.hotel-oderberger.berlin/">Hotel Oderberger</a></p>
          </li>
          <li>
            <p>12:00</p>
            <p>🧳 Innsjekk på hotellet</p>
          </li>
          <li>
            <p>12:30</p>
            <p>🎨 Variantdag på <a href="https://www.haus-fuer-poesie.org/en/literaturwerkstatt-berlin/home/">Haus für Poesie!</a></p>
          </li>
          <li>
            <p>17:30</p>
            <p>🤙 Fritid!</p>
          </li>
          <li>
            <p>18:55</p>
            <p>🚶 Felles avgang fra hotellet til middag</p>
          </li>
          <li>
            <p>19:00</p>
            <p>🍽️ Middag på <a href="https://www.pratergarten.de/">PRATERGARTEN</a></p>
          </li>
          <li>
            <p>22:00</p>
            <p>🍺 Tester noen tyske <a href="https://www.google.com/search?q=AWESOME+GERMAN+BEER">bjørnunger</a></p>
          </li>
          <li>
            <p>00:10</p>
            <p>💃 Uteliv i Berlin for de som ønsker</p>
          </li>
        </ul>
      </section>

      <section className={style.agenda} id="lordag">
        <h3 className="fancy">Lørdag</h3>
        <ul>
          <li>
            <p>07:00</p>
            <p>☕  <a href="https://en.wikipedia.org/wiki/Breakfast">Frokost</a> på hotellet</p>
          </li>
          <li>
            <p>10:30</p>
            <p>🚶 Vi  går til aktivitet</p>
          </li>
          <li>
            <p>11:00</p>
            <p>🖼️ Grafittiworkshop!</p>
          </li>
          <li>
            <p>13:00</p>
            <p>🍕 Lunsj på <a href="https://www.brewdog.com/uk/brewdog-berlin-mitte">Brewdog Berlin Mitte</a></p>
          </li>
          <li>
            <p>15:00</p>
            <p>🪁 Egentid</p>
          </li>
          <li>
            <p>18:30</p>
            <p>🚶 Vi  går sammen fra hotellet til middag</p>
          </li>
          <li>
            <p>19:00</p>
            <p>🍽️ Middag på <a href="https://www.restaurant-nolle.de/en/">Nolle Restaurant</a></p>
          </li>
          <li>
            <p>21:00</p>
            <p>🍺 Får vel smake på no godt øl da</p>
          </li>
          <li>
            <p>23:00</p>
            <p>💃 Uteliv for de som ønsker det</p>
          </li>
        </ul>

      </section>

      <section className={style.agenda} id="sondag">
        <h3 className="fancy">Søndag</h3>
        <ul>
          <li>
            <p>08:00</p>
            <p>☕ Frokost på hotellet</p>
          </li>
          <li>
            <p>11:00</p>
            <p>🧳 Utsjekk</p>
          </li>
          <li>
            <p>11:00 - 13:05</p>
            <p>🛝 Egentid</p>
          </li>
          <li>
            <p>13:15</p>
            <p>🚌 Buss fra Hotel Oderberger til flyplassen</p>
          </li>
          <li>
            <p>14:15</p>
            <p>🧳 Utsjekk på Berlin Lufthavn</p>
          </li>
          <li>
            <p>17:05</p>
            <p>✈️ Fly til Oslo - DY1107</p>
          </li>
        </ul>
      </section>

      <section className={style.info}>
        <div>
          <h3 className="fancy">Det praktiske</h3>

          <div className={style.infoGroup}>
            <h3>
              <a href="https://goo.gl/maps/49FC6j3AisYLmEgJ6" target="_blank">
                Hotel Oderberger
              </a>
            </h3>
            <p>
              Tlf: <a href="tel:004930780089760">+49 30 780 089 760</a>
            </p>
            <p>Oderberger Str. 57, 10435 Berlin</p>
          </div>

          <div className={style.infoGroup}>
            <h3>Lurer du på noe i forkant av turen?</h3>
            <div className={style.infoGroupContact}>
              <p>Ta kontakt med @soskom-oslo på Slack</p><br/>
              <p>Eller send melding til Sondre</p>
              <p>
                <a href="tel:+4745447385">+47 454 47 385</a>
              </p>
            </div>
            <h3>Lurer du på noe underveis?</h3>

            <div className={style.infoGroupContact}>
              <p>Sondre</p>
              <p>
                <a href="tel:+4745447385">+47 454 47 385</a>
              </p>
            </div>
            <div className={style.infoGroupContact}>
              <p>Kine - Reiseleder</p>
              <p>
                <a href="tel:+4793222744">+47 93 222 744</a>
              </p>
            </div>
          </div>
        </div>

        <img
          className={style.imageMaxWidth}
          src={require('./poolblob.png')}
          role="none"
          alt="HOTEL ODERBERGER"
        />
      </section>

      <section className={style.toTop}>
        <a href="#top">Ta meg til toppen</a>
      </section>
    </div>
  );
}

const JippiBlob = () => {
  return (
    <>
      <div className={style.jippiBlobArrow}>
        <p className="fancy">Jippi-blob</p>

        <svg
          width="87"
          height="81"
          viewBox="0 0 87 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_502_90)">
            <path
              d="M49.0486 66.5755C44.8246 67.7616 40.6013 68.9523 36.3752 70.1277C35.9548 70.2445 35.8142 70.4104 35.9361 70.7977C36.0539 71.1728 36.1593 71.5585 36.2038 71.9523C36.2606 72.4544 36.4755 72.5777 37.0296 72.4746C40.1817 71.8881 43.3331 71.2662 46.4935 70.8028C50.1936 70.26 53.9025 69.8675 57.6076 69.4089C57.8155 69.3833 58.0231 69.3486 58.3173 69.3054C58.2444 69.0522 58.2025 68.8481 58.128 68.6584C55.8336 62.819 54.0297 56.7989 52.4544 50.6943C52.212 49.7554 52.3481 49.8035 51.283 50.0392C49.6929 50.3915 49.7046 50.3861 49.9401 51.8737C50.5358 55.6377 51.1196 59.4038 51.7067 63.1699C51.7223 63.2697 51.717 63.3748 51.7238 63.5412C51.5691 63.4852 51.464 63.462 51.3765 63.4131C47.6655 61.3401 44.0771 59.1169 40.9617 56.297C34.4428 50.397 30.2826 43.1758 29.0293 34.3511C28.0153 27.2106 29.1096 20.1201 31.9839 13.0992C33.5447 9.28656 35.6216 5.70069 38.0678 2.27659C38.5722 1.57076 38.5642 1.56541 37.8654 1.15823C37.4726 0.929159 37.0678 0.71571 36.6864 0.471432C36.2893 0.217266 36.0387 0.320527 35.7481 0.730038C33.6583 3.67797 31.7738 6.71977 30.2491 9.93589C27.3698 16.0094 25.7395 22.2543 25.6072 28.6897C25.3936 39.0642 28.7677 47.9714 35.4869 55.4829C38.175 58.4882 41.2658 61.0796 44.7405 63.2569C46.2004 64.1718 47.6988 65.0354 49.1801 65.9218C49.3651 66.0324 49.5539 66.1378 49.7407 66.2455C49.7318 66.2936 49.7228 66.3419 49.7135 66.3898C49.492 66.4518 49.2702 66.513 49.0486 66.5755L49.0486 66.5755Z"
              fill="white"
            />
            <path
              d="M49.7138 66.3902C49.4921 66.4521 49.2703 66.5133 49.0486 66.5758C44.8246 67.7618 40.6013 68.9525 36.3752 70.128C35.9548 70.2448 35.8142 70.4107 35.9361 70.798C36.0539 71.173 36.1593 71.5587 36.2038 71.9525C36.2606 72.4546 36.4755 72.578 37.0296 72.4748C40.1817 71.8883 43.3331 71.2665 46.4935 70.8031C50.1936 70.2602 53.9025 69.8677 57.6076 69.4092C57.8155 69.3835 58.0231 69.3488 58.3173 69.3056C58.2444 69.0524 58.2025 68.8483 58.128 68.6586C55.8336 62.8192 54.0297 56.7991 52.4544 50.6945C52.212 49.7557 52.3481 49.8038 51.283 50.0395C49.6929 50.3917 49.7046 50.3864 49.9401 51.874C50.5358 55.6379 51.1196 59.4041 51.7067 63.1701C51.7223 63.27 51.717 63.375 51.7238 63.5415C51.5691 63.4854 51.464 63.4622 51.3765 63.4134C47.6655 61.3404 44.0771 59.1172 40.9617 56.2973C34.4428 50.3973 30.2826 43.1761 29.0293 34.3514C28.0153 27.2109 29.1096 20.1203 31.9839 13.0994C33.5447 9.28681 35.6216 5.70094 38.0678 2.27684C38.5722 1.571 38.5642 1.56565 37.8654 1.15847C37.4726 0.929403 37.0678 0.715954 36.6864 0.471676C36.2893 0.21751 36.0387 0.320771 35.7481 0.730283C33.6583 3.67821 31.7738 6.72001 30.2491 9.93614C27.3698 16.0096 25.7395 22.2546 25.6072 28.69C25.3936 39.0645 28.7677 47.9716 35.4869 55.4831C38.175 58.4885 41.2658 61.0799 44.7405 63.2571C46.2004 64.1721 47.6988 65.0357 49.1801 65.922C49.3651 66.0327 49.5539 66.138 49.7407 66.2457C49.7317 66.294 49.7226 66.3423 49.7137 66.3902L49.7138 66.3902Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_502_90">
              <rect
                width="58.5851"
                height="62.7146"
                fill="white"
                transform="matrix(0.866389 0.499369 -0.571966 0.820278 35.8706 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <img
        className={style.jippiBlob}
        src={require('./jippi-blob.svg')}
        role="none"
        alt="Jippi-blob"
      />
    </>
  );
};
