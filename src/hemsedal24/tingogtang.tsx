import { NextPage } from "next";
import styles from './hemsedal.module.css'
import Container from "./components/Container";
import Link from "next/link";
import arrowLeft from "./images/arrow-left.svg"
import blob from "./images/tingogtangblob.svg"
import snok from "./images/snok.svg"
const TingogTang: NextPage = () => {
    return (
        <div className={styles.tur} style={{ paddingTop: '3rem' }}>
            <Container>
                <Link 
                className={styles.navigation}
                href="/hemsedal24"
                style={{display:'flex', gap: '1rem', lineHeight: '28px'}}>
                    <img src={arrowLeft} width={24} height={28} alt="pil venste" />
                    <span>Tilbake</span>
                </Link>
                <div className={styles.tingogtangheader}>
                <div style={{zIndex:"auto"}}><img src={blob} alt="blob"/></div>
                <div style={{marginLeft:'-10%', zIndex:10}}><h3>Ting og tang du kanskje lurer på</h3></div>
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
                
            </Container>
        </div>
    );
};

export default TingogTang;