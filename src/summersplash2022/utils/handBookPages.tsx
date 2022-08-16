import { WhichButtonPressed } from './utils';
import style from '../index.module.css';

const HandBooKPages = ({ selectedButton }: WhichButtonPressed) => {
  if (selectedButton === 'Formmal og verdier') {
    return (
      <div>
        <h3 className={style.positionTextSubLeft}>Formmål og verdier</h3>
        <p className={style.positionTextSubLeft}>
          Så, hvorfor Variant? Hvorfor er vi egentlig til? Vårt formål er å
          utvikle samfunnet vi lever i. Flinke personer som tenker nye tanker,
          og så lager de riktige løsningene.
        </p>

        <p className={style.positionTextSubLeft}>
          <strong> Våre tre grunnverdier er: </strong>

          <p>
            <strong>Raushet</strong> - Dette vises i hvordan vi møter hverandre,
            våre kunder og folk i nærmiljøet.
          </p>

          <p>
            <strong>Åpenhet</strong> - Hva i all verden skal et selskap tjene på
            å holde informasjon hemmelig for sine ansatte?
          </p>

          <p>
            <strong>Læreglede</strong> - Vi er folk som ønsker å lære og lære
            bort. Vi skal ha ydmykhet nok til å skjønne at vi kan lære noe fra
            alle, og troen på at alle kan lære noe fra oss.
          </p>

          <p>
            Disse verdiene ligger til grunn for hvordan vi behandler hverandre.
            Det skal være lav terskel for ros og tilbakemeldinger fordi vi
            ønsker at du lykkes. Vær den som sier hva du har på hjertet ditt og
            som tør å utfordre sannheter og gjeldende praksis.
          </p>
        </p>
      </div>
    );
  } else if (selectedButton === 'Tillit og ansvar') {
    return (
      <div>
        <h3 className={style.positionTextSubLeft}>Tillit og ansvar</h3>
        <p className={style.positionTextSubLeft}>
          Variant vil gi sine ansatte det beste, vi som jobber her forventes å
          gi det samme. Vi gir full tillit til hverandre fordi vi tror at alle
          er i stand til å gjøre riktige valg. Hva du trenger for å lære noe
          nytt eller gjøre jobben din er opp til deg. Vi forventer bare at du
          selv vurderer kostnadene opp mot vinningen og sparrer med andre når
          det trengs.
        </p>

        <p className={style.positionTextSubLeft}>
          Ha det morsomt - Et arbeidsliv består av maaaange timer. Vi vil gjøre
          noe som gir mening og samtidig ha det morsomt. Det spekuleres i om
          Variant eksisterer fordi det er hyggeligere å skape noe sammen med
          mennesker man trives med. Det får vi nok ikke svaret på, men inntil
          videre så kan du le ofte og gjøre gærne ting!
        </p>

        <p className={style.positionTextSubLeft}>
          Vær stolt - Vi vil at du skal være stolt av det du gjør. Er du ikke
          den stolte typen? Da vil vi gjerne at du har mot til å endre på det.
          Du skal kunne være stolt av å være her, nettopp fordi du har gjort så
          mye bra tidligere. Så rett deg opp i ryggen, og si at du jobber i
          Variant. 🦄
        </p>
      </div>
    );
  } else if (selectedButton === 'Variantdag') {
    return (
      <div>
        <h3 className={style.positionTextSubLeft}>Variantdag</h3>
        <p className={style.positionTextSubLeft}>
          Den første fredagen i hver måned (foruten januar og juli) har vi det
          vi kaller en variantdag. Dette er en “innedag”, der vi alle bruker
          hele dagen sammen, for faglig, administrativt og sosialt påfyll.
          Dersom du takker ja til et tilbud om sommerjobb hos oss er du
          selvfølgelig invitert til å bli med.
        </p>

        <p className={style.positionTextSubLeft}>
          Her vil du alltid finne oversikt over gjennomførte og planlagte
          variantdager.
        </p>
      </div>
    );
  } else if (selectedButton === 'Miljofyrtarn') {
    return (
      <div>
        <h3 className={style.positionTextSubLeft}>Miljøfyrtårn</h3>
        <p className={style.positionTextSubLeft}>
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
  } else if (selectedButton === 'Fleksitid') {
    return (
      <div>
        <h3 className={style.positionTextSubLeft}> Fleksitid</h3>
        <p className={style.positionTextSubLeft}>
          Arbeidsdagen er 7,5 timer per dag. Vi har ikke kjernetid i Variant,
          men kunder kan jo ofte ha dette. Vi synes det er viktig å følge kunden
          på dette, for å bli en del av deres kultur. Vi oppnår mest når vi får
          jobbe tett med andre, så når du velger din arbeidsrytme regner vi med
          at det er med i vurderingen.
        </p>

        <p className={style.positionTextSubLeft}>
          Likevel er det slik at mange av våre kunder har kjernetid, eller at
          oppdraget du er på avtaler en kjernetid. Dette må vi forholde oss til.
        </p>

        <p className={style.positionTextSubLeft}>
          Vi vet at livet har ulike faser, i noen perioder ønsker eller trenger
          man å kunne bruke mindre tid på jobb. Hos oss er det mulig å senke
          stillingsgraden i perioder. Dette avgjør du best selv du. Med åpenhet
          mellom deg, ledere og kunden om behovet og ønskene dine, vil vi sammen
          jobbe for å finne løsningen alle trives med.
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};
export default HandBooKPages;
