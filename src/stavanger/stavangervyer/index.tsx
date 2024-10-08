import styles from './index.module.css';
import Layout from './layout';

const logo = require('./assets/variant.svg');
const varianthuset = require('./assets/varianthuset.png');

export default function Home() {
  return (
    <Layout>
      <Wrapper mode="purple" className={styles.page1}>
        <Content mode="right_bottom">
          <h1>Hallo der!</h1>

          <p>
            Her har vi skrevet litt om våre tanker om å bygge Variant i
            Stavanger. Nå er vi spente på hva du tenker. Hva tror du er viktig
            for å lykkes? Hvordan ønsker du å utvikle Stavanger sammen med oss?
          </p>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page2}>
        <Content mode="left">
          <Block>
            <h2>Vil du utvikle Stavanger?</h2>

            <p>
              For det er nettopp det vi ønsker du skal gjøre, – sammen med flere og sammen med oss. 
              Stavanger har allerede et rikt og spennende næringsliv, og vi tror vi kan være med å utfordre her. 
              Vil vil etablere neste generasjons selskapskultur hvor medarbeideres potensial utnyttes til det 
              fulle ved å gi tillit og transparens. En kultur som består av gjensidig raushet, åpenhet og læreglede. 
              En kultur som har mot til å stå som et eksempel for andre og ydmykhet til å lære av de samme.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant Stavanger AS?</h2>

            <img
              src={varianthuset}
              alt="Varianthuset på gågata i Trondheim"
              className={styles.page2__varianthuset}
            />
            <p>
              For det er nettopp det vi ønsker du skal gjøre, – sammen med flere og sammen 
              med oss. Vi har tillit til dine tanker og 
              forslag til hvordan selskapet mellom de syv fjell skal bygges og drives. Vi gir dere 
              frihet som om dere skulle startet for dere selv. 
              Så gir vi dere trygghet for at det dere ønsker å gjøre lykkes. 
              Frihet og trygghet – vi kommer tilbake til det.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant?</h2>

            <p>
              For det er nettopp det vi ønsker du skal gjøre, – sammen med flere og sammen med oss. 
              Vi vil ikke at du skal bli som oss. Å være en Variant handler om å lære av hverandre og ha 
              egne tanker. Det er en Variants plikt å lære bort like sterkt som å lære av. Vi har lovd 
              oss selv å alltid være ydmyk for andres erfaringer, kunnskap og idéer. Vi har erfaring 
              med å prøve ut ting. Om det ikke fungerer så justerer vi. Dette gjelder stort og smått. 
              Vi kommer med et standpunkt og en filosofi slik håndboken vår beskriver. Utover det ønsker 
              vi at du og ditt team bidrar til å utvikle konsernet Variant på lik linje med oss.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page3}>
        <Content mode="left">
          <h2>2028</h2>
          <div className={styles.strong}>
            <p>
              Vi har latt tankene spinne. Vi har latt fantasien løpe fritt. 
              Hvordan tror vi at Variant Stavanger kan bli? Sånn litt inn i framtida? 
              Dette er tanker som du og ditt team må være med å forbedre og foredle. 
              Så med alle forbehold, her er slik vi ser for oss at oktober 2028 <i>kan</i> se ut.
            </p>
          </div>

          <div className={styles.em}>
            <p>
              Den store snakkisen under lunsjen den siste tiden er våre nye lokaler. 
              Vi har til de grader vokst fra Vingtor. De har vært en god match for oss 
              så langt, men nå kjenner vi behovet for å “flytte hjemmefra.” 18.-20. 
              desember går flyttelasset og fra 2. januar holder vi til i egne lokaler i 
              Kirkegata.
            </p>
            <p>
              Mandag 2. oktober startet Arne og Anna, hennholdsvis designer og 
              utvikler. Arne kommer fra Bouvet hvor han har jobbet som interaksjonsdesigner 
              mens Anna har vært utvikler i Miles de siste 3 årene. Med disse to om 
              bord er vi nå 31 konsulenter i Stavanger. Og i neste måned får vi en transfer 
              fra Variant Oslo, da Torill flytter hjem etter sju år i hovedstaden.
            </p>

            <p>
              Fredag 6. oktober holder vi som vanlig variantdag den føste fredagen i måneden. 
              Keynote for dagen holdes av produktsjef Sarah fra vår kunde Aker BP. Her forteller han 
              hvordan Aker via digitalisering og predikativ modellering reduserte karbonavtrykket for sine 
              utviklingsprosjekter med 27%. Faktisk helt nede på 3,1 kg carbon emisjon per fat Olje. Vi er ikke så rent lite 
              stolte av å ha vært en betydelig bidragsyter i denne utviklingen. 
              Videre gjennomføres variantdagen i to ulike spor. For utviklerne har vi et videregående 
              kurs i Kotlin og Spring som nå endlig har fått stor oppmerksomhet hos våre kunder. På designsiden har 
              Tonje Evanger kommet på besøk, og sammen med henne har vi sesjoner innen tjenestedesign. 
              Dagen avsluttes som vanlig med at vår daglige leder går igennom selskapstatus, hvor forrige måneds resultater 
              legges fram sammen med prognosene for året. 
            </p>
          </div>
        </Content>

        <Content mode="right" className={styles.page3__right}>
          <div className={styles.em}>
            <p className={styles.page7}>
              Etter variantdagen arrangeres rebus. Dette har blitt en tradisjon i Variant Stavanger, der ulike team 
              drar rundt i byens gater og streder for å finne løsninger på ulike gåter som vår gåtemester lager. 
              I fjor var noen av oppgavene så vanskelige at ene teamet endte på Backstage i stedet. 
            </p>

            <p>
              I mai oppnådde Variant som helhet en 3.-plass i Universums kåring
              over Norges mest etter-traktede arbeidsgivere. Samme måned mottok
              vi 15 relevante søknader fra erfarne designere og utviklere som
              ønsker å jobbe i Stavanger.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page4}>
        <Content mode="left">
          <h2>Det første året</h2>

          <div className={styles.page4__padded}>
            <img
              src={require('./assets/bg-page4-1.png')}
              alt=""
              className={styles.page4__img}
            />
            <div className={styles.strong}>
              <p>
                Også det første året vil i stor grad påvirkes av hva du og ditt
                team ønsker å gjøre og ønsker å prøve. Vi har også her noen
                tanker over hva vi tror kan være en fin tilnærming de første 12
                måneder. Fortsatt må dette ses på som vårt forslag, vi er
                superspent på hva du tenker på dette.
              </p>
            </div>

            <div className={styles.em}>
              <p>
                Ved oppstart 1. januar 2025 er vi 7 ansatte. Dette er da
                CEO, CTO og CDO sammen med fire andre ganske erfarne konsulenter.
                Alle er lett å få ut i oppdrag.
              </p>

              <p>
                Fokus resten av 2025 er todelt, rekruttere flere og få folk ut i
                oppdrag. I løpet av våre har vi signert 6 nye, og de første
                begynner i mai. Idet selskapet er ett år jobber det 15
                mennesker der, 2 av dem er nyutdannede som startet i august.
                Stavanger støtter seg kraftig på konsernets
                rekrutteringskapasitet.
              </p>
              <p>
                Allerede i september inviteres dere med på Varianttur med
                Variant Trondheim. Da blir dere sammen med følge 
                introdusert for Trønderne, og vi og dere får
                sjansen til å bli godt kjent.
              </p>
              <p>
                Det første halvåret selger vi oppdrag basert på CV-salg til
                eksisterende Variantkunder og gjennom megleravtaler og
                rammeavtaler som Variant har tilgang til. På høsten har Variant
                Stavanger også begynt å vinne egne kunder. Men gjennom hele det
                første året handler det om CV-salg, og det må rekrutteringen ta
                høyde for. Konsernet bidrar med salgskompetanse og -kapasitet.
              </p>
            </div>
          </div>
        </Content>

        <Content mode="right">
          <div className={styles.em}>
            <p>
              Det første året gjennomføres Variantdager dels sammen andre selskaper 
              og dels på egenhånd. Noen ganger reiser varianter
              mellom byene, andre ganger benyttes video. 5. september 2026
              drar vi på Varianttur sammen med følge til Reykjavik.
            </p>

            <p>
              Den første tiden leier Variant et kontor i Vingtor arbeidsbar.
              Antallet rom og arbeidsplasser utvides etter hvert som vi vokser.
              Konsernet stiller med struktur- og systemkapital. Konsernets
              ledelse jobber tett på en coachende måte med Stavangers ledergruppe.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page5}>
        <Content mode="left">
          <Block>
            <h2>Frihet</h2>

            <p>
              Vi husker det så godt. Hvor givende det var å kunne forme
              selskapet slik vi mente det helst skulle gjøres. Noen ganger
              trådte vi feil og måtte justere kurs, men det var like fullt så
              morsomt. Denne opplevelsen ønsker vi å gi deg og ditt team. Og det
              er ikke først og fremst for at vi er så snille eller så ivrig på å
              gi folk gode opplevelser, selv om vi er det også. Av samme grunn
              som vi har tillit til at summen av enkeltpersoners vurderinger
              overgår ledelsens så tror vi også at ved å gi autonomi, frihet og
              tillit til de ulike selskapene i konsernet vil selskapene som sum
              bli bedre enn hvis styrt fra en konsernledelse. Vi er derfor ute
              etter ditt entreprenørskap og din gründerånd. Dette skal være som
              å starte for deg selv, bare med trygghet.
            </p>
          </Block>
        </Content>

        <Content mode="right">
          <Block>
            <h2>Trygghet</h2>

            <p>
              Det er mange ting som må funke for at en konsulentstartup skal
              fly. Dette strekker seg fra finansiering, salg, rekruttering,
              bemanning, kulturbygging, kompetansebygging, etablering av
              strukturkapital og systemkapital. Så skal vi være litt ærlige. Alt
              dette er ikke like morsomt. Alt går ikke like fort. På den andre
              siden er mye av dette utrolig givende, vi kan hjelpe dere der du
              og ditt team ikke har deres styrker, slik at dere kan jobbe med
              det dere er gode på.
            </p>

            <p>
              For det er ikke slik at vi tenker at dere skal greie dere selv opp
              i autonomi og tillit. Vi har mye erfaring som vi gjerne deler med
              dere, men da først og fremst som coacher og ikke veiledere.
            </p>

            <p>
              Mye strukturkapital og systemkapital har vi på plass. Lite av
              dette er obligatorisk, men vi antar nesten at du ikke brenner for
              å føre regnskapet selv. Eller bygge ditt eget bemanningssystem. Vi
              har også en håndbok som vi er ikke så lite stolte av. Den tipper
              vi du gjerne vil utnytte.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper mode="purple" className={styles.backPage}>
        <Content mode="center_bottom">
          <img src={logo} alt="Variant" />
        </Content>
      </Wrapper>
    </Layout>
  );
}

type WrapperProps = React.PropsWithChildren<{
  mode?: 'purple' | 'default';
  className?: string;
}>;
function Wrapper({ children, mode = 'default', className }: WrapperProps) {
  const style = styles[`wrapper__${mode}`];
  return (
    <section className={and(styles.wrapper, style, className)}>
      {children}
    </section>
  );
}

type ContentProps = React.PropsWithChildren<{
  mode?: 'right' | 'left' | 'right_bottom' | 'left_bottom' | 'center_bottom';
  className?: string;
}>;
function Content({ children, mode = 'right_bottom', className }: ContentProps) {
  const style = styles[`content__${mode}`];
  return (
    <div className={and(styles.content, style, className)}>{children}</div>
  );
}

type BlockProps = React.PropsWithChildren<{
  className?: string;
}>;
function Block({ children, className }: BlockProps) {
  return <div className={and(styles.block, className)}>{children}</div>;
}

function and(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
