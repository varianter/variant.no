import style from './søkJobb.module.css';
import sharedStyle from '../index.module.css';
import { ApplyType } from 'src/summersplash2022/utils/utils';
import ApplyImgWithBlob from 'src/summersplash2022/img/applyImgWithBlob';

const Apply = ({ applyType }: { applyType: ApplyType }) => {
  const isApplyGraduate = applyType == ApplyType.GRADUATE;
  const variantImg = require(isApplyGraduate
    ? 'src/components/page-header/whiteVariant.svg'
    : 'src/components/page-header/variant.svg');

  return (
    <section
      className={`${style.section} ${
        isApplyGraduate
          ? sharedStyle.sectionDarkTeal
          : sharedStyle.sectionLightPeach
      }`}
      id="sokjobb"
    >
      <h2 className={style.heading}>
        Søk {isApplyGraduate ? 'fast jobb' : 'sommerjobb'}
      </h2>
      <div className={style.flex}>
        <div className={style.text}>
          <p>
            Vi håper du søker, og vi ser frem til å bli bedre kjent med deg. Har
            du spørsmål om {isApplyGraduate ? 'fast jobb' : 'sommerjobben'}{' '}
            eller Variant? Ta gjerne kontakt med meg.
          </p>
          <p>- Marius Krakeli, Chief Recruitment Officer</p>
          <div className={style.contactInfo}>
            <p>
              <a href="tel:41637572">41637572</a>
            </p>
            <p>|</p>
            <p>
              <a href="mailto: mk@variant.no">mk@variant.no</a>
            </p>
          </div>
        </div>
        <div className={style.applyDiv}>
          <p>Søk {isApplyGraduate ? 'fast jobb' : 'sommerjobb'}:</p>
          <a
            className={style.buttonPink}
            href={
              isApplyGraduate
                ? '/jobs/nyutdannet-designer-2024'
                : '/jobs/sommerjobb-designer-2024'
            }
          >
            Søk som designer
          </a>
        </div>

        <div className={style.variantLogo}>
          <img src={variantImg} alt="Variant" />
        </div>

        <div className={style.picture}>
          <ApplyImgWithBlob color={isApplyGraduate ? '#028377' : '#FAD2E2'} />
        </div>
      </div>
    </section>
  );
};

export default Apply;
