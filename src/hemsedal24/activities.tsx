
import { NextPage } from "next";
import Link from "next/link";
import arrowleft from "./images/arrow-left.svg"
import styles from "./hemsedal.module.css"
import Container from "./components/Container";
import blob from "./images/activityblob.svg"
import ActivityBlock from "./components/ActivityBlock";
import hund from "./images/hund.svg"
import sykling from "./images/sykling.svg"
import via from "./images/viaferrata.svg"
const Activities: NextPage = () => {
    return (
        <div className={styles.tur} style={{ paddingTop: '3rem' }}>
        <Container style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <Link 
            className={styles.navigation}
            href="/hemsedal24"
            style={{display:'flex', gap: '1rem', lineHeight: '28px'}}>
                <img src={arrowleft} width={24} height={28} alt="pil venste" />
                <span>Tilbake</span>
            </Link>
            <div className={styles.tingogtangheader}>
            <div style={{zIndex:10, margin: "-12% -15% 0 20%"}}><h3>Aktivitetene på lørdag</h3></div>
            <div style={{zIndex:"auto", margin:"-12% -15% 0 0", minWidth:"50%"}}><img src={blob} alt="blob"/></div>
            </div> 
            <div style={{display:"flex", justifyContent:"center", marginBottom:"5%" }}>   
            <span style={{display:"inline-block", zIndex:10, maxWidth:"74%", marginTop:"-15%"}}>
                Lørdag! Aktiviteter! Sykle på fjellet, ri på hester eller kose med hunder, det er mye 
                forskjellig som skjer på lørdag. Her har vi derfor samlet litt informasjon om de forskjellige 
                aktivitetene her slik at man er forberedt på hva lørdagsaktivitetene vil bringe ⛰️🌞 
            </span></div> 
            <ActivityBlock title="Stisykling med Hemsedal Rides 🚲⛰️" 
            text="Mellom kl 10.00 – 15.00 kan man ta stolheisen Lodge Express opp fjellet til stiene i Hemsedal Skisenter. 
            Her kan man sykle ned og ta heisen opp igjen så mange ganger man vil for å teste ut de ulike stiene. 
            Disse stiene passer for både nybegynnere og adrenalin junkiesene blant oss💥"
            link ="https://hemsedal.com/sykling/hemsedal-rides"
            reference="stisyklingen"
            picture={sykling}/>
            <ActivityBlock title="Via Ferrata klatring med guide 🧗"
            text="Her tar erfarne guider deg med opp bratte fjellsider og langs trange fjellhyller (hjelp) på en rute som 
            tar deg opp til Vesle Røggjin. Det tar 3-5 timer, avhengig av nivået til de som klatrer💫"
            link="https://hemsedal.com/hemsedal-fjellsport/via-ferrata"
            reference="klatreturen"
            picture={via}/>
            <ActivityBlock title="Hundekjøring og fjellvandring 🐕⛰️"
            text="Her får vi ca 2 timer hundekjøring med guide i kombo med to timers fjellvandring etter lunsj. Det er også 
            viktig å påpeke at “det blir tid til å kose med hundene i hundegården også”😌 På grunn av veldig kosete hunder 
            som er glad i mennesker så blir vi tipset om å gå med klær som tåler poter, snuter og pels. "
            link="https://hemsedalhusky.no/hundekjoring/"
            reference="hundekjøringen"
            picture={hund}/>
        </Container>
    </div>
);
};

export default Activities;