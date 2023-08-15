import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./helsinki.module.css";
import Container from "./components/Container";
import Tip from "./components/Tip";

import arrowLeft from './images/arrow-left.svg';
import tips from './tips.json';

const HelsinkiTips: NextPage = () => {
  return <div className={styles.tur}>
    <Container style={{ padding: '3rem' }}>
      <Link href="/helsinki23">
        <a style={{ display: 'flex', gap: '1rem' }}>
          <Image src={arrowLeft} width={24} height={28} alt="arrow pointing left" />
          Tilbake
        </a>
      </Link>
      <h2>Lørdagstips!</h2>
      <p>Vi har samlet noen av våre beste tips til hva vi kan bruke dagen på</p>
      {tips.map((tip, i) => <Tip key={i} tip={tip} reversed={i % 2 != 0} />)}
    </Container>
  </div>;
}

export default HelsinkiTips;
