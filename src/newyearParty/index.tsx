import DanceFloor from './img/danceFloor/danceFloor';
import Firework from './img/firework/firework';
import Firework2 from './img/firework/firework2';
import Gradient from './img/gradient/gradient';
import style from './newYearParty.module.css';
const NewyearParty = () => {
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

export default NewyearParty;
