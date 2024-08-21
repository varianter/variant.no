import { NextPage } from "next";
import styles from './hemsedal.module.css'
import Container from "./components/Container";
import Link from "next/link";
import arrowLeft from "./images/arrow-left.svg"
import blob from "./images/tingogtangblob.svg"
import snok from "./images/snok.svg"
import { useState, useEffect } from "react";
import bop from './images/bop.svg'
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
                className={`${styles.navigation} ${styles.tilbake}`}
                style={{display:'flex', gap: '1rem', lineHeight: '28px', justifyContent:"flex-start"}}
                href="/hemsedal24">
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
                <a href="#ting"><div className={styles.bop}><img src={bop} alt="big blobs"/></div></a>
            </Container>
        </div>
    );
};

export default TingogTang;