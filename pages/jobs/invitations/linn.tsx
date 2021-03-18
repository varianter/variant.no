import Head from 'next/head';
import Layout from 'src/layout';
import style from './invitations.module.css';

export default function Invitation() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Velkommen til Trondheim</title>
        </Head>
        <section className={style.omVariant}>
          <header>
            <h2 className={style.omVariant__title}>Velkommen Linn</h2>
          </header>
          <div>
            <p>
              Det er med stor glede vi inviterer til en liten dag hos oss på
              Varianthuset i Trondheim. Målet med dagen er å bli bedre kjent med
              deg, men også at du får truffet flere av oss. Adressen er Thomas
              Angells gate 10. Det er midt i sentum.
            </p>
          </div>

          <div>
            <h3 className="fancy">Tidsplan torsdag 25. mars</h3>
            <ul className={style.agenda}>
              <li>
                <span className={style.time}>13.00-14.00</span> 💪🏻 Styrkesamtale
              </li>
              <li>
                <span className={style.time}>15.00-17.00</span> 👩‍👦‍👦
                Samarbeidscase{' '}
              </li>
              <li>
                <span className={style.time}>17.00-18.30</span> 🥘 Enkel middag
              </li>
            </ul>
          </div>
          <div>
            <h3 className="fancy">Styrkesamtale</h3>
            <img
              className={style.right_image}
              src="/images/tonje.png"
              alt="Tonje Evanger"
            />
            <p>
              Som du sikkert er klar over baserer vi vår medarbeiderutvikling på
              positiv psykologi og legger styrkebasert utvikling til grunn for
              hvordan vi ønsker bygge våre varianter. Første ledd i en slik
              utvikling er å kartlegge våre styrker og våre verdier. Dette gjør
              vi med alle mennesker i selskapet gjennom en styrkesamtale.
            </p>

            <p className={style.prep}>
              Til denne samtalen ønsker vi at du tenker igjennom: I hvilke
              situasjoner er du mest motivert? Hva gjør at du blir frustrert,
              irritert eller sint? Hvordan liker du å løse utfordringer?
            </p>
            <p>
              Tonje kommer til å gjennomføre denne samtalen, og som et resultat
              får du ditt eget styrkekart.
            </p>
          </div>

          <div>
            <h3 className="fancy">Samarbeidscase - Rekrutteringsstrategi</h3>
            <p>
              En forutsetning for å lykkes i Oslo er at vi lykkes med
              rekrutteringen. Vi har derfor lyst til at å kjøre et
              samarbeidscase på hvordan vi kan utvikle en god
              rekrutteringsstrategi for Variant Oslo.
            </p>
            <img
              className={style.right_image}
              src="/images/mikael.png"
              alt="Mikael Brevik"
            />
            <p className={style.prep}>
              Til denne delen ønsker vi at du forbereder en innledning, med at
              du forteller litt om dine tanker rundt dette. Format er helt opp
              til deg. Lengden bør ikke være mer enn 10 minutter, og kort er
              bedre enn langt.
            </p>
            <img
              className={style.right_image}
              src="/images/anders.png"
              alt="Anders Hammervold"
            />
            <p>
              Etter din innledning vil du, Anders, Mikael og jeg spinne videre
              på dine tanker. Vi kommer til å utfordre eller male videre, og
              ønsker at du gjør det samme. Altså slik vi faktisk kommer til å
              jobbe når vi samarbeider om å bygge et selskap i framtiden. Idéer
              som du bringer til torgs, skal vi ikke stjele.
            </p>
            <img
              className={style.right_image}
              src="/images/odd-morten.png"
              alt="Odd Morten Sveås"
            />
            <p>
              Vi tror samarbeidsevne og kapabilitet med resten av
              konsernledelsen er en nøkkel til å lykkes. Hovedpoenget med denne
              sesjoner er derfor å se på hvordan vi samarbeider. Hvordan vi
              klarer å utnytte hverandres potensial. Hvordan ditt samspill i
              gruppen vil være. Sluttproduktet, hvis vi kommer så langt, kommer
              vi ikke til å evaluere.
            </p>
          </div>

          <div>
            <h3 className="fancy">Utlegg</h3>
            <p>
              Vi setter stor pris på at du er villig ti å bruke en dag på oss
              her i Trondheim. Vi dekker selvsagt kostnader til selve reisen. Vi
              ber deg derfor å legge ut for turen, og så sende oss kopi av
              kvitteringer sammen med kontonummer på mail til{' '}
              <a
                href="mailto:faktura@variant.no?subject=Utlegg i forbindelse med intervju&body=Vedlagt kvitteringer for min reise til Trondheim i forbindelse med intervju.%0D%0A
                %0D%0A
                Kontonr:"
              >
                faktura@variant.no
              </a>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
