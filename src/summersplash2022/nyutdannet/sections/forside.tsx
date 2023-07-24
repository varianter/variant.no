import style from 'src/summersplash2022/index.module.css';
import BlueBlob from '../img/blueBlob';
import PinkBlob from '../img/pinkBlob';
import Header from 'src/summersplash2022/components/header/header';
import MoreInfo from 'src/summersplash2022/img/merInfo';
import { ApplyType } from 'src/summersplash2022/utils/utils';

const LandingPage = ({
  applyType,
  className,
}: {
  applyType: ApplyType;
  className: string;
}) => {
  const image = require('src/summersplash2022/img/section1Blob.png');
  const isApplyGraduate: boolean = applyType == ApplyType.GRADUATE;

  return (
    <>
      <section
        className={`${style.landingpageSection} ${className}`}
        id="forside"
      >
        <Header white={isApplyGraduate ? true : false} />
        <h1>
          Vi ser etter
          <span className={style.textGradient}>
            {isApplyGraduate ? ' 17 nyutdannede ' : ' 23 sommervarianter '}
          </span>
          i 2024!
        </h1>
        <div className={style.landingpageSectionFlex}>
          <div className={style.landingpageSectionApplyDiv}>
            <div>
              <p>Søk senest 1. oktober</p>
              <div>
                <a
                  className={style.applyButtonPink}
                  href={isApplyGraduate ? '#sokfastjobb' : '#sokSommerjobb'}
                >
                  Søk {isApplyGraduate ? 'fast jobb' : 'sommerjobb'}
                </a>
              </div>
            </div>
            <div>
              <p>
                {isApplyGraduate
                  ? 'Fortsatt et par år igjen med studier?'
                  : 'Ferdig utdannet i 2024?'}
              </p>
              <div>
                <a
                  className={style.applyButtonBlue}
                  href={isApplyGraduate ? '/sommerjobb' : '/nyutdannet'}
                >
                  Jeg vil ha {isApplyGraduate ? 'sommerjobb' : 'fast jobb'}
                </a>
              </div>
            </div>
          </div>
          <div className={style.landingpageSectionImgDiv}>
            <div className={style.landingpageSectionImgBlobWrapper}>
              <img
                className={style.landingpageSectionImg}
                src={image}
                alt="To fra Variant"
              />
              {isApplyGraduate ? <BlueBlob /> : <PinkBlob />}
            </div>
          </div>
        </div>

        <div className={style.moreInfoDiv}>
          <MoreInfo white={isApplyGraduate ? true : false} />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
