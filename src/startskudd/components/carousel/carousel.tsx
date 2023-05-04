import style from './carousel.module.css';
import image1 from './images/20220807-235420-Bjerkelokkja-Trondelag-2022.jpg';
import image2 from './images/20220808-163026-Bjerkelokkja-Trondelag-2022.jpg';
import image3 from './images/20220808-205047-Trondelag-Norway-2022.jpg';
import image4 from './images/20220809-053527-Trondelag-Norway-2022.jpg';
import image5 from './images/20220809-065100-People-Trondelag-2022.jpg';
import image6 from './images/20220809-190121-Trondelag-Norway-2022.jpg';
import image7 from './images/20220810-184029-Bjerkelokkja-Trondelag-2022.jpg';
import image8 from './images/20220811-185923-Trondelag-Norway-2022.jpg';
import image9 from './images/20220811-222048-Bjerkelokkja-Trondelag-2022.jpg';
import image10 from './images/20220812-115433-Trym-Morten-And-Jon-Trondelag-2022.jpg';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const imagesSrc: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Carousel = () => {
  const [imageIndex, setImageIdex] = useState(0);
  return (
    <div className={style.carousel}>
      <AnimatePresence>
        <div className={style.images}>
          {imagesSrc.map((imageSrc, index) => {
            return (
              <motion.div
                className={style.motion_div}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                animate={{ x: `-${imageIndex * 100}%` }}
                transition={{ ease: 'linear' }}
              >
                <div className={style.image_div}>
                  <img
                    className={style.image}
                    src={imageSrc}
                    alt={`bilde ${index}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
      <div className={style.buttons}>
        {imageIndex > 0 && (
          <button onClick={() => setImageIdex(imageIndex - 1)}>Tilbake</button>
        )}
        {imageIndex < imagesSrc.length - 1 && (
          <button onClick={() => setImageIdex(imageIndex + 1)}>Neste</button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
