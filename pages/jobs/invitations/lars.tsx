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
            <h2 className={style.omVariant__title}>Hei Lars</h2>
          </header>
          <div>
            <p>
              Det er med stor glede vi inviterer deg videre i CDO-prosessen. Den videre planen består 
              av flere steg og er beskrevet i oversikten under.
            </p>
            <p> 
              Blant annet ønsker vi gjerne at du den 16. april kan bruke en liten dag på Varianthuset 
              i Trondheim sammen med oss. Målet med denne dagen er å bli bedre kjent med deg, men 
              også at du får truffet flere av oss. Adressen er Thomas Angells gate 10. Det er midt i 
              sentum. Det er fint hvis du kan være i Trondheim fra 12.00 til 17.00 denne dagen. 
            </p>
          </div>

          <div>
            <h3 className="fancy">Tidsplan</h3>
            <ul className={style.agenda}>
              <li>
                <span className={style.time}> 13. april</span>Kartlegging av kommunikasjons&shy;preferanser (video)
              </li>
              <li>
                <span className={style.time}> 16. april</span>
                  <ul >
                    <li>Styrkesamtale</li> 
                    <li>Samarbeidscase</li>
                  </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="fancy">Kartlegging av kommunikasjons&shy;preferanser</h3>
            <img
              className={style.right_image}
              src="/images/odd-morten.png"
              alt="Odd Morten Sveås"
            />
            <p>
              Vi gjennomfører kartlegging av kommunikasjonspreferanser for alle varianter. Dette gir
              oss et godt verkøty til å forstå hverandre og hvordan vi som gruppe fungerer sammen. 
            </p>
            <p>
              Vi ønsker å sette av ca 1,5 time til dette. Omtrent de første 10 minuttene 
              brukes til svare på en undersøkelse. Denne gir deg score på ulike akser.  Gjennom resten 
              av samtalen bruker vi på å snakke om resultatet fra testen.  
            </p>
            <p>
              Dette er altså ingen personlighettest, men kartlegging av preferanser. Du trenger ikke 
              forberede deg til denne på noen som helst måte. Odd Morten kommer til å gjennomføre 
              denne samtalen.
            </p>
          </div>

          <div>
            <h3 className="fancy">Styrkesamtale</h3>
            <p>
              Som du sikkert er klar over baserer vi vår medarbeiderutvikling på
              positiv psykologi og legger styrkebasert utvikling til grunn for
              hvordan vi ønsker bygge varianter. Første ledd i en slik
              utvikling er å kartlegge våre styrker og våre verdier. Dette gjør
              vi for alle mennesker i selskapet gjennom en styrkesamtale.
            </p>

            <p className={style.prep}>
              Til samtalen ønsker vi at du tenker igjennom: I hvilke
              situasjoner er du mest motivert? Hva gjør at du blir frustrert,
              irritert eller sint? Hvordan liker du å løse utfordringer?
            </p>
            <p>
              Også denne samtalen er det som Odd Morten som gjennomfører, og som et resultat
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
              src="/images/linn.png"
              alt="Linn Sandvik"
            />
            <p className={style.prep}>
              Til caset ønsker vi at du forbereder en innledning der
              du forteller litt om dine tanker rundt Oslos rekruttering på kort og lengre sikt. 
              Format er helt opp til deg. Lengden bør ikke være mer enn 10 minutter, og kort er
              bedre enn langt.
            </p>
            <img
              className={style.right_image}
              src="/images/marius.png"
              alt="Marius Krakeli"
            />
            <p>
              Under denne seansen får du blant annet hilse på Linn Sandvik, som har fått og tatt 
              oppgaven med å lede Osloselskapet. Linn begynner ikke før i august, men har mulighet 
              til å bruke litt tid på å bistå oss med å etablere oppstartsteamet i Oslo. 
            </p>

            <p>
              Etter din innledning vil du, Linn, Tonje og Marius spinne videre
              på dine tanker. Vi kommer til å utfordre eller male videre, og
              ønsker at du gjør det samme. Altså slik vi faktisk kommer til å
              jobbe når vi samarbeider om å bygge et selskap i framtiden. Idéer
              som du bringer til torgs, skal vi ikke stjele.
            </p>
            <img
              className={style.right_image}
              src="/images/tonje.png"
              alt="Tonje Evanger"
            />
            <p>
              Vi tror samarbeidsevne og kompabilitet med resten av
              konsernledelsen er en nøkkel til å lykkes. Hovedpoenget med denne
              sesjonen er derfor å se på hvordan vi samarbeider. Hvordan vi
              klarer å utnytte hverandres potensial. Hvordan ditt samspill i
              gruppen vil være. Sluttproduktet, hvis vi kommer så langt, kommer
              vi ikke til å evaluere.
            </p>
          </div>

          <div>
            <h3 className="fancy">Utlegg</h3>
            <p>
              Vi setter stor pris på at du er villig til å bruke en dag på oss
              her i Trondheim. Vi dekker selvsagt kostnader til selve reisen. Vi
              ber deg derfor å legge ut for turen, og så sende oss kopi av
              kvitteringer sammen med bankkontonummer på mail til{' '}
              <a
                href="mailto:faktura@variant.no?subject=Utlegg i forbindelse med intervju&body=Vedlagt kvitteringer for min reise til Trondheim i forbindelse med intervju.%0D%0A
                %0D%0A
                Utbetales til kontonr:"
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
