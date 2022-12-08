import style from 'src/tjenesteomrader/shared/bottomText.module.css';
import Footer from 'src/tjenesteomrader/images/footer/footer';
import Divider from 'src/tjenesteomrader/images/divider/divider';
const BottomText = (props: { footerColor: string }) => {
  return (
    <div className={style.bottomText}>
      <div className={style.bottomText__content_divider}>
        <Divider />
      </div>

      <div className={style.bottomText__content}>
        <p className={style.bottomText__content_bigText}>
          Vår variant av digital tjeneste- og produktutvikling er læreglade og
          rause fagpersoner og et pragmatisk og fleksibelt rammeverk for design
          og utvikling. Vi brenner for utvikling av nye og eksisterende digitale
          produkter, og for å finne den beste prosessen for å gjøre det på ut
          fra forutsetningene som finnes i virksomheten, for kundene og brukerne
          av produktet, og for produktet i seg selv.
        </p>
        <div className={style.bottomText__content_wrapper}>
          <p>
            Vi er glade i følgende prinsipper når vi designer og utviklere
            digitale produkter og tjenester:{' '}
          </p>
          <ul className={style.bottomText__content_list}>
            <li>
              Vi som jobber med produkter er verdiskapere, problemløsere,
              innovatører og tilretteleggere. Vi forvalter og foredler idéer og
              muligheter, nye behov og utfordringer, forbedringsforslag og
              feedback fra brukerne
            </li>

            <li>
              Innsikt skapes ikke på et kontor eller møterom. Vi vil treffe
              brukerne i naturlige omgivelser slik at vi kjenner de ekte
              problemene på kroppen. Gjennom innsikt og utforsking, kreative
              prosesser og utprøving tester vi løsninger underveis i
              utviklingsprosessen. Vi jobber tverrfaglig og alltid med brukeren
              i sentrum.
            </li>
            <li>
              Vær bevisst på hva som skjer når du løser dette problemet, både
              for den som bruker produktet og for den som lager det. Hvilken
              verdi eller gevinst skapes av at du løser problemet? Er utfallet i
              tråd med visjonen og strategien til virksomheten din? Vil
              investeringen du gjør i å utvikle produktet eller tjenesten gi
              avkastning? Hjelper det brukeren med å nå sine mål eller løse
              floker i hverdagen?
            </li>
            <li>
              Involvering gjennom hele prosessen – både de som skal bruke
              produktet og de som skal lage det. Vi involverer organisasjonen
              rundt gjennom åpenhet og læredeling.
            </li>
            <li>
              Raske iterasjoner, feedback og læring gjennom bruk av funksjonelle
              prototyper og tekniske <i>proof of concepts</i>
            </li>
            <li>
              Så streber vi etter å utvikle den enkleste brukbare og verdifulle
              iterasjonen av produktet vårt (dette kalles for en MVP), slik at
              det ikke koster for mye å forkaste eller pivotere når vi lærer
              mer. NB! MVP er ikke et begrep på en hel løsning eller første
              versjon, men på et inkrement av løsningen.
            </li>
            <li>
              Samle data fra starten av, gjennom kontinuerlig dialog med
              brukeren og måling av bruk av produktet. Bruk den delen av
              organisasjonen som har aller mest dialog med kunden eller
              brukerne, som for eksempel salg eller kundeservice, som
              støttespillere.
            </li>
            <li>
              Apropos mål, sett konkrete mål for logiske perioder og styr
              utelukkende på dem. Viser det seg at målene er feil, pivoter også
              de. Målene må henge sammen med visjonen og de overordnede målene
              for virksomheten slik at produktet eller tjenesten din henger
              sammen i det økosystemet av produkter og tjenester som
              virksomheten din leverer
            </li>
            <li>
              Show & tell – vis fram innsikt, idéer og løsninger gjennom hele
              prosessen. Dette skaper eierskap og engasjement også utenfor
              teamet, og skaper rom for å få tilbakemeldinger og se
              avhengigheter produkter har
            </li>
          </ul>
          <p>
            Vi har erfart at det er noen sentrale forutsetninger som må være på
            plass om man skal lykkes med utvikling av digitale produkter og
            tjenester:
          </p>
          <ul className={style.bottomText__content_list}>
            <li>Forankring og tillit hos ledelsen</li>
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
          <p>
            Digital tjeneste- og produktutvikling er tett koblet sammen med{' '}
            <a href="./strategi">strategi</a> og kultur. Prinsippene gjelder for
            alle digitale tjenester og produkter, også{' '}
            <a href="./datadriv">datadrevet</a> produkt- og tjenesteutvikling.
            De gjelder også for det vi kan kalle legacy systemer, eller der hvor
            det finnes eksisterende systemer som skal moderniseres, integreres
            eller kanskje erstattes med andre produkter eller tjenester.{' '}
          </p>
          <p>
            Vi kan bidra med hele produktteam eller dedikerte roller til
            produktteam som allerede finnes, som for eksempel:
          </p>
          <ul className={style.bottomText__content_list}>
            <li>Produktledelse</li>
            <li>Tech lead eller arkitekt</li>
            <li>Design lead</li>
            <li>Utviklere og designere til team</li>
            <li>
              Støttespillere, som for eksempel agile coach og scrum master
            </li>
          </ul>
          <p>
            Ikke bare er vi en gjeng flinke konsulenter med bred erfaring og
            kompetanse, vi har vært ute en vinterdag før og vi er modige, rause
            og læreglade. Eller folkelige, som noen ville ha kalt det. Vi tror
            sterkt på at å jobbe som en integrert del av virksomheten er
            avgjørende for å lykkes, enten om vi deltar som medlemmer i
            eksisterende team eller om vi representerer et produktteam. Vi tror
            det bidrar til å skape noe mer enn produktet eller tjenesten vi
            utvikler, vi skal tross alt utvikle og bidra i samfunnet og miljøene
            rundt oss.
          </p>
          <p className={style.bottomText__content_bigText}>
            Ting vi er skikkelig gode på er:
          </p>
          <ul className={style.bottomText__content_list}>
            <li>
              Innsikt, i form av intervjuer og observasjon, tjeneste- og
              brukerreiser og dataanalyse
            </li>
            <li>Konseptutvikling, prototyping og testing</li>
            <li>Design for digitale flater</li>
            <li>Systemutvikling, fullstack</li>
            <li>Sikkerhet og personvern</li>
            <li>Test og kvalitet</li>
          </ul>
          <p className={style.bottomText__content_bigText}>
            Andre ting du trenger for å utvikle gode digitale produkter og
            tjenester er:
          </p>
          <ul className={style.bottomText__content_list}>
            <li>
              En retning og en plan. Vi kan bidra med{' '}
              <a href="./strategi">Strategiutvikling</a>
            </li>
            <li>
              Flinke folk som er dyktige på sine fagområder, som alltid vil lære
              mer og som er rause med sin kompetanse. Vi kan også bidra med{' '}
              <a href="./datadriv">Datadrevet</a> produkt- og tjenesteutvikling
            </li>
            <li>
              En kultur som er preget av tillit, trygghet og åpenhet. Vi kan
              bidra med Kulturutvikling.
            </li>
          </ul>
        </div>
      </div>
      <Footer color={props.footerColor} />
    </div>
  );
};

export default BottomText;
