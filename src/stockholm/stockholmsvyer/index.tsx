import styles from './index.module.css';
import Layout from './layout';

const logo = require('./assets/variant.svg');
const varianthuset = require('./assets/varianthuset.png');

export default function Home() {
  return (
    <Layout>
      <Wrapper mode="purple" className={styles.page1}>
        <Content mode="right_bottom">
          <h1>Hallaien!</h1>

          <p>
            Her har vi skrevet litt om våre tanker om å bygge Variant i Bergen.
            Nå er vi spente på hva du tenker. Hva tror du er viktig for å
            lykkes? Hvordan ønsker du å utvikle Bergen sammen med oss?
          </p>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page2}>
        <Content mode="left">
          <Block>
            <h2>Vil du utvikle Bergen?</h2>

            <p>
              Det er det vi ønsker du skal gjøre, – sammen med flere og sammen
              med oss. Etablere neste generasjons selskapskultur hvor
              medarbeideres potensial utnyttes til det fulle ved å gi tillit og
              transparens. En kultur som består av gjensidig raushet, åpenhet og
              læreglede. En kultur som har mot til å stå som et eksempel for
              andre og ydmykhet til å lære av de samme.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant Bergen AS?</h2>

            <img
              src={varianthuset}
              alt="Varianthuset på gågata i Trondheim"
              className={styles.page2__varianthuset}
            />
            <p>
              Det er det vi ønsker du skal gjøre, – sammen med flere og sammen
              med oss. Vi har tillit til dine tanker og forslag til hvordan
              selskapet mellom de syv fjell skal bygges og drives. Vi gir dere
              frihet som om dere skulle startet for dere selv. Så gir vi dere
              trygghet for at det dere ønsker å gjøre lykkes. Frihet og trygghet
              – vi kommer tilbake til det.
            </p>
          </Block>

          <Block>
            <h2>Vil du utvikle Variant?</h2>

            <p>
              Det er det vi ønsker du skal gjøre, – sammen med flere og sammen
              med oss. Vi vil ikke at du skal bli som oss. Å være en Variant
              handler om å lære av hverandre og ha egne tanker. Det er en
              Variants plikt å lære bort like sterkt som å lære av. Vi har lovd
              oss selv å alltid være ydmyk for andres erfaringer, kunnskap og
              idéer. Vi har erfaring med å prøve ut ting. Om det ikke fungerer
              så justerer vi. Dette gjelder stort og smått. Vi kommer med et
              standpunkt og en filosofi slik håndboken vår beskriver. Utover det
              ønsker vi at du og ditt team bidrar til å utvikle konsernet
              Variant på lik linje med oss.
            </p>
          </Block>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page3}>
        <Content mode="left">
          <h2>2025</h2>
          <div className={styles.strong}>
            <p>
              Vi har latt tankene spinne. Vi har latt fantasien løpe fritt.
              Hvordan tror vi at Variant Bergen kan bli? Sånn litt inn i
              framtida? Dette er tanker som du og ditt team må være med å
              forbedre og foredle. Så med alle forbehold, her er slik vi ser for
              oss at 2025 <i>kan</i> se ut.
            </p>
          </div>

          <div className={styles.em}>
            <p>
              I løpet året flytter Variant Bergen inn et eget lokale på
              Strandgaten med utsikt mot Bryggen. Lokalene er store og
              attraktive, og er optimalisert for samhandling. Store
              fellesarealer for å gjennomføre Variantdager, kundeworkshops og
              lignende. Her er det arbeidsplasser til en del, men en god andel
              jobber ute hos kunde. Dette er lokaler med sjel og som man føler
              seg stolte av.
            </p>

            <p>
              I løpet av høsten starter konsulent nr. 30. Det er en god balanse
              mellom designere og utviklere. I tillegg er det en litt mindre
              gruppe prosjektledere. I år omsetter selskapet for 45 millioner og
              genererer et overskudd på 4,5 millioner. Omsetningen kommer fra en
              lik fordeling mellom CV-baserte oppdrag, relasjonssalg og
              prosjekter med ansvar og risiko.
            </p>

            <p>
              Under både lokale og nasjonale variantdager, bidrar
              bergensvarianter med læreglede, faglige bidrag og innsats for å
              utvikle selskap og konsern. Variantdagen i november arrangeres
              bare for Bergen. Her gjennomføres 3 ulike faglige sesjoner
              parallelt. Et av dem er variant:skudd som bidrar til å gjøre
              konsulenter av de 6 nyutdannede variantene som startet i august.
              Hver måned publiserer bergensvarianter faglige bloggposer i
              tillegg publiserer de en månedlig video med utviklerinnhold.
            </p>
          </div>
        </Content>

        <Content mode="right" className={styles.page3__right}>
          <div className={styles.em}>
            <p>
              Designergruppen har nettopp feiret årsdag for deres månedlige
              designprogram i Variants YouTube-kanal. Selskapet hostet 4 ulike
              meetups i år, og har hatt faglig bidrag dobbelt så mange.
            </p>

            <p>
              I mai oppnådde Variant som helhet en 3.-plass i Universums kåring
              over Norges mest etter-traktede arbeidsgivere. Samme måned mottok
              vi 15 relevante søknader fra erfarne designere og utviklere som
              ønsker å jobbe i Bergen.
            </p>
          </div>
        </Content>
      </Wrapper>

      <Wrapper className={styles.page4}>
        <Content mode="left">
          <h2>Det første året</h2>

          <div className={styles.page4__padded}>
            <img src="/bg-page4-1.png" alt="" className={styles.page4__img} />
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
                Ved oppstart 1. september 2022 har vi 6 ansatte. Dette er da
                CEO, CTO og CDO sammen med tre andre ganske erfarne konsulenter.
                Alle er lett å få ut i oppdrag.
              </p>

              <p>
                Fokus resten av 2022 er todelt, rekruttere flere og få folk ut i
                oppdrag. I løpet av høsten har vi signert 6 nye, og de første
                begynner i januar. Idet selskapet er ett år jobber det 15
                mennesker der, 2 av dem er nyutdannede som startet i august.
                Bergen støtter seg kraftig på konsernets rekrutteringskapasitet.
              </p>
              <p>
                Allerede i september inviteres dere med på Varianttur med
                fadderen Variant Trondheim. Da blir dere sammen med følge,
                samboer eller kone introdusert for oss, og vi og dere får
                sjansen til å bli godt kjent.
              </p>
              <p>
                Det første halvåret selger vi oppdrag basert på CV-salg til
                eksisterende Variantkunder og gjennom megleravtaler og
                rammeavtaler som Variant har tilgang til. På våren har Variant
                Bergen også begynt å vinne egne kunder. Men gjennom hele det
                første året handler det om CV-salg, og det må rekrutteringen ta
                høyde for. Konsernet bidrar med salgskompetanse og -kapasitet.
              </p>
            </div>
          </div>
        </Content>

        <Content mode="right">
          <div className={styles.em}>
            <p>
              Det første året gjennomføres Variantdager dels sammen med Oslo
              eller Trondheim og dels på egenhånd. Noen ganger reiser varianter
              mellom byene, andre ganger benyttes video. 1. september 2023
              feirer Bergen ettårsdagen med en Varianttur på egenhånd sammen med
              følge til Reykjavik.
            </p>

            <p>
              Den første tiden leier Variant et kontor i Spaces Vaskerelven.
              Antallet rom og arbeidsplasser utvides etter hvert som vi vokser.
              Konsernet stiller med struktur- og systemkapital. Konsernets
              ledelse jobber tett på en coachende måte med Bergens ledergruppe.
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
