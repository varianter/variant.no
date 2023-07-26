import style from 'src/summersplash2022/index.module.css';

import Header from 'src/summersplash2022/components/header/header';
import MoreInfo from 'src/summersplash2022/img/merInfo';
import { ApplyType } from 'src/summersplash2022/utils/utils';
import ArrowDown from 'src/summersplash2022/img/arrowDown';
import GraduateToggleArrow from '../img/graduateToggleArrow';
import SummerjobToggleArrow from 'src/summersplash2022/img/summerjobToggleArrow';
import LandingPageImgWithBlob from 'src/summersplash2022/img/landingpageImgWithBlob';

const LandingPage = ({
  applyType,
  className,
}: {
  applyType: ApplyType;
  className: string;
}) => {
  const isApplyGraduate: boolean = applyType == ApplyType.GRADUATE;

  return (
    <>
      <section
        className={`${style.landingpageSection} ${className}`}
        id="forside"
      >
        <Header white={isApplyGraduate ? true : false} />
        <div className={style.landingpageSectionTogglePageDiv}>
          <div className={style.landingpageSectionTogglePage}>
            <a
              href="/sommerjobb"
              className={!isApplyGraduate ? style.active : ''}
            >
              Sommerjobb
            </a>
            <a
              href="/nyutdannet"
              className={isApplyGraduate ? style.active : ''}
            >
              Nyutdannet
            </a>
          </div>
          {isApplyGraduate ? <SummerjobToggleArrow /> : <GraduateToggleArrow />}
        </div>
        <div className={style.landingpageSectionFlex}>
          <h1>
            Vi ser etter
            <span className={style.textGradient}>
              {isApplyGraduate ? ' 17 nyutdannede ' : ' 23 sommervarianter '}
            </span>
            i 2024!
          </h1>
          <div className={style.landingpageSectionApplyDiv}>
            <div>
              <div>
                <a
                  className={style.applyLink}
                  href={isApplyGraduate ? '#sokfastjobb' : '#sokSommerjobb'}
                >
                  Søk {isApplyGraduate ? 'fast stilling' : 'sommerjobb'}{' '}
                  <ArrowDown color={isApplyGraduate ? 'white' : '#333333'} />
                </a>
              </div>
            </div>
          </div>
          <div className={style.landingpageSectionImgDiv}>
            <LandingPageImgWithBlob />
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
