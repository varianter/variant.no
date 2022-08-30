import { WhichButtonPressed } from './utils';
import style from '../index.module.css';

const HandBooKPages = ({ selectedButton }: WhichButtonPressed) => {
  if (selectedButton === 'Formal og verdier') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#FAD2E2',
            maxWidth: 'fit-content',
            padding: '3%',
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
        <p className={style.handbookParagraphs}>
          Disse verdiene ligger til grunn for hvordan vi behandler hverandre.
          Det skal være lav terskel for ros og tilbakemeldinger fordi vi ønsker
          at du lykkes. Vær den som sier hva du har på hjertet ditt og som tør å
          utfordre sannheter og gjeldende praksis.
        </p>
      </div>
    );
  } else if (selectedButton === 'Tillit og ansvar') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#8B0F40',
            maxWidth: 'fit-content',
            padding: '3%',
            color: 'white',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Tillit og ansvar
        </h3>
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
  } else if (selectedButton === 'Variantdag') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#423D89',
            maxWidth: 'fit-content',
            padding: '3%',
            color: 'white',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Variantdag
        </h3>
        <p className={style.handbookParagraphs}>
          Den første fredagen i hver måned (foruten januar og juli) har vi det
          vi kaller en variantdag. Dette er en “innedag”, der vi alle bruker
          hele dagen sammen, for faglig, administrativt og sosialt påfyll.
          Dersom du takker ja til et tilbud om sommerjobb hos oss er du
          selvfølgelig invitert til å bli med.
        </p>

        <p className={style.handbookParagraphs}>
          Her vil du alltid finne oversikt over gjennomførte og planlagte
          variantdager.
        </p>
      </div>
    );
  } else if (selectedButton === 'Miljofyrtarn') {
    return (
      <div>
        <h3
          style={{
            backgroundColor: '#03DAC6',
            maxWidth: 'fit-content',
            padding: '3%',
          }}
          className={style.handbookHeaderDeskotop}
        >
          Miljøfyrtårn
        </h3>
        <p className={style.handbookParagraphs}>
          Bærekraft for Variant innebærer mye. Det er likestilling i
          arbeidslivet, en bærekraftig arbeidsdag, som både er spennende,
          utfordrende og lærerik. Vi ønsker at valgene vi gjør skal begrense
          vårt klimaavtrykk. Vi skal skape en kultur hvor vi er nysgjerrige,
          stiller spørsmål og tar gode valg. Vi setter oss årlige mål om å
          redusere vår belastning på miljøet, vi kildesorterer og fører regnskap
          over eget avfall, energiforbruk og reiser med fly og bil.
          Miljøfyrtårnansvarlig har ansvar for oppfølging og håndtering av
          dette.
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};
export default HandBooKPages;
