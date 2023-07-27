import style from 'src/summersplash2022/sections/hvordanSerFørsteÅretUt.module.css';
import sharedStyle from 'src/summersplash2022/index.module.css';
import DarkPinkBlob from '../img/darkPinkBlob';
import TimelineNarrow from 'src/summersplash2022/img/tidslinjeNarrow';
import TimelineWide from 'src/summersplash2022/img/tidslinjeWide';
import { useEffect, useState } from 'react';

const FirstYear = () => {
  const mountain = require('src/summersplash2022/img/MountainImg.png');

  const [showWideTimeline, setShowWideTimeline] = useState(true);

  const checkIfNarrowOrWideTimeline = () => {
    if (
      window.matchMedia('(max-width: 1310px) and (min-width: 801px)').matches
    ) {
      setShowWideTimeline(true);
    } else {
      setShowWideTimeline(false);
    }
  };

  const handleResize = () => {
    checkIfNarrowOrWideTimeline();
  };

  useEffect(() => {
    if (window) {
      checkIfNarrowOrWideTimeline();
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <section className={`${style.section} ${sharedStyle.sectionDarkPink}`}>
        <h2>Hvordan ser første året ut?</h2>
        <div className={style.flex}>
          <div className={style.text}>
            <p>
              For å bidra til personlig og faglig utvikling av nyutdannede
              gjennomfører vi oppstartsprogrammet{' '}
              <a href="https://handbook.variant.no/#Utviklingsprogram">
                variant:skudd
              </a>
              . Programmet gjennomføres i løpet av det første året den
              nyutdannede jobber i Variant.
            </p>
            <div className={style.imgDiv}>
              <div className={style.imgWrap}>
                <div className={style.blobWrapper}>
                  <DarkPinkBlob />
                </div>
                <img
                  className={style.img}
                  src={mountain}
                  alt="Fjelltur på Oppdal"
                />
              </div>
            </div>
          </div>
          <div className={style.timelineDiv}>
            {showWideTimeline && <TimelineWide />}
            {!showWideTimeline && <TimelineNarrow />}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstYear;
