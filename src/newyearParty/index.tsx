import DanceFloor from './img/danceFloor/danceFloor';
import FireWork from './img/firework/firework';
import Gradient from './img/gradient/gradient';
import style from './newyearParty.module.css';
const NewyearParty = () => {
  return (
    <div className={style.newyearParty}>
      <div className={style.newyearParty__invitation}>
        <p>Variant Oslo inviterer til</p>
        <h1>Nyttårsfest</h1>
        <div className={style.newyearParty__invitation__table}>
          <div className={style.newyearParty__invitation__table_row}>
            <p>DATO</p>
            <p>27. Januar</p>
          </div>
          <div className={style.newyearParty__invitation__table_row}>
            <p>STED</p>
            <p>MESH YOUNGSTORGET</p>
          </div>
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
        </div>
        {/* <FireWork /> */}
      </div>
      <Gradient />
      <DanceFloor />
    </div>
  );
};

export default NewyearParty;
