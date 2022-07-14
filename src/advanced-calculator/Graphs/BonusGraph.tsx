import { GradientTealBlue, LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear } from '@visx/scale';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Counter from '../Counter';
import { formatCurrencyFromNumber } from '../helpers/utils';

import style from '../calculator.module.css';

const verticalMargin = 80;

// accessors
const getNumber = (d: BarData) => d[1];
const getText = (d: BarData) => String(d[0]);

type BarData = [text: number | string, bonus: number];

export type BarsProps = {
  data: BarData[];
  parentWidth: number;
  parentHeight: number;
};

export function BonusGraph({ data, parentWidth, parentHeight }: BarsProps) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  const xMax = parentWidth;
  const yMax = parentHeight - verticalMargin;

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getText),
        paddingInner: 0.1,
        /*  paddingOuter: 0.1 */
      }),
    [xMax, data],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getNumber))],
      }),
    [yMax, data],
  );

  return parentWidth < 10 || !visible ? null : (
    <svg
      ref={ref}
      width={parentWidth}
      height={parentHeight}
      style={{ overflow: 'visible', display: 'block' }}
    >
      <GradientTealBlue id="teal" />
      <LinearGradient
        id={'purple'}
        y1={'-50%'}
        y2={'200%'}
        x1={'25%'}
        x2={'75%'}
        from="#534DAC"
        to="#FFE7E4"
      />

      <Group top={verticalMargin}>
        {data.map((d, index) => {
          const text = getText(d);
          const num = getNumber(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getNumber(d)) ?? 0);
          const barX = xScale(text);
          const barY = yMax - barHeight;

          const transition = { duration: 1, delay: (index + 1) * 0.1 };
          const barRectVariant = {
            offscreen: {
              height: 0,
              y: yMax,
              x: 0,
              opacity: 0.5,
            },
            onscreen: {
              height: barHeight,
              y: barY,
              x: 0,
              opacity: 1,
            },
          };

          const barLabelVariant = {
            offscreen: {
              y: yMax - 50,
              opacity: 0,
            },
            onscreen: {
              y: barY - 50,
              opacity: 1,
            },
          };

          return (
            <g key={`bar-${index}`}>
              <motion.rect
                width={barWidth}
                x={barX}
                fill="url(#purple)"
                rx={20}
                transition={transition}
                variants={barRectVariant}
                initial="offscreen"
                animate={inView ? 'onscreen' : 'offscreen'}
              />

              <foreignObject
                className={style['pension-graph__foreign-object']}
                style={{ overflow: 'visible' }}
                width={barWidth}
                height="50"
                x={barX}
              >
                <motion.div
                  className={style['pension-graph__text-wrapper']}
                  variants={barLabelVariant}
                  animate={inView ? 'onscreen' : 'offscreen'}
                  transition={transition}
                  //data-position={d.settings.position}
                >
                  <span className={style['pension-graph__percentage']}>
                    {text}
                  </span>
                  <div className={style['pension-graph__number']}>
                    <Counter
                      initial={0}
                      num={inView ? num : 0}
                      formatter={formatCurrencyFromNumber}
                    />
                  </div>
                </motion.div>
              </foreignObject>
            </g>
          );
        })}
      </Group>
    </svg>
  );
}

const BonusGraphParent = ({ bonus }: { bonus: BarData[] }) => {
  return (
    <div style={{ aspectRatio: '7/3', width: '100%' }}>
      <ParentSize>
        {({ width, height }) => {
          return (
            <BonusGraph
              parentHeight={height}
              parentWidth={width}
              data={bonus}
            />
          );
        }}
      </ParentSize>
    </div>
  );
};

export default BonusGraphParent;
