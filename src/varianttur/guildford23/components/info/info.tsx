import style from './info.module.css';

const Info = () => {
  return (
    <div id="info" className={style.infoContainer}>
      <div className={style.textContainer}>
        <h2>Det praktiske</h2>
        <h3>Harbour Hotel Guildford</h3>
        <p className={style.phone}>☎️ +????</p>
        <div className={style.addressContainer}>
          <span>📍</span>
          <div>
            <p className={style.addressLine}>3 Alexandra Terrace,</p>
            <p className={style.addressLine}>Guildford GU1 3DA,</p>
            <p className={style.addressLine}>Storbritannia</p>
          </div>
        </div>
        <div className={style.foodContainer}>
          <h3>Allergier og matpreferanser</h3>
          <p>Har du allergier eller matpreferanser og vil være helt sikker på at det er tatt hensyn til? Dobbeltsjekk heller med oss enn å lure, det gjør det bedre både for deg og oss!</p>
        </div>
        <div>
          <h3>Lurer du på noe underveis?</h3>
          <div className={style.contactPerson}>
            <span>Linda</span>
            <span>+47 ??</span>
          </div>
          <div className={style.contactPerson}>
            <span>Falk</span>
            <span>+47 ??</span>
          </div>
          <div className={style.contactPerson}>
            <span>Lotta-Linn</span>
            <span>+47 91 55 34 34</span>
          </div>
        </div>
      </div>
      <div className={style.imageContainer}>
        <div className={style.hotelImage}>
          <img src='/images/varianttur/hotel.png' />
        </div>
        <div className={style.restaurantImage}>
          <img src='/images/varianttur/restaurant.png' />
        </div>
      </div>
    </div>
  );
};

export default Info;