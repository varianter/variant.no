import style from './itinerary.module.css';

const Itinerary = () => {
  return (
    <div>
      <div id="friday" className={style.oddDay}>
        <h2 className={style.dayHeading}>Fredag</h2>
        <ol className={style.list}>
          <li><time>09:00</time><span>Oppmøte Værnes 🧳</span></li>
          <li><time>10:30</time><span>Flyet går✈️</span></li>
          <li><time>Ca. 14:15</time><span>Buss til hotellet 🚍</span></li>
          <li><time>15:00</time><span>Ankomst hotellet 🏨</span></li>
          <li><time>15:00-17:30</time><span>Variantdag 🚀</span></li>
          <li><time>17:30</time><span>Velkomst 🥂</span></li>
          <li><time>19:00</time><span>Festmiddag & fest 🍴 💃🏼 🕺🏽</span></li>
        </ol>
      </div>
      <div id="saturday" className={style.evenDay}>
        <h2 className={style.dayHeading}>Lørdag</h2>
        <ol className={style.list}>
          <li><time>07:30-11:00</time><span>Frokost på hotellet 🍳</span></li>
          <li><time>10:30</time><span>Transport til aktiviteter 🚍</span></li>
          <li><time>11:30</time><span>Aktiviteter 🏰 🎢 🍷 🍸🌆</span></li>
          <li><time>13:30/14:30</time><span>Tilbake til hotellet 🏨</span></li>
          <li><time>14:00</time><span>Fritid 🛝</span></li>
          <li><time>19:15</time><span>Buss til middag 🚍</span></li>
          <li><time>19:30</time><span>Middag 🍴</span></li>
          <li><time>23:30</time><span>Buss tilbake til hotellet 🚍</span></li>
        </ol>
      </div>
      <div id="sunday" className={style.oddDay}>
        <h2 className={style.dayHeading}>Søndag</h2>
        <ol className={style.list}>
          <li><time>07:30-11:00</time><span>Frokost på hotellet 🍳</span></li>
          <li><time>11:00</time><span>Utsjekk 🧳</span></li>
          <li><time>12:00</time><span>Buss til Heathrow 🚍</span></li>
          <li><time>15:35-18:50</time><span>Fly Heathrow - Oslo ✈️</span></li>
          <li><time>21:00-21:55</time><span>Fly Oslo - Værnes ✈️</span></li>
        </ol>
      </div>
    </div>
  );
};

export default Itinerary;