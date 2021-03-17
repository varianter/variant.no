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
        <div>
          <header>
            <h2>Velkommen Linn</h2>
          </header>
          <div>
          <p>Det er med stor glede vi inviterer til en liten dag hos oss på Varianthuset i Trondheim.
            Målet med dagen er å bli bedre kjent med deg, men også at du får truffet flere av oss. 
          </p>
          </div>

          <div>
            <h3>Tidsplan torsdag 25. mars</h3>
              <ul className={style.agenda}>
                <li><span className={style.time}>13.00-14.00</span>  💪🏻 Styrkesamtale</li>
                <li><span className={style.time}>15.00-17.00</span>  👩‍👦‍👦 Samarbeidscase </li>
                <li><span className={style.time}>17.00-18.30</span>  🥘 Enkel middag</li>
              </ul>
                  
          </div>
          <div>
            <h3>Styrkesamtale</h3>
            <p>Som du sikkert er klar over baserer vi vår medarbeiderutvikling på positiv psykologi 
              og legger styrkebasert utvikling til grunn for hvordan vi ønsker bygge våre varianter.             
              Første ledd i en slik utvikling er å kartlegge våre styrker og våre verdier. Dette 
              gjør vi med alle mennesker i selskapet gjennom en styrkesamtale. 
            </p>

            <p>Til denne samtalen ønsker vi at du tenker igjennom: 
              <ul>
                <li>I hvilke situasjoner er du mest motivert?</li>
                <li>Hva gjør at du blir frustrert, irritert eller sint?</li>
                <li>Hvordan liker du å løse utfordringer?</li>
              </ul>
              Tonje kommer til å gjennomføre denne samtalen, og som et resultat får du 
              ditt eget styrkekart. 
            </p>
          </div>

          <div>
          <h3>Samarbeidscase - Rekrutteringsstrategi</h3>
            <p>
            En forutsetning for å lykkes i Oslo er at vi lykkes med rekrutteringen. Vi har derfor 
            lyst til at å kjøre et samarbeidscase på hvordan vi kan utvikle en god 
            rekrutteringsstrategi for Variant Oslo.
        
            </p>
            <p>
            Til denne delen ønsker vi at du innleder, med at du forteller litt om dine 
            tanker rundt dette. Format er helt opp til deg. Lengden bør ikke være mer enn 
            10 minutter, og kort er bedre enn langt.
            </p>
            <p>
            Etter din innledning vil du, Anders, Mikael og jeg spinne videre på dine tanker. 
            Vi kommer til å utfordre eller male videre, og ønsker at du gjør det samme. 
            Altså slik vi faktisk kommer til å jobbe når vi samarbeider om å bygge et 
            selskap i framtiden. Idéer som du bringer til torgs, skal vi ikke stjele.
            </p>
            <p>
            Vi tror samarbeidsevne og kapabilitet med resten av konsernledelsen er en 
            nøkkel til å lykkes. Hovedpoenget med denne sesjoner er derfor å se på 
            hvordan vi samarbeider. Hvordan vi klarer å utnytte hverandres potensial. 
            Hvordan ditt samspill i gruppen vil være. Sluttproduktet, hvis vi kommer så 
            langt, kommer vi ikke til å evaluere.
            </p>
          </div>

          <div>
            <h3>Utlegg</h3>
              <p>
                Vi setter stor pris på at du er villig ti å bruke en dag på oss her i Trondheim. 
                Vi dekker selvsagt kostnader til selve reisen. Vi ber deg derfor å legge ut for 
                turen, og så sende oss kopi av kvitteringer sammen med kontonummer på mail 
                til <a href="mailto:faktura@variant.no?subject=Utlegg i forbindelse med intervju&body=Vedlagt kvitteringer for min reise til Trondheim i forbindelse med intervju.%0D%0A
                %0D%0A
                Kontonr:">faktura@variant.no</a>  
       
              </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}