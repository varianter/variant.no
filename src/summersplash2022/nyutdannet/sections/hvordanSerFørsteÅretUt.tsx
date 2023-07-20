import style from '../nyutdannet.module.css';
import Section5Blob from '../img/section5Blob';
import TimelineNarrow from 'src/summersplash2022/img/tidslinjeNarrow';
import TimelineWide from 'src/summersplash2022/img/tidslinjeWide';
import { useEffect, useState } from 'react';
const FirstYear = () => {
  const mountain = require('src/summersplash2022/nyutdannet/img/MountainImg.png');

  const [showWideTimeline, setShowWideTimeline] = useState(true);

  const checkIfNarrowOrWideTimeline = () => {
    if (window.matchMedia('(max-width: 1310px) and (min-width: 801px)').matches) {
      setShowWideTimeline(true);
    } else {
      setShowWideTimeline(false);
    }
  }

  const handleResize = () => {
    console.log("Handle resize")
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
      <section className={style.section5}>
        <h2 className={style.heading}>Hvordan ser første året ut?</h2>
        <div className={style.section5Flex}>
          <div className={style.section5Text}>
            <p>
              For å bidra til personlig og faglig utvikling av nyutdannede
              gjennomfører vi oppstartsprogrammet{' '}
              <a href="https://handbook.variant.no/#Utviklingsprogram" style={{ color: 'white' }}>
                variant:skudd
              </a>
              . Programmet gjennomføres i løpet av det første året den nyutdannede
              jobber i Variant.{' '}
            </p>
            <div className={style.section5PictureDiv}>
              <div className={style.section5PictureWrap}>

              <div className={style.section5BlobWrapper}>
                <Section5Blob />
              </div>
              <img
                className={style.section5Picture}
                src={mountain}
                alt="Mountaint trip in Oppdal"
              />
              </div>
          </div>
        </div>
        <div className={style.graphicContainer}>
          { showWideTimeline && (
            <TimelineWide />
          )}
          {!showWideTimeline && (
            <TimelineNarrow />
          )}
        </div>
        </div>
      </section>
    </>
  );
};

export default FirstYear;
