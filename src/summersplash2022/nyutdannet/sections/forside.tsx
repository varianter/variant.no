import style from 'src/summersplash2022/index.module.css';
import Section1Blob from '../img/section1Blob';
import Header from 'src/summersplash2022/components/header/header';
import MoreInfo from 'src/summersplash2022/img/merInfo';
import { ApplyType } from 'src/summersplash2022/utils/utils';
import PinkBlob from '../img/pinkBlob';

const LandingPage = ({ applyType }: { applyType: ApplyType }) => {
  const blobSection1 = require('src/summersplash2022/img/section1Blob.png');
  const isApplyGraduate: boolean = applyType == ApplyType.GRADUATE;

  return (
    <>
      <section className={style.section1} id="forside">
        <div className={style.header}>
          <Header white={isApplyGraduate ? true : false} />
        </div>
        <h1 className={style.bigHeading}>
          Vi ser etter
          <span className={style.textGradient}>
            {isApplyGraduate ? ' 17 nyutdannede ' : ' 23 sommervarianter '}
          </span>
          i 2024!
        </h1>
        <div className={style.section1Flex}>
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
          <div className={style.section1Blobs}>
            <div className={style.section1BlobsWrapper}>
              <img
                className={style.imageBlob1}
                src={blobSection1}
                alt="To fra Variant"
              />
              {isApplyGraduate && <Section1Blob />}
              {!isApplyGraduate && <PinkBlob />}
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
