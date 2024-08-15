import styles from './hemsedal.module.css'
import { NextPage } from 'next';
import Head from 'next/head';
import arrowDown from './images/arrow-down.svg';
import arrowRight from './images/arrow-right.svg';
import Hero from './components/Hero'
import Day from './components/Day'
import bigblobs from './images/Frame88.svg'
import Link from 'next/link';
import bop from './images/bop.svg'
import secondbigblobs from './images/secondbigblobs.svg'
import Layout from 'src/layout';

const Hemsedal24: NextPage = () => {
    return (
        <div className={styles.tur}>
            <Head>
                <title>Hemsedal</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Hero/>
        <div className={styles.navigation}>
        <a href="#program">
          <span>Programmet for turen</span>
          <img src={arrowDown} height={24} width={24} alt="pil ned" /></a>
        <Link href="/hemsedal24/tingogtang" className={styles.navigation}>
          <span>Ting du kanskje lurer på</span>
          <img src={arrowRight} height={24} width={24} alt="pil høyre" />
        </Link>
      </div>
      <div className={styles.bigblobs}><img src={bigblobs} alt="big blobs"/></div>
      <div id="program" className={styles.program}>
      <h3>Program</h3>
        <Day title="Fredag">
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
        <Day title="Lørdag" background>
          <ul>
            <li>
              <time>08:00</time> Frokost 😴
            </li>
            <li>
              <time>09:45</time> Avgang fra hotellet
            </li>
            <li>
              <time>10:30</time> Felles aktivitet 🤫
            </li>
            <li>
              <time>12:00</time>{' '}
              <Link href={'/helsinki23/tips'}>
                Valgfrie aktiviteter

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
        <Day title="Søndag">
          <ul>
            <li>
              <time>08:00</time> Frokost 😴
            </li>
            <li>
              <time>09:45</time> Avgang fra hotellet
            </li>
            <li>
              <time>10:30</time> Felles aktivitet 🤫
            </li>
            <li>
              <time>12:00</time>{' '}
              <Link href={'/helsinki23/tips'}>
                Valgfrie aktiviteter

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
      </div>
       <div className={styles.secondbigblobs}><img src={secondbigblobs} alt="big blobs"/></div>
       <a href="#hero"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
        </div>
        
    );
};

export default Hemsedal24;