import styles from "./Hero.module.css";

import arrow from "../images/curved-arrow.svg";
import s from "../images/s.svg"
import Image from 'next/image';
import blob from "../images/blob.svg";
import HemsedalImage from "./hemsedalimgcurvedtext";
import hemsedalhero1 from "../../../public/images/hemsedalhero1text.svg"
import hemsedalHero2 from "../images/hemsedalhero2.png"
import Container from "../../helsinki23/components/Container";


export default function Hero() {
  return <section id="hero">
    <Container className={styles.container}>
    <HemsedalImage/>
    {/* <img src={hemsedalhero1} alt="hemsedalbilde" className={styles.hemsedalhero1}/> */}
    <img src={hemsedalHero2} alt="hemsedalbilde" className={styles.hemsedalhero2}/>
        <div className={styles.blob}>
          <img src={blob} alt="blobben" />
        </div>
        <div className={styles.text}>
          <h1>Hemsedal</h1>
          <h2>30. august-1. september</h2>
        </div>
    </Container>
  </section>;
}

