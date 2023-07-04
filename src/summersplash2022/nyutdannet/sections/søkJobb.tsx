import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
const Apply = () => {
  const Marius = require('src/summersplash2022/img/Marius.png');

  return (
    <section className={style2.section7} id="sokfastjobb">
      <h2 className={style2.heading}>Søk fast jobb</h2>
      <p>
        Vi håper du søker, og vi ser frem til å bli bedre kjent med deg. Har du
        spørsmål om fastjobb eller Variant? Ta gjerne kontakt med meg.
      </p>
      <p>- Marius Krakeli, Utvikler og rekrutteringsansvarlig</p>
      <div className={style.contactInfo}>
        <div>
          <p className={style.section6Underline}>
            <a href="tel:41637572">41637572</a>
          </p>
        </div>
        <div>
          <p>|</p>
        </div>
        <p className={style.section6Underline}>
          <a className={style2.contactMail} href="mailto: mk@variant.no">
            mk@variant.no
          </a>
        </p>
      </div>
      <div className={style2.imagePositionMobile}>
        <img className={style.Marius} src={Marius} alt="Bilde av Marius" />
      </div>
      <div className={style2.ApplyDiv}>
        <div className={style2.applyButtonPink}>
          <p>
            <a style={{ padding: '2%' }} href="/jobs/nyutdannet-designer-2024">
              Søk som designer
            </a>
          </p>
        </div>
        <div className={style2.applyButtonBlue}>
          <p>
            <a style={{ padding: '2%' }} href="/jobs/nyutdannet-utvikler-2024">
              Søk som utvikler
            </a>
          </p>
        </div>
      </div>
      <div className={style2.imagePositionDesktop}>
        <img className={style.Marius} src={Marius} alt="Bilde av Marius" />
      </div>
    </section>
  );
};

export default Apply;
