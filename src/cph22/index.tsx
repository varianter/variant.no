import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Tips from './tips';
import style from './varianttur.module.css';

export default function Cph22() {
  const router = useRouter();
  const [showTips, setShowTips] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (router.asPath.endsWith('#tips')) {
      setShowTips(true);
    }
  }, [router]);

  useEffect(() => {
    if (showTips) {
      router.replace('/cph22#tips');
    } else {
      router.replace('/cph22');
    }
  }, [showTips]);

  const handleSwipe = () => {
    if (touchEnd < touchStart - 100) {
      setShowTips(true);
    }
  };

  const currentProgramDay = useCurrentProgramDay();

  return (
    <div className={style.container} data-showing-tips={showTips}>
      <Head>
        <title>Varianttur</title>
      </Head>

      <section className={style.firstPage} id="top">
        <div className={style.firstPageLeft}>
          <header className={style.header}>
            <p>Varianttur</p>
            <h1>København</h1>
            <h2>2. - 4. september</h2>
          </header>

          <nav className={style.toProgram}>
            <a href={`#${currentProgramDay}`}>Ta meg til programmet</a>
          </nav>

          <JippiBlob />
        </div>

        <img
          className={style.imageMaxWidth}
          src={require('./cph-blob.png')}
          role="none"
          alt="Dette MÅ da være København?"
        />

        <div className={style.bouncingArrow} />
      </section>

      <section className={style.introPage} id="intro">
        <h1>Hold kæft, hvor bliver det sjovt!</h1>
        <p>
          Sommeren er kanskje på hell, og vi nærmer oss nok en fødselsdag for
          Variant. Og da er det en eneste stor glede å kunne invitere alle
          varianter med sine nærmeste til nok en varianttur. Denne gangen skal
          vi tilbake til utlandet, eller nærmere bestemt Søren Kierkegaard, Kim
          Larsen og Michael Laudrups fødested. Til et land med røyka flyndre og
          bayerøl og syndere.. oh lala! Vi skal selvsagt til København!
        </p>
        <p>
          Vi har prøvd å lage et opplegg som treffer både de shoppinghungrige,
          adrenalinhungrige og de bare hungrige. Som vanlig skal vi på båttur,
          og som vanlig skal det være rom for å finne sin indre ro og zen, eller
          finne en liflig bar. 🤷
        </p>
        <p>Æbleskiver!</p>
      </section>

      <section className={style.agenda} id="fredag">
        <h3 className="fancy">Fredag</h3>

        <ul>
          <li>
            <p>06:30</p>
            <p>🧳 Innsjekk Værnes</p>
          </li>
          <li>
            <p>07:30</p>
            <p>✈️ Fly til Oslo - DY 745 </p>
          </li>
          <li>
            <p>09:05</p>
            <p>✈️ Fly til København - D8 3222</p>
          </li>
          <li>
            <p>12:00</p>
            <p>
              🍱 Lunsj på{' '}
              <a href="https://goo.gl/maps/e8pYHP3aLQ3pndC18" target="_blank">
                Kælderen 13
              </a>{' '}
              - like ved Strøget
            </p>
          </li>
          <li>
            <p>13:00</p>
            <p>
              🎨 Variantdag! Reisefølger har fri, og kan sjekke ut København
            </p>
          </li>
          <li>
            <p>17:00</p>
            <p>
              🏢 Vi går til{' '}
              <a
                href="https://guldsmedenhotels.com/axel-hotel-copenhagen-vesterbro/"
                target="_blank"
              >
                hotellet
              </a>{' '}
              og sjekker inn
            </p>
          </li>
          <li>
            <p>19:00</p>
            <p>
              🍱 Uformell middag på{' '}
              <a href="https://boathouse.dk/" target="_blank">
                Boathouse
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section
        className={style.agenda}
        id="lordag"
        onTouchStart={(e) => {
          setTouchStart(e.touches[0].clientX);
        }}
        onTouchEnd={(e) => {
          setTouchEnd(e.changedTouches[0].clientX);
          handleSwipe();
        }}
      >
        <h3 className="fancy">Lørdag</h3>
        <ul>
          <li>
            <p>08:00 - 10:00</p>
            <p>🍱 Frokost på hotellet</p>
          </li>
          <li>
            <p>10:00</p>
            <p>🛥️ Privat kanalbåtcruise, vi møtes utenfor resepsjonen</p>
          </li>
          <li>
            <p>12:00</p>
            <p>🏙️ Byvandring i grupper</p>
          </li>
          <li>
            <p>17:30</p>
            <p>💺 Felles transport til Refshaleøen</p>
          </li>
          <li>
            <p>19:00 - 02:00</p>
            <p>
              🍱 En litt mer formell middag på{' '}
              <a href="https://afkrog-reffen.dk/" target="_blank">
                Afkrog - en rå juvel på Reffen
              </a>
            </p>
          </li>
        </ul>

        <button
          className={style.tipsArrow}
          onClick={() => setShowTips(!showTips)}
        >
          <p>Lørdagstips!</p>
          <svg
            width="81"
            height="89"
            viewBox="0 0 81 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_502_275)">
              <path
                d="M66.8387 48.5265C66.4181 52.8937 66.0022 57.2619 65.5709 61.6272C65.5279 62.0614 65.6318 62.2524 66.037 62.2787C66.4292 62.3044 66.827 62.3455 67.2102 62.4464C67.6989 62.5749 67.8916 62.4191 67.9956 61.8651C68.5878 58.7141 69.1469 55.5509 69.8569 52.4366C70.6879 48.7904 71.6622 45.1903 72.5736 41.57C72.6248 41.3668 72.6675 41.1607 72.7335 40.8708C72.4711 40.8473 72.2656 40.8126 72.0618 40.8134C65.7879 40.8426 59.5228 40.349 53.2615 39.6118C52.2985 39.4985 52.3925 39.389 52.2273 40.4673C51.9812 42.0773 51.9804 42.0644 53.4526 42.3824C57.1774 43.1871 60.9 44.0039 64.6237 44.8174C64.7225 44.839 64.8185 44.8819 64.9762 44.9356C64.868 45.0596 64.8084 45.1492 64.7312 45.2132C61.4572 47.9243 58.0875 50.4667 54.3324 52.3525C46.4753 56.2987 38.2387 57.5682 29.5575 55.5477C22.5331 53.9129 16.3172 50.3301 10.8095 45.1128C7.81856 42.2797 5.22554 39.0474 2.91685 35.5291C2.441 34.8037 2.43314 34.8092 1.80092 35.3137C1.44539 35.5971 1.10008 35.8974 0.734479 36.1648C0.353986 36.4432 0.359711 36.7142 0.636524 37.1331C2.63002 40.147 4.78523 43.0034 7.23303 45.5873C11.8555 50.4669 17.0893 54.2437 23.042 56.6927C32.6382 60.6409 42.1627 60.7138 51.5948 57.1631C55.3684 55.7428 58.9017 53.7973 62.1874 51.3443C63.5681 50.3136 64.9149 49.2286 66.2766 48.1677C66.4466 48.0352 66.6131 47.8973 66.781 47.762C66.8226 47.7877 66.8644 47.8135 66.9058 47.8395C66.8835 48.0684 66.8604 48.2973 66.8386 48.5266L66.8387 48.5265Z"
                fill="white"
              />
              <path
                d="M66.9061 47.8393C66.8836 48.0684 66.8605 48.2974 66.8387 48.5266C66.4181 52.8938 66.0022 57.262 65.5709 61.6273C65.5279 62.0615 65.6318 62.2525 66.037 62.2788C66.4292 62.3045 66.827 62.3456 67.2102 62.4465C67.6989 62.575 67.8916 62.4192 67.9956 61.8652C68.5878 58.7142 69.1469 55.551 69.8569 52.4367C70.6879 48.7905 71.6622 45.1904 72.5736 41.5701C72.6248 41.3669 72.6675 41.1608 72.7335 40.8709C72.4711 40.8474 72.2656 40.8127 72.0618 40.8135C65.7879 40.8427 59.5228 40.3491 53.2615 39.6119C52.2985 39.4986 52.3925 39.3891 52.2274 40.4674C51.9812 42.0774 51.9804 42.0645 53.4526 42.3825C57.1774 43.1872 60.9 44.004 64.6237 44.8174C64.7225 44.839 64.8185 44.8819 64.9762 44.9357C64.868 45.0597 64.8084 45.1493 64.7312 45.2133C61.4572 47.9244 58.0875 50.4668 54.3324 52.3526C46.4753 56.2988 38.2387 57.5683 29.5575 55.5478C22.5331 53.913 16.3172 50.3302 10.8095 45.1129C7.81856 42.2798 5.22554 39.0475 2.91685 35.5292C2.441 34.8038 2.43314 34.8093 1.80092 35.3138C1.44539 35.5972 1.10008 35.8975 0.734479 36.1649C0.353986 36.4433 0.359711 36.7143 0.636524 37.1332C2.63002 40.1471 4.78523 43.0035 7.23303 45.5874C11.8555 50.467 17.0893 54.2438 23.042 56.6928C32.6382 60.641 42.1627 60.7139 51.5948 57.1632C55.3684 55.7429 58.9017 53.7974 62.1874 51.3444C63.5681 50.3137 64.9149 49.2287 66.2766 48.1678C66.4466 48.0353 66.6131 47.8974 66.781 47.7621C66.8228 47.788 66.8646 47.8138 66.906 47.8394L66.9061 47.8393Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_502_275">
                <rect
                  width="58.5851"
                  height="62.7146"
                  fill="white"
                  transform="matrix(0.778716 -0.627377 0.558147 0.829742 0 36.755)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          className={style.tipsSwipe}
          onClick={() => setShowTips(!showTips)}
        >
          <div className={style.bouncingArrow} />
          <p>SVEIP FOR LØRDAGSTIPS!</p>
          <div className={style.bouncingArrow} />
        </button>
      </section>

      <section className={style.agenda} id="sondag">
        <h3 className="fancy">Søndag</h3>
        <ul>
          <li>
            <p>08:00 - 10:00</p>
            <p>🍱 Frokost på hotellet</p>
          </li>
          <li>
            <p>11:00</p>
            <p>🔑 Utsjekk</p>
          </li>
          <li>
            <p>11:00</p>
            <p>🎢 Tivoli</p>
          </li>
          <li>
            <p>14:30</p>
            <p>
              🍱 Felles lunsj i Tivoli på{' '}
              <a
                href="https://www.tivoli.dk/da/haven-og-forlystelser/spillesteder/over-plaenen"
                target="_blank"
              >
                Over Plænen
              </a>
            </p>
          </li>
          <li>
            <p>16:30</p>
            <p>🚅 Felles avreise med tog til Kastrup</p>
          </li>
          <li>
            <p>17:45</p>
            <p>🧳 Innsjekk Kastrup</p>
          </li>
          <li>
            <p>19:45</p>
            <p>✈️ Fly til Værnes - DY 902</p>
          </li>
        </ul>
      </section>

      <section className={style.info}>
        <div>
          <h3 className="fancy">Det praktiske</h3>

          <div className={style.infoGroup}>
            <h3>
              <a
                href="https://guldsmedenhotels.com/axel-hotel-copenhagen-vesterbro/"
                target="_blank"
              >
                Hotell Axel Guldsmeden
              </a>
            </h3>
            <p>
              Tlf: <a href="tel:+4533313266">+45 333 13 266</a>
            </p>
            <p>Colbjørnsengade 14, 1652 København V</p>
          </div>

          <div className={style.infoGroup}>
            <h3>Lurer du på noe underveis?</h3>

            <div className={style.infoGroupContact}>
              <p>Odd Morten</p>
              <p>
                <a href="tel:+4792807375">+47 928 07 375</a>
              </p>
            </div>
          </div>
        </div>

        <img
          className={style.imageMaxWidth}
          src={require('./axel-blob.png')}
          role="none"
          alt="Dobbeltseng på hotell Axel Guldsmeden"
        />
      </section>

      <section className={style.toTop}>
        <a href="#top">Ta meg til toppen</a>
      </section>

      {showTips && <Tips setShowTips={setShowTips} />}
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

function useCurrentProgramDay() {
  return useMemo(() => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate
      .getDate()
      .toString()
      .concat(
        (currentDate.getMonth() + 1).toString(),
        currentDate.getFullYear().toString(),
      );

    let currentProgramDay = 'fredag';
    if (formattedCurrentDate === '392022') currentProgramDay = 'lordag';
    else if (formattedCurrentDate === '492022') currentProgramDay = 'sondag';

    return currentProgramDay;
  }, []);
}
