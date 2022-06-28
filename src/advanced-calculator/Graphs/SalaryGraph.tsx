import { useMemo } from 'react';
import { ParentSize } from '@visx/responsive';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { curveLinear } from '@visx/curve';
import { Payscale, PayscaleEntry } from '../helpers/getPayscale';
import { max, min, extent } from 'd3-array';
import { formatCurrencyFromNumber, getLastInArray } from '../helpers/utils';
import { LinearGradient } from '@visx/gradient';

import style from '../calculator.module.css';

const getYear = (d: PayscaleEntry): Date => d.date;
const getPayValue = (d: PayscaleEntry): number => d.pay;

const SalaryGraph = ({
  payscale,
  parentHeight,
  parentWidth,
}: {
  payscale: Payscale;
  parentHeight: number;
  parentWidth: number;
}) => {
  const height = parentHeight;
  const width = parentWidth;
  const padding = {
    top: height / 10,
    bottom: height / 10,
    left: 30,
    right: 30,
  };

  const yMin = padding.top;
  const yMax = height - (padding.top + padding.bottom);
  // const xMin = 0;
  const xMax = width - (padding.left + padding.right);

  const { historic, prognosis } = payscale;
  const proggo = [getLastInArray(historic), ...prognosis];
  const markers = useMemo(
    () => [...historic, ...prognosis],
    [historic, prognosis],
  );

  const yearScale = useMemo(
    () =>
      scaleTime({
        range: [width, 0],
        domain: extent(markers, getYear).reverse() as [Date, Date],
      }),
    [width, markers],
  );

  const payScale = useMemo(
    () =>
      scaleLinear({
        range: [yMin, yMax],
        domain: [
          max(markers, getPayValue) || 0,
          min(markers, getPayValue) || 1000000,
        ],
        nice: true,
      }),
    [yMin, yMax, markers],
  );

  return (
    <div className={style['payscale-wrapper']}>
      <svg
        className={style['payscale']}
        width={width}
        height={height}
        style={{ overflow: 'visible' }}
      >
        <LinearGradient
          id={'salary'}
          y1={'-50%'}
          y2={'150%'}
          x1={'25%'}
          x2={'75%'}
          from="#F8D2D2"
          to="#C4C0DC"
        />

        <rect
          x={padding.left}
          y={padding.top}
          width={xMax}
          height={yMax}
          rx={20}
          /* fill="var(--color-secondary3__tint1)" */
          fill="url(#salary)"
        />

        <LinePath
          data={historic}
          x={(d) => yearScale(getYear(d))}
          y={(d) => payScale(getPayValue(d))}
          strokeWidth={2}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          curve={curveLinear}
        />

        <LinePath
          data={proggo}
          x={(d) => yearScale(getYear(d))}
          y={(d) => payScale(getPayValue(d))}
          strokeWidth={2}
          shapeRendering="geometricPrecision"
          strokeDasharray="4"
          stroke="currentColor"
          curve={curveLinear}
        />

        {markers.map(({ year, pay, date }) => (
          <g
            className={style['marker-group']}
            key={year}
            transform={`translate(${yearScale(date)} ${payScale(pay)})`}
          >
            <foreignObject x="10" y="0" width="100" height="100">
              <div>
                <span
                  style={{
                    color: 'var(--color-secondary3__shade3)',
                    fontSize: '12px',
                  }}
                >
                  {year}
                </span>
                <div style={{ fontSize: '20px', lineHeight: 1 }}>
                  {formatCurrencyFromNumber(pay)}
                </div>
              </div>
            </foreignObject>
            <circle
              key={year}
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="var(--color-secondary2__tint3)"
            />
          </g>
        ))}
      </svg>
      <div className={style['omg']}>— historisk vekst</div>
      <div className={style['omg']}>- - - basert på X år mer erfaring</div>
    </div>
  );
};

const SalaryGraphParent = ({ payscale }: { payscale: Payscale }) => {
  return (
    <div style={{ aspectRatio: '5/3', width: '100%' }}>
      <ParentSize>
        {({ width, height }) => (
          <SalaryGraph
            parentHeight={height}
            parentWidth={width}
            payscale={payscale}
          />
        )}
      </ParentSize>
    </div>
  );
};

export default SalaryGraphParent;
