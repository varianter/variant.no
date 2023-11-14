import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './helsinki.module.css';
import Container from './components/Container';

import arrowLeft from './images/arrow-left.svg';
import Collapsable from './components/Collapsable';

const HelsinkiPraktisk: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const androidLink =
    'https://play.google.com/store/apps/details?id=fi.hsl.app';
  const iosLink = 'https://apps.apple.com/fi/app/apple-store/id1340229182';

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
        <h2>Og så var det siden for alt du lurer på!</h2>
        <p>
          Det er sikkert litt man lurer på når man skal på tur, og derfor har vi
          prøvd å svare på ting her :) Om det skulle være flere ting man lurer
          på er det bare å ta tak i sin nærmeste Variant og spørre 🤘
        </p>
        <p>
          <b>Til følge</b>: På fredag ettermiddag (17:00 - 20:00) blir det et
          faglig program hvor dere står fritt til å gjøre det dere måtte ønske
          :) Det er ikke organisert så mye her, men det kan jo være en tid for å
          slenge beina høyt etter reisen eller utforske nærområdet. Vi spiser
          uansett en liten matbit alle sammen før det faglige starter hvor ting
          kan avtales :)
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            margin: '60px 0',
          }}
        >
          <Collapsable title="Pakkeliste">
            <ul>
              <li>
                <h3>Tog/Metro/Buss app</h3>
                <p>
                  Å reise rundt i Helsinki er ganske så greit med
                  kollektivtransport. For å komme oss fra flyplass til sentrum
                  tar vi tog og metro, og da kan man kjøpe billett enten på
                  stasjonen, eller via appen{' '}
                  <a
                    tabIndex={-1}
                    href={isAndroid ? androidLink : iosLink}
                    target="_blank"
                  >
                    HSL
                  </a>
                  . Appen fungerer på lik måte som skyss, at billetten gjelder
                  for en viss tid og man kan bytte til buss og metro på samme
                  billett. Så appen kan være grei å ha for hele turen. Kan være
                  lurt å legge inn kortdetaljer allerede :)
                </p>
              </li>
              <li>
                <h3>Pass</h3>
                <p>Husk pass :)</p>
              </li>
              <li>
                <h3>Klær og dresscode</h3>
                <p>
                  Du kan gå med akkurat det du vil :) Men et tips er å tenke om
                  man ønsker å benytte seg av byens badstuer eller utebasseng,
                  da kan badetøy være nice å hive med.
                </p>
                <p>
                  Vi skal ha to veldig hyggelige middager og om man lurer på
                  dresscode der, så er det egentlig bare å tenke: Kle deg som om
                  det er en helt vanlig fredag- og eller lørdagskveld i Helsinki
                  😄🕺 (TL:DR, det du vil trives å gå i med litt gåing, hyggelig
                  middag og litt byliv på kvelden)
                </p>
                <p>
                  På lørdagen er det også planlagt en uteaktivitet i felleskap.
                  Aktiviteten er helt stillesittende, så klær hvor man kan sitte
                  ute i meldt vær er bra å tenke på :)
                </p>
              </li>
            </ul>
          </Collapsable>
          <Collapsable title="Flydetaljer">
            <ul>
              <li>
                <h3>Billetter</h3>
                <p>Det blir utdeling av billetter på Flesland.</p>
              </li>
              <li>
                <h3>Tidsforskjell</h3>
                <p>
                  Ja tenke seg til så lever faktisk Finskene i fremtiden 🌌 Det
                  er + 1 time.
                </p>
              </li>
              <li>
                <h3>Direkteflygning</h3>
                <p>
                  Vi flyr direkte Bergen - Helsinki, og flytiden er på ca 2t
                  30m.
                </p>
              </li>
            </ul>
          </Collapsable>
          <Collapsable title="Faglig program (Varianter)">
            <ul>
              <li>
                <h3>PC/MAC</h3>
                <p>
                  Du trenger <b>ikke</b> ta med PC/MAC til den faglige sesjonen
                  :)
                </p>
              </li>
            </ul>
          </Collapsable>
        </div>
      </Container>
    </div>
  );
};

HelsinkiPraktisk.getInitialProps = ({ req }) => {
  return { userAgent: req ? req.headers['user-agent']! : navigator.userAgent };
};

export default HelsinkiPraktisk;
