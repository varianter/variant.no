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
        <div className={style.newyearParty__invitation_ingress}>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Hei alle varianter, kollegaer, venner, familie og andre
            interesserte!
          </p>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Variant er bygd på åpenhet, raushet og læreglede. Derfor ønsker vi i
            Variant Oslo å invitere dere alle til et storstilt nyttårskalas med
            underholdning, mat, drikke, musikk og moro i ekte Variant-ånd.
          </p>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Arrangementet er gratis, men alle gjester må løse billett på Hoopla.
            Vi gleder oss til å treffe deg!
          </p>
        </div>
        <div className={style.newyearParty__invitation__table}>
          <p className={style.newyearParty__invitation__table_text}>PIZZA</p>
          <p className={style.newyearParty__invitation__table_text}>DJ</p>
          <a
            href="https://www.youtube.com/watch?v=gO6Sp3NkL2Y"
            style={{ cursor: 'pointer' }}
            className={style.newyearParty__invitation__table_text}
          >
            PASHA
          </a>
          <p className={style.newyearParty__invitation__table_text}>SPILL</p>
          <p className={style.newyearParty__invitation__table_text}>ØL!</p>
          <form action="https://variant.hoopla.no/sales/event/2685940696?promo=variantfest">
            <button className={style.newyearParty__invitation__button}>
              Hold av billett
            </button>
          </form>
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
