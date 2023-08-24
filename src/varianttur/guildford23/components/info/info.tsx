import style from './info.module.css';
import HotelBlob from './hotelBlob';
import FoodBlob from './foodBlob';
import Navbar, { NavItem } from './../navbar/navbar';

const Info = () => {
  return (
    <div id='info' className={style.infoContainer}>
      <div className={style.info}>
        <div className={style.navbarContainer}>
          <Navbar selectedNavItem={NavItem.INFO} />
        </div>
        <div className={style.hotelBlobContainer}>
          <HotelBlob />
        </div>
        <div className={style.hotelTextContainer}>
          <h3>Harbour Hotel Guildford</h3>
          <div className={style.addressContainer}>
            <span>📍</span>
            <div>
              <p className={style.addressLine}>3 Alexandra Terrace,</p>
              <p className={style.addressLine}>Guildford GU1 3DA,</p>
              <p className={style.addressLine}>Storbritannia</p>
            </div>
          </div>
          <div>
            <h3>Lurer du på noe underveis?</h3>
            <div className={style.contactPerson}>
              <span>Linda</span>
              <span>+47 975 48 839</span>
            </div>
            <div className={style.contactPerson}>
              <span>Falk</span>
              <span>+47 993 99 921</span>
            </div>
            <div className={style.contactPerson}>
              <span>Lotta-Linn</span>
              <span>+47 915 53 434</span>
            </div>
            <div className={style.contactPerson}>
              <span>Kristin</span>
              <span>+47 907 93 392</span>
            </div>
          </div>
        </div>
        <div className={style.foodBlobContainer}>
          <FoodBlob />
        </div>
        <div className={style.foodTextContainer}>
          <h3>Allergier og matpreferanser</h3>
          <p>Har du allergier eller matpreferanser og vil være <em>helt</em> sikker på at det er tatt hensyn til? Dobbeltsjekk heller med oss enn å lure, det gjør det bedre både for deg og oss!</p>
        </div>
        <div className={style.imageContainer}>
          <div className={style.hotelImageContainer}>
            <img src='/images/varianttur/hotel.png' alt='Hotel' className={style.image} />
          </div>
          <div className={style.restaurantImageContainer}>
            <img src='/images/varianttur/restaurant.png' alt='Restaurant' className={style.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;