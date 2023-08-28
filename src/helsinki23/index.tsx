import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Hero from './components/Hero';
import Day from './components/Day';
import Container from './components/Container';

import helsinkiHotel from './images/helsinki-hotel.png';
import arrowDown from './images/arrow-down.svg';
import arrowRight from './images/arrow-right.svg';
import arrowRightCurved from './images/arrow-right-curved.svg';
import arrowUp from './images/arrow-up.svg';

import styles from './helsinki.module.css';

const Helsinki23: NextPage = () => {
  return (
    <div className={styles.tur}>
      <Head>
        <title>Helsinki</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.navigation}>
        <a href="#Days">
          <span>Ta meg til programmet</span>
          <Image src={arrowDown} height={24} width={24} alt="pil ned" />
        </a>
        <Link href="/helsinki23/praktisk">
          <a>
            <span>Ta meg til siden med alt jeg lurer på</span>
            <Image src={arrowRight} height={24} width={24} alt="pil høyre" />
          </a>
        </Link>
      </div>
      <section id="Description">
        <Container className={styles.description}>
          <h2>Tästä tulee niin hauskaa!</h2>
          <p>
            Sommeren er kanskje på hell, og vi nærmer oss nok en fødselsdag for
            Variant. Og da er det en eneste stor glede å kunne invitere alle
            varianter med sine nærmeste til Varianttur🥳 Og denne gangen går
            turen til 🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁 Helsinki!
            <br />
            <br />
            Scroll ned for et usannsynlig hyggelig program! 🕺 <br />
            <br />
            (NB: Endringer kan forekomme på uante tidspunkt 👀)
          </p>
        </Container>
      </section>
      <div id="Days">
        <Day title="Fredag" background>
          <ul>
            <li>
              <time>09:55</time> Oppmøte på Flesland
            </li>
            <li>
              <time>11:55</time> Flyet går
            </li>
            <li>
              <time>15:10</time> Lander i Helsinki
            </li>
            <li>
              <time>16:00</time> Tog til sentrum
            </li>
            <li>
              <time>17:00</time> Innsjekk og faglig bolk på hotellet
            </li>
            <li>
              <time>21:00</time> Middag
            </li>
            <li>
              <time>23:30</time> 🍻 eller 😴
            </li>
          </ul>
        </Day>
        <Day title="Lørdag">
          <ul>
            <li>
              <time>08:00</time> Frokost 😴
            </li>
            <li>
              <time>9:45</time> Avgang fra hotellet
            </li>
            <li>
              <time>10:30</time> Felles aktivitet 🤫
            </li>
            <li>
              <time>12:00</time>{' '}
              <Link href={'/helsinki23/tips'}>
                <a>
                  Valgfrie aktiviteter
                  <Image
                    src={arrowRightCurved}
                    width={45}
                    height={46}
                    alt="pil høyre"
                  />
                </a>
              </Link>
            </li>
            <li>
              <time>19:30</time> Felles avgang til forfriskninger 🍾
            </li>
            <li>
              <time>21:00</time> Middag 🤤
            </li>
            <li>
              <time>00:00</time> Gøygøygøy 🕺
            </li>
          </ul>
        </Day>
        <Day title="Søndag" background>
          <ul>
            <li>
              <time>08:00</time> Frokost på hotellet
            </li>
            <li>
              <time>12:00</time> Utsjekk
            </li>
            <li>
              <time>13:00</time> Avreise fra hotell
            </li>
            <li>
              <time>16:05</time> Flyet går ut i år
            </li>
            <li>
              <time>17:20</time> Vi er i Bergen
            </li>
          </ul>
        </Day>
      </div>
      <section id="Practical">
        <Container className={styles.practical}>
          <div>
            <h2>Det praktiske</h2>
            <p>Hotel Helka</p>
            <p>+358 9 613580</p>
            <p>Pohjoinen Rautatiekatu 23</p>
            <p>
              Lurer du på noe underveis?
              <br />
              Soskom: 464 32 753
            </p>
          </div>
          <img src={helsinkiHotel} alt="hotel" />
        </Container>
      </section>
      <Container
        style={{
          paddingTop: '0.5rem',
          paddingBottom: '2rem',
          backgroundColor: 'rgb(83 77 172)',
        }}
      >
        <div className={styles.navigation}>
          <a href="#hero">
            <span>Ta meg til toppen</span>
            <Image src={arrowUp} height={24} width={24} alt="pil opp" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Helsinki23;
