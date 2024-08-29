import styles from './hemsedal.module.css'
import { NextPage } from 'next';
import Head from 'next/head';
import arrowDown from './images/arrow-down.svg';
import arrowRight from './images/arrow-right.svg';
import arrowrightpink from './images/arrow-rightpink.svg'
import Hero from './components/Hero'
import Day from './components/Day'
import Link from 'next/link';
import bop from './images/bop.svg'
import topblub from './images/top_blub.svg'
import mobiletopblub from './images/top-blub-mobil.svg'
import bottomblub from './images/bottom_blub.svg'
import mobilebottomblub from "./images/bottom-blub-mobil.svg"
import pagebottomblub from "./images/pagebottomblob.svg"
import mobilepagebottomblub from "./images/mobilepagebottomblob.svg"
import resortbottom from './images/resortbottom.svg'
import { useState, useEffect } from 'react';
import latter from './images/latter.svg'
import fotobank from "./images/fotobank.svg"


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
            <meta name="theme-color" content="#EDE8D7"/>
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
        <h4>Endelig Varianttur!</h4>
        <p>Johooooooo!!! Eller chooo-choooo som toget til Hemsedal...  
            <span className={styles.italic}> ikke</span> kommer til å si siden det er elektrisk, men vi kan late som🤝 
            Uansett! Årets Varianttur tar oss med opp på fjellet, 
            og her blir det hygge, kos, god mat og gøye aktiviteter💥</p>
        <p>Og bilder!! Det er gøy å dele litt bilder underveis på turen, så vi har vår egen lille fotobank her på denne nettsiden. Ta bilder og del de med gjengen! 📸  </p>
        <a className={styles.fotobank} href="hemsedal24/bilder"><div><img src={fotobank} alt="link til fotobank"/></div></a>
        </div>
        <div className={styles.latter}><img src={latter} alt="koser seg"/></div>
      </div>
      <div style={{display:'relative', marginBottom:"10%"}}><img style={{display:"absolute"}} src={mobile ? mobilebottomblub : bottomblub} alt="big blobs"/>  </div> 
      <div id="program" className={styles.program}>
      <div className={styles.pl_9}><h3>Program</h3></div>
      <Day title="Fredag">
  <ul>
    <li>
      <time>07:45</time> <span>Oppmøte på Togstasjonen</span>
    </li>
    <li>
      <time>08:08</time> <span>Toget går! 🚂</span>
    </li>
    <li>
      <time>12:00</time> <span>Buss til hotellet</span>
    </li>
    <li>
      <time>12:45</time> <span>Ankomst på Fýri Resort (check-in kl 15:00)</span>
    </li>
    <li>
      <time>13:00 - 14:00</time> <span>Lunsj på hotellet</span>
    </li>
    <li>
      <time>14:00 - 17:00</time> <span><span className={styles.programbold}>For varianter:</span>&nbsp;<span> Rabalder 2025, Pre-mortem workshop og de nyes minutter. Det blir servert snacks og drikke. </span></span>
    </li>
    <li>
      <time>14:00 - 16:00</time> 
      <details><summary><span className={`${styles.underlined} ${styles.summaryText}`}><span className={`${styles.programbold} ${styles.underlined} `}>For følge:</span>&nbsp;
        <span className={styles.underlined}>Pool Club/treningssenter/fritid</span></span><div><div className={styles.disclosureArrow}></div></div></summary>
       
       <p>Mens variantene har workshop kan dere benytte dere av treningssenteret eller Pool Club som består av innendørs- og utendørsbassenger, og badstue ute. Gå til resepsjonen etter lunsj og få bånd for å kunne gå i Pool Club (Variant betaler). Da har dere fri tilgang til bassenget fram til kl 16:00 og kan gå inn og ut så mye de vil i denne tidsperioden (gjelder kun denne dagen).​ Eller så kan dere slappe av, gå en tur, utforske hotellet eller ta en blund😌 Helt opp til dere! Snacks og drikke kan settes av på romnummer og betales ved utsjekk på søndagen.</p></details>
       
    </li>
    <li><time>17:00 - 17:55</time><span>Chill eller gjør hva dere vil🤸🏼</span></li>
    <li>
      <time>18:00</time> <span>Middag </span>
    </li>
    <li>
      <time>20:00</time> <span>Sosialt og chill og hygge 🍻🌟</span>
    </li>
  </ul>
</Day>

      <Day title="Lørdag" background>
  <ul>
  <li>
<time>07:30</time> <span>Frokost 🥐 🍳 (spis når dere vil mellom 07:30 og 09:00)</span>
</li>
<li>
<time>09:00</time>       <span className={styles.underlined}>
  <Link className={styles.underlined} href={'/hemsedal24/aktiviteter'}>
  Hundekjøring / Via Ferrata klatring / Stisykling med Hemsedal Rides
  </Link>
</span><Link href={'/hemsedal24/aktiviteter'}><img style={{marginTop:"6px", marginLeft:"8px"}} src={arrowrightpink} alt="arrow"/></Link>
</li>
<li>
<time>16:15 - 19:15</time> <span>Pool Club (inne- og utebasseng + badstue) </span>
</li>
<li>
<time>18:00</time> <span>Middag</span>
</li>
<li>
<time>20:00</time> <span>Sosialt og chill og hygge 🍻🌟</span>
</li>
  </ul>
</Day>

<Day title="Søndag">
  <ul>
    <li>
    <time>07:30</time> <span>Frokost 🥐 🍳 (spis når dere vil mellom 07:30 og 09:00)</span>
    </li>
    <li>
      <time>10:00</time> <span>Buss til togstasjonen. Alle må være sjekket ut før dette, og ha betalt for snacks/drikke fra minibaren hvis dere har kost dere litt ekstra (as you should, <Link  style={{color:"#e61a6b"}}className={styles.link} href="https://www.youtube.com/watch?feature=shared&t=7&v=59lVs4dD4eM">treat yo self</Link>!!!) 🥂</span>
    </li>
    <li>
      <time>11:16</time> <span>Toget går! 🚂</span>
    </li>
    <li>
      <time>15:00</time> <span>Tilbake i Bergen</span>
    </li>
  </ul>
</Day>

      </div>
      <div style={{display:'relative'}}><img style={{display:"absolute"}} src={mobile ? mobilepagebottomblub : pagebottomblub} alt="big blobs"/>  </div> 
      <div style={{background: 'var(--Secondary-4-L2, #F4F1E7)'}}>
      <div className={styles.bunninfo}>
        <div className={styles.bunninfotekst}>
            <h2>Det praktiske</h2>
            <p className={styles.bold}>Fýri Resort</p>
            <p>Tlf: 31 00 15 60</p>
            <p>Totteskogen 55, 3560 Hemsedal</p>
            <br />
            <p className={styles.bold}>Spørsmål underveis?</p>
            <p>Anita har nok svaret, ring eller send melding til <a href="tel:+4791916747">919 16 747</a> 🌟</p>
        </div>
        <div className={styles.resortbottom}><img src={resortbottom} alt="resortbilde"/></div>
       </div>
       <a href="#hero"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
       </div>
        </div>
    );
};

export default Hemsedal24;
