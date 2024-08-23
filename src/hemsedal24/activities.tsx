
import { NextPage } from "next";
import Link from "next/link";
import arrowleft from "./images/arrow-left.svg"
import styles from "./activities.module.css"
import blob from "./images/activityblob.svg"
import bop from "./images/bop.svg"
import ActivityBlock from "./components/ActivityBlock";
import hund from "./images/hund.svg"
import sykling from "./images/sykling.svg"
import via from "./images/viaferrata.svg"
import { useEffect, useState} from "react";
const Activities: NextPage = () => {
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
        <div  id="top" className={styles.tur}>
            <meta name="theme-color" content="#EDE8D7"/>
                        <Link 
            className={styles.tilbake}
            href="/hemsedal24">
                <img src={arrowleft} width={24} height={28} alt="pil venste" />
                <span>Tilbake</span>
            </Link>    
            <div className={styles.blob}><img src={blob} alt="blob"/></div>
            <div className={styles.header}>
            <div className={styles.title}><h3>Aktivitetene på lørdag</h3></div>  
            <p>
            Lørdag! Aktiviteter! Sykle på fjellet, klatre i fjellveggen eller kose med hunder, 
            det er mye forskjellig som skjer på lørdag. Her har vi derfor samlet litt informasjon om 
            de forskjellige aktivitetene her slik at man er forberedt på hva lørdagsaktivitetene vil bringe ⛰️🌞 
            </p></div>
            <ActivityBlock title="Stisykling med Hemsedal Rides 🚲⛰️"
            text="Mellom kl 10:00 – 16:00 kan dere ta stolheisen Lodge Express opp fjellet til stiene i Hemsedal Skisenter⛰️ Heisen ligger en kort sykkeltur fra hotellet. Her kan dere sykle ned og ta heisen opp igjen så mange ganger dere vil for å teste ut de ulike stiene. Disse stiene passer for både nybegynnere og adrenalin junkiesene blant oss💥 Sykkel og hjelm får dere låne av hotellet!"
            link ="https://hemsedal.com/sykling/hemsedal-rides"
            reference="stisyklingen"
            secondtext="Lunsj kan dere spise på skisenteret 🥪 (husk å ta vare på kvitteringen)"
            picture={sykling}/>
            <ActivityBlock title="Hundekjøring og fjellvandring 🐕⛰️"
            text='Dere tar bussen fra hotellet sammen med klatregjengen kl 09:00. Vi er framme hos Hemsedal Husky kl 10:25, og så er det hundekjøring fra kl 10:30🥳 Her får vi litt over en time hundekjøring med guide. Det er også viktig å påpeke at “det blir tid til å kose med hundene i hundegården også”😌 På grunn av veldig kosete hunder som er glad i mennesker så blir vi tipset om å gå med klær som tåler poter, snuter og pels.'
            link="https://hemsedalhusky.no/hundekjoring/"
            reference="hundekjøringen"
            secondtext={<>Vi blir hentet med bussen igjen kl 11:45 og er framme på hotellet ca 12:45. De som vil kan så gå på tur rundt <Link href='https://hemsedal.com/artikler/rjukandefossen'>Rjukandefossen</Link> (det ser helt sykt fint ut på bildene omg). Turen tar 3 timer tur/retur. Og man kan bade!!! Ellers kan man også henge på hotellet og slappe av etter hundekjøringen, det velger man selv 🤗</>}
            picture={hund}/>
            <ActivityBlock title="Via Ferrata klatring med guide 🧗"
            text="Dere tar bussen fra hotellet sammen med hundegjengen kl 09:00, og blir sluppet av der dere skal møte guiden og resten av gruppen som skal klatre 🚌 Her tar erfarne guider deg med opp bratte fjellsider og langs trange fjellhyller (hjelp) på en rute som tar deg til Vesle Røggjin. Det tar 3-5 timer, avhengig av nivået til de som klatrer💫 Men ikke vær for treig, for bussen plukker dere opp igjen kl 12:30 og kjører dere tilbake til hotellet🤠"
            link="https://hemsedal.com/hemsedal-fjellsport/via-ferrata"
            reference="klatreturen"
            secondtext="Når dere er tilbake på hotellet så kan dere velge om dere vil på tur med hundegjengen eller slappe av på hotellet🌟 "
            picture={via}/>
            <a href="#top"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
    </div>
);
};

export default Activities;