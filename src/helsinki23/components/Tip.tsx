import Image from 'next/image';

import styles from './Tip.module.css';

import shopping from '../images/shopping.png';
import culture from '../images/culture.png';
import chill from '../images/chill.png';

import externalLink from '../images/external-link.svg';

type Tip = {
  title: string,
  suggestions: {
    title: string,
    link: string
  }[],
  image: string
};

const images: { [key: string]: string } = {
  chill, culture, shopping
};

export default function Tip({ tip, reversed }: { tip: Tip, reversed?: boolean }) {

  return <div className={`${styles.tip} ${reversed ? styles.reversed : ''}`}>
    <div>
      <div>
        <h2>{tip.title}</h2>
        <ul>
          {tip.suggestions.map((suggestion, i) => <li key={i}><a href={suggestion.link} target='_blank'>{suggestion.title} <Image src={externalLink} height={24} width={24} alt="ekstern lenke" /></a></li>)}
        </ul>
      </div>
    </div>

    {tip.image in images && <img className={`${reversed ? styles.reversed : ''}`} alt={tip.image} src={images[tip.image]!} />}
  </div>
}
