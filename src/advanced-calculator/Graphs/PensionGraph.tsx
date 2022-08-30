import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear } from '@visx/scale';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Counter from '../Counter';
import { formatCurrencyFromNumber } from '../helpers/utils';

import style from '../calculator.module.css';

const verticalMargin = 80;

// accessors
const getNumber = (d: BarData) => d.num;
const getText = (d: BarData) => d.text;

export type BarsProps = {
  data: BarData[];
  parentWidth: number;
  parentHeight: number;
};

type BarData = {
  text: string;
  num: number;
  settings: {
    gradient: [from: string, to: string];
    position: 'left' | 'right';
  };
};

export function PensionGraph({ data, parentWidth, parentHeight }: BarsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const xMax = parentWidth;
  const yMax = parentHeight - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getText),
        paddingInner: 0.4,
        paddingOuter: 0.1,
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
      width={parentWidth}
      height={parentHeight}
      style={{ overflow: 'visible' }}
    >
      {/*  <GradientTealBlue id="teal" /> */}

      <Group top={verticalMargin}>
        {data.map((d, index) => {
          const text = getText(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getNumber(d)) ?? 0);
          const barX = xScale(text);
          const barY = yMax - barHeight;
          const [from, to] = d.settings.gradient;
          return (
            <g key={`bar-${index}`}>
              <LinearGradient
                id={'lol-' + index}
                y1={'-50%'}
                y2={'150%'}
                x1={'25%'}
                x2={'75%'}
                to={to}
                from={from}
              />
              <motion.rect
                width={barWidth}
                height={barHeight}
                x={barX}
                animate={{ height: barHeight, y: barY, x: 0 }}
                fill={`url(#lol-${index})`}
                rx={10}
              />

              <motion.g
                animate={{ x: barX, y: barY - 50 }} // subtract the height
              >
                <motion.foreignObject
                  width={barWidth}
                  height="50"
                  style={{
                    overflow: 'visible',
                  }}
                >
                  <div
                    className={style['pension-graph__text-wrapper']}
                    data-position={d.settings.position}
                  >
                    <span className={style['pension-graph__percentage']}>
                      {text}
                    </span>
                    <div className={style['pension-graph__number']}>
                      <Counter
                        num={d.num}
                        formatter={formatCurrencyFromNumber}
                      />
                      {/* {formatCurrencyFromNumber(d.num)} */}
                    </div>
                  </div>
                </motion.foreignObject>
              </motion.g>
            </g>
          );
        })}
      </Group>
    </svg>
  );
}

const PensionGraphParent = ({ data }: { data: BarData[] }) => {
  return (
    <div className={style['pension-graph']}>
      <ParentSize>
        {({ width, height }) => (
          <PensionGraph parentHeight={height} parentWidth={width} data={data} />
        )}
      </ParentSize>
    </div>
  );
};

export default PensionGraphParent;
