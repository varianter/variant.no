import style from './forside.module.css';
import Header from 'src/summersplash2022/components/header/header';
import MoreInfo from 'src/summersplash2022/img/merInfo';
import { ApplyType } from 'src/summersplash2022/utils/utils';
import ArrowDown from 'src/summersplash2022/img/arrowDown';
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
      <section className={`${style.section} ${className}`} id="forside">
        <Header white={isApplyGraduate ? true : false} />
        <div className={style.togglePageDiv}></div>
        <div className={style.flex}>
          <h1>
            Vi ser etter
            <span className={style.textGradient}>
              {isApplyGraduate ? ' 4 nyutdannede ' : ' 19 sommervarianter '}
            </span>
            i 2025!
          </h1>
          <div className={style.applyDiv}>
            <div>
              <div>
                <a className={style.applyLink} href={'#sokjobb'}>
                  Søk {isApplyGraduate ? 'fast stilling' : 'sommerjobb'}{' '}
                  <ArrowDown color={isApplyGraduate ? 'white' : '#333333'} />
                </a>
              </div>
            </div>
          </div>
          <div className={style.imgDiv}>
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
