import { NextPage } from "next";
import styles from './tingogtang.module.css'
import Container from "./components/Container";
import Link from "next/link";
import arrowLeft from "./images/arrow-left.svg"
import blob from "./images/tingogtangblob.svg"
import snok from "./images/snok.svg"
import { useState, useEffect } from "react";
import bop from './images/bop.svg'
import kosevors from './images/kosevors.svg'
import squiggly from './images/squigglyarrow.svg'
import a_blob from './images/aktivityblob.svg'
import utsiktmobil from './images/mobilutsikttingtang.png'
import utsiktpc from './images/pcutsikt.png'
import arrowblob from './images/arrowtoblob.svg'


const TingogTang: NextPage = () => {
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
        <div className={styles.tur} style={{ paddingTop: '3rem' }}>
            <Container id="ting">
            {mobile ? <></>:<Link 
                className={styles.tilbake}
                href="/hemsedal24"
                style={{display:'flex', gap: '1rem', lineHeight: '28px'}}>
                    <img src={arrowLeft} width={24} height={28} alt="pil venste" />
                    <span>Tilbake</span>
                </Link>}
                <div className={styles.tingogtangheader}>
                <div style={{zIndex:"auto", minWidth: `${mobile ? '40%' : '15%'}`, marginLeft:`${mobile ? '-9%' : '0'}`}}><img src={blob} alt="blob"/></div>
                <div className={styles.ttheadertittel}><h3>Ting og tang du kanskje lurer på</h3></div>
                </div>
                <div className={styles.tingogtangbody}>
                    <div className={styles.tt_textbox}>
                    <span style={{fontWeight:600}}>Noe du lurer på om turen? Du finner litt praktisk info her!🌟</span>
                    <span style={{fontStyle:"italic"}}>(Ikke hos takterrasse-naboen... Marie, Thomas og Andreas har allerede sjekket)</span>
                    <br />
                    <br />
                    <span>Dersom det er noe annet du lurer så er det bare å huke tak i sin nærmeste Variant og spørre🤝</span>
                    </div>
                    <div className={styles.snokimg}><img src={snok} alt="folk som snoker"/></div>
                </div>
                <div className={styles.omHotellet}>
                <h4>Om hotellet</h4>
                <p>Hvis du ikke allerede har tatt en titt på hotellet, så kan du sjekke det ut <Link href="https://fyriresort.com/pool-club/">HER</Link>.</p>
                <br/>
                <p>Fýri ligger ved Hemsedal skisenter, og er (som de beskriver det selv)  ”stedet for de sosiale, eventyrlystne og nysgjerrige”. Guuuuuu som vi skal kose oss!!</p>
                </div>
                <div className={styles.pakkeliste}>
                    <div className={styles.koseimg}><img src={kosevors} alt="strandsenger"/></div>
                    <div><h4>Husk å ta med:</h4>
                    <p>Badetøy! 🩳 🩱</p>
                    <p>Klær, turtøy og gode sko til aktivitetene på lørdag ⛰️.<br/>(<Link href="https://www.yr.no/nb/værvarsel/daglig-tabell/10-1032550/Norge/Buskerud/Hemsedal/Totteskogen">ta en titt på værmeldingen</Link>)</p>
                    <p>Varianter: pc til workshoppen på fredag 💻 </p></div>
                </div>
                <div className={styles.aktivitetene}>
                    <div className={styles.aktivitetstekst}>
                        <h4>Aktivitetene på lørdag</h4>
                        <p>Det er mye forskjellig som skjer på lørdagen, så vi har samlet alt på ett 
                            sted slik at det skal være enkelt å finne ut av hvem/hva/hvor og alt imellom💥 </p>
                </div>
                
                    {mobile ? 
                    <a href={'/hemsedal24/aktiviteter'}><div className={styles.mobilearrowblob}><img src={arrowblob} alt="blob"/></div></a> 
                    :<div className={styles.arrowtoblob}>
                    <div className={styles.squiggly}><img src={squiggly} alt="arrow"/></div>
                    <a href={'/hemsedal24/aktiviteter'}><div><img src={a_blob} alt="blob"/></div></a></div>}</div>
                {mobile ? <div className={styles.utsiktsblob}><img src={utsiktmobil} alt="utsiktsblob"/></div> : <div><img src={utsiktpc} alt="utsiktsblob"/></div>}
                <a href="#ting"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
            </Container>
        </div>
    );
};

export default TingogTang;