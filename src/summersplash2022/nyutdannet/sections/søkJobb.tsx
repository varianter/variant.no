import style from 'src/summersplash2022/index.module.css';
import { ApplyType } from './hvaSkjerEtterSonaadsfristen';

const Apply = ({applyType}: {applyType: ApplyType}) => {
  const Marius = require('src/summersplash2022/img/Marius.png');
  const isApplyGraduate = applyType == ApplyType.GRADUATE;

  return (
    <section className={style.applySection} id="sokfastjobb">
      <h2 className={style.heading}>Søk {isApplyGraduate ? "fast jobb" : "sommerjobb"}</h2>
      <div className={style.applySectionFlex}>
        <div className={style.applySectionText}>
          <p>
            Vi håper du søker, og vi ser frem til å bli bedre kjent med deg. Har du
            spørsmål om {isApplyGraduate ? "fast jobb" : "sommerjobben"} eller Variant? Ta gjerne kontakt med meg.
          </p>
          <p>- Marius Krakeli, Chief Recruitment Officer</p>
          <div className={style.contactInfo}>
            <p className={style.section6Underline}>
              <a href="tel:41637572">41637572</a>
            </p>
            <p>|</p>
            <p className={style.section6Underline}>
              <a href="mailto: mk@variant.no">
                mk@variant.no
              </a>
            </p>  
          </div>
        </div>
        <div className={style.applySectionApplyDiv}>
          <a className={style.applyButtonPink} href={isApplyGraduate ? "/jobs/nyutdannet-designer-2024" : "/jobs/sommerjobb-designer-2024"}>
            Søk som designer
          </a>
          <a className={style.applyButtonBlue} href={isApplyGraduate ? "/jobs/nyutdannet-utvikler-2024" : "/jobs/sommerjobb-utvikler-2024"}>
            Søk som utvikler
          </a>
        </div>

        <div className={style.applySectionPicture}>
          <img className={style.Marius} src={Marius} alt="Bilde av Marius" />
        </div>
      </div> 
    </section>
  );
};

export default Apply;
