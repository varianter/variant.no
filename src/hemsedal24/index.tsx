import styles from './hemsedal.module.css'
import { NextPage } from 'next';
import Head from 'next/head';
import arrowDown from './images/arrow-down.svg';
import arrowRight from './images/arrow-right.svg';
import Hero from './components/Hero'
import Day from './components/Day'
import Link from 'next/link';
import bop from './images/bop.svg'
import secondbigblobs from './images/secondbigblobs.svg'
import topblub from './images/top_blub.svg'
import mobiletopblub from './images/top-blub-mobil.svg'
import bottomblub from './images/bottom_blub.svg'
import mobilebottomblub from "./images/bottom-blub-mobil.svg"
import pagebottomblub from "./images/pagebottomblob.svg"
import mobilepagebottomblub from "./images/mobilepagebottomblob.svg"
import resortbottom from './images/resortbottom.svg'
import { useState, useEffect } from 'react';
import latter from './images/latter.svg'





const Hemsedal24: NextPage = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setMobile(window.innerWidth <= 500);
        };

        handleWindowSizeChange(); // Set initial value after component mounts
        window.addEventListener('resize', handleWindowSizeChange);

        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);
    return (
        <div className={styles.tur}>
            <Head>
                <title>Hemsedal</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Hero mobile={mobile}/>
        <div className={styles.navigation}>
        <a href="#program">
          <span>Programmet for turen</span>
          <img src={arrowDown} height={24} width={24} alt="pil ned" /></a>
        <Link href="/hemsedal24/tingogtang" className={styles.navigation}>
          <span>Ting du kanskje lurer på</span>
          <img src={arrowRight} height={24} width={24} alt="pil høyre" />
        </Link>
      </div>
    <div style={{display:'relative'}}><img style={{display:"absolute"}} src={mobile ? mobiletopblub : topblub} alt="big blobs"/>  </div> 
        <div style={{background:'var(--Secondary-4-L2, #F4F1E7)', width:'100%'}} className={styles.overlay}>
        <div>
        <h4>Hemsedal!!</h4>
        <p>Johooooooo!!! Eller chooo-choooo som toget til Hemsedal... 
            ikke kommer til å si siden det er elektrisk, men vi kan late som🤝 
            Uansett! Årets Varianttur tar oss med opp på fjellet, 
            og her blir det hygge, kos, god mat og gøye aktiviteter💥</p>
        <p>Under finner du programmet for turen, blabla mer her </p></div>
        <div className={styles.latter}><img src={latter} alt="koser seg"/></div>
      </div>
      <div style={{display:'relative', marginBottom:"10%"}}><img style={{display:"absolute"}} src={mobile ? mobilebottomblub : bottomblub} alt="big blobs"/>  </div> 
      <div id="program" className={styles.program}>
      <h3>Program</h3>
      <Day title="Fredag">
  <ul>
    <li>
      <time>09:55</time> <span>Oppmøte på Flesland</span>
    </li>
    <li>
      <time>11:55</time> <span>Flyet går</span>
    </li>
    <li>
      <time>15:10</time> <span>Lander i Helsinki</span>
    </li>
    <li>
      <time>16:00</time> <span>Tog til sentrum</span>
    </li>
    <li>
      <time>17:00</time> <span>Innsjekk og faglig bolk på hotellet</span>
    </li>
    <li>
      <time>21:00</time> <span>Middag</span>
    </li>
    <li>
      <time>23:30</time> <span>🍻 eller 😴</span>
    </li>
  </ul>
</Day>

<Day title="Lørdag" background>
  <ul>
    <li>
      <time>08:00</time> <span>Frokost 😴</span>
    </li>
    <li>
      <time>09:45</time> <span>Avgang fra hotellet</span>
    </li>
    <li>
      <time>10:30</time> <span>Felles aktivitet 🤫</span>
    </li>
    <li>
      <time>12:00</time>
      <span>
        <Link href={'/hemsedal24/aktiviteter'}>
          Valgfrie aktiviteter
        </Link>
      </span>
    </li>
    <li>
      <time>19:30</time> <span>Felles avgang til forfriskninger 🍾</span>
    </li>
    <li>
      <time>21:00</time> <span>Middag 🤤</span>
    </li>
    <li>
      <time>00:00</time> <span>Gøygøygøy 🕺</span>
    </li>
  </ul>
</Day>

<Day title="Søndag">
  <ul>
    <li>
      <time>08:00</time> <span>Frokost 😴</span>
    </li>
    <li>
      <time>09:45</time> <span>Avgang fra hotellet</span>
    </li>
    <li>
      <time>10:30</time> <span>Felles aktivitet 🤫</span>
    </li>
    <li>
      <time>12:00</time>
      <span>
        <Link href={'/helsinki23/tips'}>
          Valgfrie aktiviteter
        </Link>
      </span>
    </li>
    <li>
      <time>19:30</time> <span>Felles avgang til forfriskninger 🍾</span>
    </li>
    <li>
      <time>21:00</time> <span>Middag 🤤</span>
    </li>
    <li>
      <time>00:00</time> <span>Gøygøygøy 🕺</span>
    </li>
  </ul>
</Day>

      </div>
      <div style={{display:'relative'}}><img style={{display:"absolute"}} src={mobile ? mobilepagebottomblub : pagebottomblub} alt="big blobs"/>  </div> 
      <div style={{background: 'var(--Secondary-4-L2, #F4F1E7)'}}>
      <div className={styles.bunninfo}>
        <div>
            <h2>Det praktiske</h2>
            <p className={styles.bold}>Fýri Resort</p>
            <p>Tlf: 31 00 15 60</p>
            <p>Totteskogen 55, 3560 Hemsedal</p>
            <br />
            <p className={styles.bold}>Spørsmål underveis?</p>
            <p>Soskom tlf: 999 999 999</p>
        </div>
        <div className={styles.resortbottom}><img src={resortbottom} alt="resortbilde"/></div>
       </div>
       <a href="#hero"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
       </div>
        </div>
    );
};

export default Hemsedal24;