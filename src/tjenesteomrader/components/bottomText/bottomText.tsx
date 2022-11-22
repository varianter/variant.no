import style from './bottomText.module.css';
import Footer from 'src/tjenesteomrader/images/footer/footer';
import Divider from 'src/tjenesteomrader/images/divider/divider';
const BottomText = () => {
  return (
    <div className={style.bottomText}>
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>

      <div className={style.bottomText__content}>
        <p className={style.bottomText__content_bigText}>
          Digital tjeneste- og produktutvikling er et fleksibelt rammeverk for
          utvikling av nye og eksisterende digitale produkter. Rammeverket
          beskriver en generisk prosess som kan tilpasses virksomheten,
          prosessen og produktets livssyklus. Rammeverket har noen klare
          prinsipper som vi mener er avgjørende for å lykkes med å utvikle
          produkter som skaper verdi – for virksomheten din, kundene dine og
          brukerne av produktet. Prinsippene gjelder for alle digitale tjenester
          og produkter, også det vi omtaler som dataprodukter.
        </p>
        <div className={style.bottomText__content_wrapper}>
          <h4>Prinsippene</h4>
          <ul className={style.bottomText__content_list}>
            <li>
              Vi som jobber med produkter er verdiskapere, problemløsere,
              innovatører og tilretteleggere. Vi forvalter og foredler idéer og
              muligheter, nye behov og utfordringer, forbedringsforslag og
              feedback fra brukerne
            </li>

            <li>
              Get out of the building, innsikt skapes ikke på et kontor eller
              møterom. Du må treffe brukerne i naturlige omgivelser slik at du
              også kjenner de ekte problemene på kroppen. Gjennom innsikt og
              utforsking, kreative prosesser og utprøving tester vi løsninger
              underveis i utviklingsprosessen. Vi jobber tverrfaglig og alltid
              med brukeren i sentrum.
            </li>
            <li>
              Vær bevisst på hva som skjer når du løser dette problemet, både
              for den som bruker produktet og for den som lager det. Hvilken
              verdi eller gevinst skapes av at du løser problemet? Er utfallet i
              tråd med visjonen og strategien til virksomheten din? Vil
              investeringen gi avkastning? Hjelper det brukeren med å realisere
              sine ambisjoner?
            </li>
            <li>
              Involvering gjennom hele prosessen – både de som skal bruke
              produktet og de som skal lage det
            </li>
            <li>
              Raske iterasjoner, feedback og læring gjennom bruk av funksjonelle
              prototyper og proof of concepts
            </li>
            <li>
              MVP må være stor nok til å brukes, men så liten at det ikke koster
              for mye å forkaste eller pivotere. NB! MVP er ikke et begrep på en
              hel løsning eller første versjon, men på neste inkrement av
              løsningen.
            </li>
            <li>
              Samle innsikt og data fra starten av, gjennom kontinuerlig dialog
              med brukeren og måling av bruk av produktet
            </li>
            <li>
              Apropos mål, sett konkrete mål for logiske perioder og styr
              utelukkende på dem. Vider det seg at målene er feil, pivoter også
              de. Målene må henge sammen med visjonen og de overordnede målene
              for virksomheten slik at produktet eller tjenesten din henger
              sammen i det økosystemet av produkter og tjenester som
              virksomheten din leverer
            </li>
            <li>
              Show & tell – vis fram innsikt, idéer og løsninger gjennom hele
              prosessen. Dette skaper eierskap og engasjement også utenfor
              teamet, og skaper rom for å få tilbakemeldinger og se
              avhengigheter
            </li>
          </ul>
          <h4>Forutsetninger:</h4>
          <ul className={style.bottomText__content_list}>
            <li>
              Du kommer ikke dit du vil uten forankring og tillit hos ledelsen
              og andre beslutningstakere
            </li>
            <li>
              Frihet og fred til å eksperimentere (det vi også kjenner som
              selvbestemmelse og autonomi)
            </li>
            <li>Ansvar og myndighet til å ta beslutninger</li>
            <li>
              Kontroll over innsatsfaktorene - du er mest sannsynlig avhengig av
              andre produkter og team i organisasjonen for å lykkes med
              produktet ditt
            </li>
            <li>
              Dedikerte pilotkunder som faktisk tar i bruk det du lager i
              hverdagen og aksepterer at den er ufullstendig gjennom
              utviklingsløpet, men som bruker løsningen likevel
            </li>
          </ul>
          <p className={style.bottomText__content_bigText}>
            Vi kan bidra med hele produktteam eller dedikerte roller til
            produktteam som allerede finnes, som for eksempel:
          </p>
          <ul>
            <li>Produktledelse</li>
            <li>Tech lead eller arkitekt</li>
            <li>Design lead</li>
            <li>Utviklere og designere til team</li>
            <li>
              Støttespillere, som for eksempel agile coach og scrum master
            </li>
          </ul>
        </div>
      </div>
      <Footer color={'#2F0516'} />
    </div>
  );
};

export default BottomText;
