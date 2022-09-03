import { WhichButtonPressed } from 'src/summersplash2022/utils/utils';
import style from 'src/summersplash2022/index.module.css';

const HandBooKPagesJob = ({ selectedButton }: WhichButtonPressed) => {
  if (selectedButton === 'Formal og verdier') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#68E9DD',
            maxWidth: 'fit-content',
            padding: '3%',
            color: '#333333',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Formål og verdier
        </h3>
        <p className={style.handbookParagraphs}>
          Så, hvorfor Variant? Hvorfor er vi egentlig til? Vårt formål er å
          utvikle samfunnet vi lever i. Flinke personer som tenker nye tanker,
          og så lager de riktige løsningene.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Våre tre grunnverdier er:</strong>
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Raushet</strong> - Dette vises i hvordan vi møter hverandre,
          våre kunder og folk i nærmiljøet.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Åpenhet</strong> - Hva i all verden skal et selskap tjene på å
          holde informasjon hemmelig for sine ansatte?
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Læreglede</strong> - Vi er folk som ønsker å lære og lære
          bort. Vi skal ha ydmykhet nok til å skjønne at vi kan lære noe fra
          alle, og troen på at alle kan lære noe fra oss.
        </p>
      </div>
    );
    return (
      <div>
        <h3 className={style.handbookHeaderDeskotop}>Tillit og ansvar</h3>
        <p className={style.handbookParagraphs}>
          Variant vil gi sine ansatte det beste, vi som jobber her forventes å
          gi det samme. Vi gir full tillit til hverandre fordi vi tror at alle
          er i stand til å gjøre riktige valg. Hva du trenger for å lære noe
          nytt eller gjøre jobben din er opp til deg. Vi forventer bare at du
          selv vurderer kostnadene opp mot vinningen og sparrer med andre når
          det trengs.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Ha det morsomt</strong> - Et arbeidsliv består av maaaange
          timer. Vi vil gjøre noe som gir mening og samtidig ha det morsomt. Det
          spekuleres i om Variant eksisterer fordi det er hyggeligere å skape
          noe sammen med mennesker man trives med. Det får vi nok ikke svaret
          på, men inntil videre så kan du le ofte og gjøre gærne ting!
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Vær stolt</strong> - Vi vil at du skal være stolt av det du
          gjør. Er du ikke den stolte typen? Da vil vi gjerne at du har mot til
          å endre på det. Du skal kunne være stolt av å være her, nettopp fordi
          du har gjort så mye bra tidligere. Så rett deg opp i ryggen, og si at
          du jobber i Variant. 🦄
        </p>
      </div>
    );
  } else if (selectedButton === 'Arbeidet') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#F1EDDF',
            maxWidth: 'fit-content',
            padding: '3%',
            color: '#333333',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Arbeidet
        </h3>
        <p className={style.handbookParagraphs}>
          <strong>Fleksitid - </strong>En arbeidsdag er på 7,5 timer. Hvordan
          disse fordeles på en dag bestemmer du selv, gitt at ikke annet er
          avtalt på prosjektet du jobber på.
        </p>
        <p className={style.handbookParagraphs}>
          Det kan også hende at du i noen perioder ønsker eller trenger å kunne
          bruke mindre tid på jobb. Derfor har du hos oss muligheten til å senke
          stillingsgraden i perioder. Med åpenhet mellom deg, ledere og kunden
          om behovet og ønskene dine, vil vi sammen jobbe for å finne løsningen
          alle trives med.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Kompetanseutvikling - </strong>For å være gode er det viktig
          med faglig påfyll! Variant tilrettelegger for at alle ansatte skal
          kunne utvikle seg, både faglig og personlig. Dette gjøres blant annet
          gjennom{' '}
          <a href="/handbook#variantdag" style={{ color: 'white' }}>
            Variantdager
          </a>
          , Variant:{' '}
          <a href="/handbook#utviklingsprogram" style={{ color: 'white' }}>
            skudd
          </a>{' '}
          og{' '}
          <a href="/handbook#kurs-og-konferanser" style={{ color: 'white' }}>
            tilrettelegging for deltagelse på konferanser.
          </a>
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Verktøy - </strong>Skikkelig jobb krever skikkelige verktøy.
          Du velger selv datamaskin og størrelse, farge og modell på den. Vi
          stoler på at du velger det beste for at du skal kunne gjøre en best
          mulig jobb. Det er ikke et gitt antall års brukstid på maskinene. Du
          får en ny maskin når behovet oppstår, uavhengig av om det har gått ett
          eller tre år.
        </p>
        <p className={style.handbookParagraphs}>
          Som konsulenter selger vi ekspertise og kunnskap, så invester gjerne i
          bøker, kurs og annet læringsmateriale. Bare husk å sende regningen til
          regnskap. Den betales med stor glede! 🤓
        </p>
      </div>
    );
  } else if (selectedButton === 'Det sosiale') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#FFC4BC',
            maxWidth: 'fit-content',
            padding: '3%',
            color: '#333333',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Det sosiale
        </h3>
        <p className={style.handbookParagraphs}>
          <strong>Variantdag - </strong>I tillegg til faglig påfyll er dette en
          god mulighet til å ha det hyggelig sammen.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Donut - </strong>Annenhver uke blir du satt sammen med en
          tilfeldig trekt kollega, og oppfordret til å bruke litt tid på å bli
          bedre kjent. Gjerne over en kaffe eller en donut.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Månedlig frokost - </strong>
          En gang i måneden møtes vi ute for å spise en digg frokost sammen.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Fester (Nyttårskalas, julebord, sommerfest) - </strong>
          Selv om studenttilværelsen kanskje snart er over blir det fortsatt
          mange muligheter for sene kvelder. Ta gjerne med en +1!
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Utenlandstur - </strong>I september hvert år drar vi på
          Varianttur.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Slackkanaler - </strong>
          Har du noe du brenner for eller har lyst til å lære mer om? I Slack
          har vi kanaler for alt fra musikk, planter og gaming til en kanal for
          diskusjon av ølkalendere. Det er alltids mulig å lage flere også.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Sossis-fond - </strong>I tillegg til de faste sosiale
          aktivitetene har vi et fond på 50 000 kr som brukes på andre sosiale
          aktiviteter. Dette kan være aktiviteter som hytteleie i Sverige,
          fjellturer, Rush trampolinepark, matlaging eller hva enn vi kommer på
          kan være en god idé.
        </p>
      </div>
    );
  } else if (selectedButton === 'Goder') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#FAD2E2',
            maxWidth: 'fit-content',
            padding: '3%',
            color: '#333333',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Goder
        </h3>
        <p className={style.handbookParagraphs}>
          <strong>God lønn - </strong>Dette sikrer den stabiliteten og friheten
          vi ønsker å gi. Sjekk ut{' '}
          <a href="/kalkulator" style={{ color: 'white' }}>
            lønnskalkulatoren
          </a>{' '}
          vår eller scroll lenger ned for å lese mer om lønn
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Gadgets - </strong>Hvert år har du 10 000 pluss moms (dvs.
          12500 i praksis) til å kjøpe gadgets.{' '}
          <a href="/gadgetusage/trondheim" style={{ color: 'white' }}>
            Trykk her for å se hva andre har kjøpt
          </a>
          .
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Trening - </strong>
          Variant dekker treningsutgifter opptil 500/mnd (dette kan være
          medlemskap på senter, treningsutstyr eller noe annet
          treningsrelatert).
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Fri telefoni (innenfor rimelighetens grenser).</strong>
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Bredbånd hjemme - </strong>Variant dekker bredbånd inntil 500
          kr/mnd.{' '}
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Forsikring - </strong> Ut over vanlig yrkesskadeforsikringer
          får du reiseforsikring for hele familien, gruppelivsforsikring,
          behandlingsforsikring og dekning for annen ulykke enn yrkesskade.
        </p>
        <p className={style.handbookParagraphs}>
          <strong>Utvidede rettigheter til egenmelding og sykepenger.</strong>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};
export default HandBooKPagesJob;
