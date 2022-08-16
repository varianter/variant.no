import { WhichButtonPressed } from './utils';
import style from '../index.module.css';


const HandBooKPages = ({ selectedButton }: WhichButtonPressed) => {
  if (selectedButton === 'Formmal og verdier') {
    return (
      <>
        <div>
          <p className={style.positionTextSubLeft}>
					Så, hvorfor Variant? Hvorfor er vi egentlig til? Vårt formål er 
					å utvikle samfunnet vi lever i. Flinke personer som tenker nye 
					tanker, og så lager de riktige løsningene.</p>

					<p><strong> Våre tre grunnverdier er: </strong>

					<p>
					<strong>Raushet</strong> - Dette vises i hvordan vi møter hverandre, våre kunder 
					og folk i nærmiljøet.
					</p>

					<p>
					<strong>Åpenhet</strong> - Hva i all verden skal et selskap tjene på å holde 
					informasjon hemmelig for sine ansatte?

					</p>
					<strong>Læreglede</strong> - Vi er folk som ønsker å lære og lære bort. Vi skal ha 
					ydmykhet nok til å skjønne at vi kan lære noe fra alle, og troen 
					på at alle kan lære noe fra oss.
					<p>

					</p>
					Disse verdiene ligger til grunn for hvordan vi behandler 
					hverandre. Det skal være lav terskel for ros og tilbakemeldinger 
					fordi vi ønsker at du lykkes. Vær den som sier hva du har på 
					hjertet ditt og som tør å utfordre sannheter og gjeldende praksis.
          </p>
        </div>
      </>
    );
  } else if (selectedButton === 'Tillit og ansvar') {
    return (
      <>
        <div>
          <p className={style.positionTextSubLeft}>Tillit og ansvar</p>
        </div>
      </>
    );
  } else if (selectedButton === 'Variantdag') {
    return (
      <div>
        <p className={style.positionTextSubLeft}>
					Fleksitid</p>
      </div>
    );
  } else if (selectedButton === 'Miljofyrtarn') {
    return (
      <div>
        <p className={style.positionTextSubLeft}>
					Et kult fyrtarn</p>
      </div>
    );
  } else if (selectedButton === 'Fleksitid') {
    return (
      <div>
        <p className={style.positionTextSubLeft}>
					Fleksitid</p>
      </div>
    );
  } else {
    return <></>;
  }
};
export default HandBooKPages;
