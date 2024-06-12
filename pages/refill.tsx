import Image from 'next/image';
import RefillLayout from 'src/refill/layout';
import style from 'src/refill/refill.module.css';

const dev: ProgramItemProps[] = [
  {
    speaker: { name: 'Jacob Berglund', src: '/refill/people/jacob.jpg' },
    title: 'Det var en gång en request, en response och ett par headers',
    url: 'https://youtu.be/ck_VOCxTpWE?si=UXyQwjGxpJmgfOX3',
  },
  {
    speaker: {
      name: 'Jakob Endrestad Kielland',
      src: '/refill/people/jakob.jpg',
    },
    title: 'Hvordan bygge latterlig kule nettsider med View Transitions API',
    url: 'https://youtu.be/6YvDcPecICA?si=-AAPHbV3WeDZ7EJB',
  },
  {
    speaker: {
      name: 'Truls Henrik Jakobsen',
      src: '/refill/people/truls-henrik.jpg',
    },
    title: 'Skjema-endringer med lave skuldre: Bakover­kompatible APIer',
    url: 'https://youtu.be/gRZKqd8GQuE?si=_TZFW68WCZW4PRij',
  },
  {
    speaker: { name: 'Christian Brevik', src: '/refill/people/christian.jpg' },
    title: 'TestContainers er kulere enn ChatGPT',
    url: 'https://youtu.be/2DpZ3FyWd3k?si=B02412tfoGL9FFNj',
  },
  {
    speaker: { name: 'Thomas Hansen', src: '/refill/people/thomas.jpg' },
    title: 'Erfaringer med prosessarbeid',
    url: 'https://youtu.be/slu5oJ7Qqkw?si=4OSwN8SeR83HCGZK',
  },
  {
    speaker: {
      name: 'Anders Njøs Slinde',
      src: '/refill/people/anders-njos.jpg',
    },
    title: 'Plattform sa du? Ja det må vi selvfølgelig ha. Eller?',
    url: 'https://youtu.be/obJTeBTEg4I?si=LfPcac2s68JY-PQ-',
  },
  {
    speaker: { name: 'Mikael Brevik', src: '/refill/people/mikael.jpg' },
    title: 'RAG-arkitektur avmystifisert',
    url: 'https://youtu.be/RQypwHKWVI4?si=0aOYMXvflFNIWOp3',
  },
];
const design: ProgramItemProps[] = [
  {
    speaker: {
      name: 'Jonas Lillevold',
      src: '/refill/people/jonas.jpg',
    },
    title: 'UX Metrics - Hva, hvorfor og hvordan?',
    url: 'https://youtu.be/ZlOv0ggJLNI?si=kMfMScoYN7cka3FM',
  },
  {
    speaker: {
      name: 'Andreas Sætersdal Hartveit',
      src: '/refill/people/andreas.jpg',
    },
    title: 'En skikkelig nerdete preik om typografi',
    url: 'https://youtu.be/EKUIVpL9V7I?si=ZRbF_ZM0A20-sTdx',
  },
  {
    speaker: { name: 'Simen Strøm Braaten', src: '/refill/people/simen.jpg' },
    title: 'Fra å være en god designer til å bli en dårlig utvikler',
    url: 'https://youtu.be/UwYRcGc-W4s?si=ZNXltHdFp1ARLyPY',
  },
  {
    speaker: {
      name: 'Andreas Sætersdal Hartveit',
      src: '/refill/people/andreas.jpg',
    },
    title: 'Mitt voksende produkt / MVP arket',
    url: 'https://youtu.be/kAYDExZ0mzU?si=KSJlpqtaAf3nCKOZ',
  },
];

export default function Refill() {
  return (
    <RefillLayout>
      <div className={style.header}>
        <Image
          src="/refill/header.png"
          alt="En mann og en kvinne som sitter i en sofa og ser på en laptop"
          width={360}
          height={360}
          role="none"
        />

        <div className={style.header__inner}>
          <h1>Refill 2024</h1>
          <p>
            7. juni inviterte Variant til vår første iterasjon av
            Refill-konferansen. En tverrfaglig konferanse fylt til randen med
            læreglede.
          </p>
          <p>
            Konferansen ble streamet med 2 tracks: utvikling og design. Om du
            gikk glipp av hendelsen har du ingen ting å frykte. Vi er jo åpne,
            tross alt, og du kan se alle foredrag lenket under her.
          </p>
        </div>
      </div>

      <div className={style.programSection}>
        <h2>Se track: Utvikling</h2>

        <ul className={style.programSectionGrid}>
          {dev.map((item, i) => (
            <ProgramItem key={i} {...item} />
          ))}
        </ul>
      </div>

      <div className={style.programSection}>
        <h2>Se track: Design</h2>

        <ul className={style.programSectionGrid}>
          {design.map((item, i) => (
            <ProgramItem key={i} {...item} />
          ))}
        </ul>
      </div>
    </RefillLayout>
  );
}

type ProgramItemProps = {
  speaker: {
    name: string;
    src?: string;
  };
  url: string;
  title: string;
};
function ProgramItem({ speaker, title, url }: ProgramItemProps) {
  return (
    <li className={style.programItem}>
      <a href={url}>
        <h3>{title}</h3>
        <Speaker {...speaker} />
      </a>
    </li>
  );
}

function Speaker({ name, src }: ProgramItemProps['speaker']) {
  return (
    <footer className={style.speaker}>
      {src && (
        <div className={style.avatarContainer}>
          <Image src={src} alt={name} height={50} width={50} />
        </div>
      )}
      <h4>{name}</h4>
    </footer>
  );
}
