import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import styles from "src/advanced-calculator/calculator.module.css";
import Counter from "src/advanced-calculator/Counter";
import { formatCurrencyFromNumber } from "src/advanced-calculator/helpers/utils";

const verticalMargin = 80;

const getNumber = (d: BarData) => d.num;
const getText = (d: BarData) => d.text;

type BarsProps = {
  data: BarData[];
  parentWidth: number;
  parentHeight: number;
};

type BarData = {
  text: string;
  num: number;
  color: string;
  position: string;
};

function PensionGraph({ data, parentWidth, parentHeight }: BarsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  const xMax = parentWidth * 2;
  const yMax = parentHeight - verticalMargin;

  // Sort data to ensure the highest bar is rendered last (on top)
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.num - a.num);
  }, [data]);

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: sortedData.map(getText),
      }),
    [xMax, sortedData],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...sortedData.map(getNumber))],
      }),
    [yMax, sortedData],
  );

  return parentWidth < 10 || !visible ? null : (
    <svg
      width={parentWidth}
      height={parentHeight}
      style={{ overflow: "visible" }}
    >
      <Group top={verticalMargin}>
        {data.map((d, index) => {
          const text = getText(d);
          const barWidth = xScale.bandwidth() / 3;
          const barHeight = yMax - (yScale(getNumber(d)) ?? 0);
          const barX = (xScale(text) ?? 0) / 2;

          const barY = yMax - barHeight;

          return (
            <g key={`bar-${index}`}>
              <motion.rect
                width={barWidth}
                height={barHeight}
                x={barX}
                animate={{ height: barHeight, y: barY, x: 0 }}
                fill={d.color}
                rx={10}
              />
              <motion.g animate={{ x: barX, y: barY - 50 }}>
                <motion.foreignObject
                  width={barWidth}
                  height="50"
                  style={{
                    overflow: "visible",
                  }}
                >
                  <div
                    className={styles.pensionGraphTextWrapper}
                    data-position={d.position}
                  >
                    <span className={styles.pensionGraphPercentage}>
                      {text}
                    </span>
                    <div className={styles.pensionGraphNumber}>
                      <Counter
                        num={d.num}
                        formatter={formatCurrencyFromNumber}
                      />
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
    <div className={styles.pensionGraph}>
      <ParentSize>
        {({ width, height }) => (
          <PensionGraph parentHeight={height} parentWidth={width} data={data} />
        )}
      </ParentSize>
    </div>
  );
};

export default PensionGraphParent;
