import styles from "./Hero.module.css";
//import arrow from "../images/curved-arrow.svg";

import blob from "../images/blob.svg";
import retreatmobile from "../images/retreatmobile.svg"
import retreat from "../images/Retreatclub-fyri-solbaddar.svg"
import hemsedalHero2 from "../images/hemsedalhero2.svg"
import Container from "./Container";



export default function Hero({mobile}: {mobile:boolean}) {
  return <section id="hero">
    <div className={styles.container}>
    
    <img src={mobile ? retreatmobile : retreat} alt="hemsedalbilde" className={styles.hemsedalhero1}/>
        <div className={styles.blobandtext}>
        <div className={styles.text}>
          <h1>Hemsedal</h1>
          <h2>30. august-1. september</h2>
        </div>
        <div className={styles.blob}>
          <img src={blob} alt="blobben" />
        </div>
        </div>
        <img src={hemsedalHero2} alt="hemsedalbilde" className={styles.hemsedalhero2}/>
    </div>
  </section>;
}

