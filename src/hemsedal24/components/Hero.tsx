import styles from './Hero.module.css';

import blob from '../images/blob.svg';
import retreatmobile from '../images/retreatmobilee.svg';
import retreat from '../images/Retreatclub-fyri-solbaddar.svg';
import hemsedalHero2 from '../images/hemsedalhero2.svg';

export default function Hero({ mobile }: { mobile: boolean }) {
  return (
    <section id="hero">
      <div className={styles.container}>
          <img
            src={mobile ? retreatmobile : retreat}
            alt="hemsedalbilde"
            className={styles.hemsedalhero1}
          />
        <div className={styles.blobandtext}>
          <div className={styles.text}>
            <h1>Hemsedal</h1>
            <h2>30. august-1. september</h2>
            <img className={styles.blobimg} src={blob} alt="blobben" />
          </div>
            
        </div>
          <img
            src={hemsedalHero2}
            alt="hemsedalbilde"
            className={styles.hemsedalhero2}
          />
      </div>
    </section>
  );
}
