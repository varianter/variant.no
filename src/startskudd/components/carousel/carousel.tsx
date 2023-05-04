import Image from 'next/image';

import style from './carousel.module.css';
import image1 from './images/DSC09238.jpg';
import image2 from './images/DSC09322.jpg';
import image3 from './images/DSC09358.jpg';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const imagesSrc: string[] = [image1, image2, image3];

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
