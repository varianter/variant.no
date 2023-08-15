import styles from "./Hero.module.css";

import arrow from "../images/curved-arrow.svg";
import blob from "../images/blob.svg";
import helsinkiHero from "../images/helsinki-hero.png";
import Container from "./Container";

export default function Hero() {
  return <section id="hero">
    <Container className={styles.container}>
      <div className={styles.left}>
        <div className={styles.arrow}>
          <span>Jippi-blob</span>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={styles.blob}>
          <img src={blob} alt="blob" />
        </div>
        <div className={styles.text}>
          <p>Varianttur</p>
          <h1>Helsinki</h1>
          <h2>1.-3. september</h2>
        </div>
      </div>
      <img src={helsinkiHero} alt="helsinki" style={{ "margin": "0 auto" }} />
    </Container>
  </section>;
}
