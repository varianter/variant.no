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
          Variant Trondheim inviterer til
        </p>
        <h1>Nyttårskalas</h1>
        <div className={style.newyearParty__invitation__underHeader}>
          <p>Dokkhuset</p>
          <p>27. Januar</p>
        </div>
        <div className={style.newyearParty__invitation_ingress}>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Hei alle varianter, kollegaer, venner, familie og andre
            interesserte!
          </p>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Variant er bygd på åpenhet, raushet og læreglede. Derfor ønsker vi i
            Variant Trondheim å invitere dere alle til et storstilt nyttårskalas
            med underholdning, drikke, musikk og moro i ekte Variant-ånd.
          </p>
          <p className={style.newyearParty__invitation_ingress_paragraph}>
            Arrangementet er gratis, men alle gjester må løse billett på Hoopla.
            Vi gleder oss til å treffe deg!
          </p>
        </div>
        <div className={style.newyearParty__invitation__table}>
          <a
            href="https://open.spotify.com/artist/3uNewvKV92Pd23nXcv1l0z?si=yvgVQvSyT_yYzWusN0Oo4Q"
            target="_blank"
            rel="no-referrer"
            style={{ cursor: 'pointer' }}
            className={style.newyearParty__invitation__table_text}
          >
            BAKLENGS SALTO
          </a>
          <a
            href="https://open.spotify.com/artist/3GbYOxp3xc7O9lpuJQRi9K?si=0yJ4AILDTVKmA6jHUYQsJw"
            target="_blank"
            rel="no-referrer"
            style={{ cursor: 'pointer' }}
            className={style.newyearParty__invitation__table_text}
          >
            DEATH BY UNGA BUNGA
          </a>
          <p className={style.newyearParty__invitation__table_text}>DJ</p>
          <p className={style.newyearParty__invitation__table_text}>SPILL</p>
          <p className={style.newyearParty__invitation__table_text}>ØL!</p>
          <form action="https://variant.hoopla.no/sales/event/4022543008">
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
