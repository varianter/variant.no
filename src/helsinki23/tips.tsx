import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './helsinki.module.css';
import Container from './components/Container';
import Tip from './components/Tip';

import arrowLeft from './images/arrow-left.svg';
import tips from './tips.json';

const HelsinkiTips: NextPage = () => {
  return (
    <div className={styles.tur} style={{ paddingTop: '3rem' }}>
      <Container>
        <Link
          href="/helsinki23"
          style={{ display: 'flex', gap: '1rem', lineHeight: '28px' }}
        >
          <Image src={arrowLeft} width={24} height={28} alt="pil venste" />
          Tilbake
        </Link>
        <h2>Lørdagstips!</h2>
        <p>
          Vi har samlet noen av våre beste tips til hva vi kan bruke dagen på
        </p>
        {tips.map((tip, i) => (
          <Tip key={i} tip={tip} reversed={i % 2 != 0} />
        ))}
      </Container>
    </div>
  );
};

export default HelsinkiTips;
