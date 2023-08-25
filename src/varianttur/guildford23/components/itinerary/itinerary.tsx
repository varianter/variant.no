import style from './itinerary.module.css';
import Navbar, { NavItem } from './../navbar/navbar';
import LinkIcon from '../common/linkIcon';

const Itinerary = () => {
  return (
    <div>
      <div id='friday' className={style.evenDayContainer}>
        <div className={style.navbarContainer}>
          <Navbar selectedNavItem={NavItem.FRIDAY} />
        </div>
        <div className={style.fridayContainer}>
          <div className={style.fridayBlobTopContainer}>
          </div>
          <div className={style.fridayBlobBottomContainer}>
          </div>
          <div className={style.textContainer}>
            <ol className={style.list}>
              <li>
                <time>10:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Oppmøte Værnes 🧳</p>
                  <p className={style.listItemInfo}>Vi møter opp på Værnes i god tid. Husk at vi skal på utenlandssiden og gjennom passkontrollen. Husk pass og adapter med tre stikk.</p>
                </div>
              </li>
              <li>
                <time>11:55</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Flyet går✈️</p>
                  <p className={style.listItemInfo}>Norwegian DY745</p>
                  <p className={style.listItemInfo}>Flybilletter får Varianter på mail til seg og følge.</p>
                  <p className={style.listItemInfo}>Seter blir tildelt ved innsjekk. Vi kan ikke garantere at dere får seter ved siden av hverandre, men det er helt okei å bytte med noen.</p>
                  <p className={style.listItemInfo}>Inkludert:</p>
                  <p className={style.listItemInfo}>1 x 23 kg innsjekket bagasje</p>
                  <p className={style.listItemInfo}>1 x håndbagasje (bagasjehylle)</p>
                  <p className={style.listItemInfo}>1x håndbagasje (under setet)</p>
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
                  <p className={style.listItemInfo}>Når vi ankommer hotellet sjekker Linda oss inn. Vi tar oss en grab and go sandwich. Varianter går til møterom for Variantdag. Følger er velkomne til å bli med på Variantdag, men har i utgangspunktet fritid.</p>
                </div>
              </li>
              <li>
                <time>15:00-17:30</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Variantdag 🚀</p>
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
                <div className={style.unborderedListItem}>
                  <p className={style.listItemTitle}>Festmiddag & fest 🍴 💃🏼 🕺🏽</p>
                  <p className={style.listItemInfo}>I hotellrestauranten</p>
                  <p className={style.listItemInfo}><a href='https://www.harbourhotels.co.uk/guildford/eat-and-drink/the-long-bar' target='_blank' className={style.link}>Long bar and grill</a></p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id='saturday' className={style.oddDayContainer}>
        <div className={style.navbarContainer}>
          <Navbar selectedNavItem={NavItem.SATURDAY} />
        </div>
        <div className={style.saturdayContainer}>
          <div className={style.saturdayBlobContainer}>
          </div>
          <div className={style.textContainer}>
            <ol className={style.list}>
              <li>
                <time>07:30-11:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Frokost på hotellet 🍳</p>
                </div>
              </li>
              <li>
                <time>10:30</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Aktiviteter 🏰 🎢 🍷 🍸🌆</p>
                  <p className={style.listItemInfo}><a href='/varianttur/guildford23/aktiviteter' className={style.link}>Info om transport, selve aktiviteten og lunsj<LinkIcon /></a></p>
                </div>
              </li>
              <li>
                <time>14:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Fritid 🛝</p>
                  <p className={style.listItemInfo}><a href='/varianttur/guildford23/tips' className={style.link}>Lørdagstips<LinkIcon /></a></p>
                </div>
              </li>
              <li>
                <time>19:15</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Buss til middag 🚍</p>
                </div>
              </li>
              <li>
                <time>19:30</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Middag 🍴</p>
                  <p className={style.listItemInfo}><a href='https://www.redlionshamleygreen.com/dine/' target='_blank' className={style.link}>Red Lion</a></p>
                </div>
              </li>
              <li>
                <time>22:30</time>
                <div className={style.unborderedListItem}>
                  <p className={style.listItemTitle}>Buss tilbake til hotellet 🚍</p>
                  <p className={style.listItemInfo}>For natteranglere er det mulighet for å fortsette i hotellbaren eller dra ut på noen av byens nattklubber</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id='sunday' className={style.evenDayContainer}>
        <div className={style.navbarContainer}>
          <Navbar selectedNavItem={NavItem.SUNDAY} />
        </div>
        <div className={style.sundayContainer}>
          <div className={style.sundayBlobContainer}>
          </div>
          <div className={style.textContainer}>
            <ol className={style.list}>
              <li>
                <time>07:30-11:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Frokost på hotellet 🍳</p>
                </div>
              </li>
              <li>
                <time>11:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Utsjekk 🧳</p>
                  <p className={style.listItemInfo}>Felles utsjekk</p>
                </div>
              </li>
              <li>
                <time>12:00</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Buss til Heathrow 🚍</p>
                </div>
              </li>
              <li>
                <time>15:35-18:50</time>
                <div className={style.borderedListItem}>
                  <p className={style.listItemTitle}>Fly Heathrow - Oslo ✈️</p>
                  <p className={style.listItemInfo}>SAS, SK806</p>
                  <p className={style.listItemInfo}>Inkludert:</p>
                  <p className={style.listItemInfo}>1 x 23kg innsjekket bagasje</p>
                  <p className={style.listItemInfo}>1 x håndbagasje (bagasjehylle)</p>
                  <p className={style.listItemInfo}>1x håndbagasje (under setet)</p>
                </div>
              </li>
              <li>
                <time>21:00-21:55</time>
                <div className={style.unborderedListItem}>
                  <p className={style.listItemTitle}>Fly Oslo - Værnes ✈️</p>
                  <p className={style.listItemInfo}>SAS, SK380</p>
                  <p className={style.listItemInfo}>I Oslo må vi gjennom passkontrollen og gjennom ny sikkerhetskontroll</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;