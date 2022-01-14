import Head from 'next/head';
import Layout from 'src/layout';
import { MainInfo } from '../celie';
import style from '../invitations.module.css';

export default function Invitation() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Velkommen til Trondheim</title>
        </Head>
        <section className={style.omVariant}>
          <header>
            <h2 className={style.omVariant__title}>Velkommen Erik!</h2>
          </header>
          <div>
            <p>
              Det er med stor glede vi inviterer til en liten dag hos oss på
              Varianthuset i Trondheim 19. januar. Målet med dagen er å bli
              bedre kjent med deg, men også at du får truffet flere av oss.
              Adressen er Thomas Angells gate 10. Det er midt i sentum.
            </p>
          </div>

          <div>
            <h3 className="fancy">Tidsplan 19. januar</h3>
            <ul className={style.agenda}>
              <li>
                <span className={style.time}>11.00-12.00</span> 💪🏻 Styrkesamtale
              </li>
              <li>
                <span className={style.time}>13.00-15.00</span> 👩‍👦‍👦
                Samarbeidscase{' '}
              </li>
              <li>
                <span className={style.time}>15.30-17.00</span> 🥘 Enkel middag
              </li>
            </ul>
          </div>

          <MainInfo />
        </section>
      </div>
    </Layout>
  );
}
