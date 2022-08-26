import ApplyAsDesigner from 'src/summersplash2022/img/søkSomDesigner';
import ApplyAsDeveloper from 'src/summersplash2022/img/søkSomUtviklerBlob';
import style from 'src/summersplash2022/index.module.css';
import style2 from 'src/summersplash2022/nyutdannet/nyutdannet.module.css';
import Section7Blob from '../img/section7Blob';
const Apply = () => {
  const Marius = require('src/summersplash2022/img/Marius.png');

  return (
    <section className={style2.section7} id="soksommerjobb">
      <h3 className={style2.heading}>Søk sommerjobb</h3>
      <p>
        Vi håper du søker, og vi ser frem til å bli bedre kjent med deg. Har du
        spørsmål om sommerjobben eller Variant? Ta gjerne kontakt med meg.
      </p>
      <p>- Marius Krakeli, Utvikler og rekrutteringsansvarlig</p>
      <div className={style.contactInfo}>
        <div>
          <p className={style.section6Underline}>41637572</p>
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
      <img className={style.Marius} src={Marius} alt="Bilde av Marius" />

      <div className={style.ApplyDiv}>
        <div className={style.ApplyAsDesignerDiv}>
          <div className={style.applyAsDesigner}>
            <a href="/jobs">
              <ApplyAsDesigner />
            </a>
          </div>
        </div>
        <div className={style.ApplyAsDeveloperDiv}>
          <div className={style.ApplyAsDeveloper}>
            <a href="/jobs">
              <ApplyAsDeveloper />
            </a>
          </div>
        </div>
      </div>
      <div className={style2.section7Blob}>
        <Section7Blob />
      </div>
    </section>
  );
};

export default Apply;
