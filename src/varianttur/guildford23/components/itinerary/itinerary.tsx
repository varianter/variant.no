import FridayBlob from './fridayBlob';
import style from './itinerary.module.css';
import SaturdayBlob from './saturdayBlob';
import SundayBlob from './sundayBlob';
import Navbar, { NavItem } from './../navbar/navbar';

const Itinerary = () => {
  return (
    <div>
      <div id="friday" className={style.evenDay}>
        <div className={style.backgroundBlobContainer}>
          <FridayBlob />
        </div>
        <div className={style.textContainer}>
          <Navbar selectedNavItem={NavItem.FRIDAY} />
          <ol className={style.list}>
            <li>
              <time>10:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Oppmøte Værnes 🧳</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>11:55</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Flyet går✈️</p>
                <p className={style.listItemInfo}>Flybilletter</p>
              </div>
            </li>
            <li>
              <time>Ca. 14:15</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Buss til hotellet 🚍</p>
                <p className={style.listItemInfo}>Det vil vente en buss på flyplassen, følg reiseleder Linda!</p>
              </div>
            </li>
            <li>
              <time>15:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Ankomst hotellet 🏨</p>
                <p className={style.listItemInfo}>Vi legger fra oss bagasjen og tar med oss en sandwich</p>
              </div>
            </li>
            <li>
              <time>15:00-17:30</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Variantdag 🚀</p>
                <p className={style.listItemInfo}>Faglig opplegg for Varianter, følgene har mulighet til å bli bedre kjent, eller bare gjøre som de vil</p>
              </div>
            </li>
            <li>
              <time>17:30</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Velkomst 🥂</p>
                <p className={style.listItemInfo}>Alle møtes til velkomst på The Terrace</p>
              </div>
            </li>
            <li>
              <time>19:00</time>
              <div>
                <p className={style.listItemTitle}>Festmiddag & fest 🍴 💃🏼 🕺🏽</p>
                <p className={style.listItemInfo}>I hotellrestauranten, <a href='https://www.harbourhotels.co.uk/guildford/eat-and-drink/the-long-bar' target='_blank' className={style.externalLink}>Long bar and grill</a></p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div id="saturday" className={style.oddDay}>
        <div className={style.backgroundBlobContainer}>
          <SaturdayBlob />
        </div>
        <div className={style.textContainer}>
        <Navbar selectedNavItem={NavItem.SATURDAY} />
          <ol className={style.list}>
            <li>
              <time>07:30-11:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Frokost på hotellet 🍳</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>10:30</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Aktiviteter 🏰 🎢 🍷 🍸🌆</p>
                <p className={style.listItemInfo}>Info om transport, selve aktiviteten og lunsj</p>
              </div>
            </li>
            <li>
              <time>14:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Fritid 🛝</p>
                <p className={style.listItemInfo}>Lørdagstips</p>
              </div>
            </li>
            <li>
              <time>19:15</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Buss til middag 🚍</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>19:30</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Middag 🍴</p>
                <p className={style.listItemInfo}><a href='https://www.redlionshamleygreen.com/dine/' target='_blank' className={style.externalLink}>Red Lion</a></p>
              </div>
            </li>
            <li>
              <time>23:30</time>
              <div>
                <p className={style.listItemTitle}>Buss tilbake til hotellet 🚍</p>
                <p className={style.listItemInfo}>For natteranglere er det mulighet for å fortsette i hotellbaren eller dra ut på noen av byens nattklubber</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div id="sunday" className={style.evenDay}>
        <div className={style.backgroundBlobContainer}>
          <SundayBlob />
        </div>
        <div className={style.textContainer}>
        <Navbar selectedNavItem={NavItem.SUNDAY} />
          <ol className={style.list}>
            <li>
              <time>07:30-11:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Frokost på hotellet 🍳</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>11:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Utsjekk 🧳</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>12:00</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Buss til Heathrow 🚍</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>15:35-18:50</time>
              <div className={style.borderedListItem}>
                <p className={style.listItemTitle}>Fly Heathrow - Oslo ✈️</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
            <li>
              <time>21:00-21:55</time>
              <div>
                <p className={style.listItemTitle}>Fly Oslo - Værnes ✈️</p>
                <p className={style.listItemInfo}>*TEKST*</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;