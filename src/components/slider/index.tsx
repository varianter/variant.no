import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, TapInfo } from "framer-motion";
import style from "./slider.module.css";

type SliderProps = {
  initial: number;
  to: number;
  from: number;
  onChange(value: number): void;
};

export default function Slider({ initial, to, from, onChange }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [year, setYear] = useState(initial);
  const factor = useFactor(sliderRef, thumbRef, to, from);

  // const changeListener = useCallback(
  //   (_: unknown, info: TapInfo) => {
  //     const sliderWidth = sliderRef.current?.getBoundingClientRect().width ?? 0;
  //     const sliderLeft = sliderRef.current?.getBoundingClientRect().left ?? 0;
  //     const thumbwidth = thumbRef.current?.getBoundingClientRect().width ?? 0;
  //     let newX = sliderLeft + info.point.x - sliderWidth - thumbwidth / 2;
  //     if (newX < 0) {
  //       newX = 0;
  //     }
  //     if (newX > sliderWidth) {
  //       newX = sliderWidth;
  //     }
  //   },
  //   [to, from, factor, onChange]
  // );
  const changeListener = useCallback(
    (_: unknown, info: TapInfo) => {
      console.log(info);
      const latest = info.point.x;
      console.log(latest);
      let newYear = from + latest / factor;
      if (newYear < from) {
        newYear = from;
      }
      if (newYear > to) {
        newYear = to;
      }
      console.log(newYear);
      setYear(newYear);
      // onChange(newYear);
    },
    [to, from, factor, onChange]
  );

  // useEffect(() => {
  //   console.log("adds listener");
  //   return x.onChange((latest) => {
  //     console.log(latest);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function onTap(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) {
    // if (x.isAnimating()) {
    //   event.preventDefault();
    //   x.stop();
    // }
    // const sliderWidth = sliderRef.current?.getBoundingClientRect().width ?? 0;
    // const sliderLeft = sliderRef.current?.getBoundingClientRect().left ?? 0;
    // const thumbwidth = thumbRef.current?.getBoundingClientRect().width ?? 0;
    // let newX = sliderLeft + info.point.x - sliderWidth - thumbwidth / 2;
    // if (newX < 0) {
    //   newX = 0;
    // }
    // if (newX > sliderWidth) {
    //   newX = sliderWidth;
    // }
    // x.set(newX);
  }

  return (
    <div className={style.container}>
      <motion.div className={style.slider} ref={sliderRef} onTap={onTap}>
        <motion.div
          className={style.slider__handler}
          drag="x"
          ref={thumbRef}
          dragConstraints={sliderRef}
          style={{ x }}
          dragMomentum={false}
          dragElastic={false}
          onDragEnd={changeListener}
        >
          <div className={style.year}>
            <strong>{year}</strong>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function useFactor(
  sliderRef: React.RefObject<HTMLDivElement>,
  thumbRef: React.RefObject<HTMLDivElement>,
  to: number,
  from: number
) {
  const [factor, setFactor] = useState(1);
  useEffect(() => {
    if (sliderRef.current && thumbRef.current) {
      const sliderWidth = sliderRef.current.getBoundingClientRect().width;
      const thumbwidth = thumbRef.current.getBoundingClientRect().width;

      const steps = to - from;
      setFactor((sliderWidth - thumbwidth) / steps);
    }
  }, [sliderRef, thumbRef, from, to]);

  return factor;
}
