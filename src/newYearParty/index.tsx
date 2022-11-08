import DanceFloor from './img/danceFloor/danceFloor';
import Firework from './img/firework/firework';
import Firework2 from './img/firework/firework2';
import Gradient from './img/gradient/gradient';
import style from './newYearParty.module.css';
const NewYearParty = () => {
  return (
    <div className={style.newyearParty}>
      <div className={style.newyearParty__invitation}>
        <p className={style.newyearParty__invitation__overHeader}>
          Variant Oslo inviterer til
        </p>
        <h1>Nyttårsfest</h1>
        <div className={style.newyearParty__invitation__underHeader}>
          <p>Mesh Youngstorget</p>
          <p>27. Januar</p>
        </div>
        <p className={style.newyearParty__invitation_ingress}>
          Hei alle varianter, venner, familie, kollegaer og alle andre
          interesserte! I Variant er vi er bygd på åpenhet, raushet og
          læreglede. Dette er aldri noe vi bare skal si, men noe vi skal leve
          opp til. Så i den anledning ønsker vi i Variant Oslo å invitere dere
          alle på et storstilt nyttårskalas med underholdning, mat, drikke,
          spill, musikk og moro i ekte Variant-ånd. Arrangementet er gratis, men
          alle gjester må løse billett på Hoopla. Velkommen skal du være, vi
          gleder oss til å treffe deg!
        </p>
        <div className={style.newyearParty__invitation__table}>
          <div className={style.newyearParty__invitation__table_row}>
            <p>18.00</p>
            <p>DØRENE ÅPNER</p>
          </div>
          <div className={style.newyearParty__invitation__table_row}>
            <p>19.00</p>
            <p>UNDERHOLDNING</p>
          </div>
          <div className={style.newyearParty__invitation__table_row}>
            <p>20.00</p>
            <p>UNDERHOLDNING</p>
          </div>
          <div className={style.newyearParty__invitation__table_row}>
            <p>22.00-02.00</p>
            <p>DJ</p>
          </div>
          <button className={style.newyearParty__invitation__button}>
            Hold av billett
          </button>
        </div>
        <Firework />
        <Firework2 />
      </div>
      <Gradient />
      <DanceFloor />
    </div>
  );
};

export default NewYearParty;
