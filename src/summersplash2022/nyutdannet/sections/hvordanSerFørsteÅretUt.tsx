import style from '../nyutdannet.module.css';
import TimeLine2 from '../img/tidslinje';
import Section5Blob from '../img/section5Blob';
import TimeLine2Mobile from 'src/summersplash2022/img/tidslinje2Mobil';
import { useEffect, useState } from 'react';
const FirstYear = () => {
  const mountain = require('src/summersplash2022/nyutdannet/img/MountainImg.png');

  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.matchMedia('(max-width: 1400px)').matches) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    if (window) {
      if (window.matchMedia('(max-width: 1400px)').matches) {
        setIsDesktop(false);
      }
      window.addEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <section className={style.section5}>
        <h2 className={style.heading}>Hvordan ser første året ut?</h2>
        <p>
          For å bidra til personlig og faglig utvikling av nyutdannede
          gjennomfører vi oppstartsprogrammet{' '}
          <a href="https://handbook.variant.no/#Utviklingsprogram" style={{ color: 'white' }}>
            variant:skudd
          </a>
          . Programmet gjennomføres i løpet av det første året den nyutdannede
          jobber i Variant.{' '}
        </p>
        <div className={style.graphicContainer}>
          {isDesktop ? <TimeLine2 /> : <TimeLine2Mobile />}
          <div className={style.section5PictureDiv}>
            <div className={style.section5Blob}>
              <Section5Blob />
            </div>
            <img
              className={style.section5Picture}
              src={mountain}
              alt="Mountaint trip in Oppdal"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstYear;
