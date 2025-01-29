import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import styles from "src/advanced-calculator/calculator.module.css";
import Counter from "src/advanced-calculator/Counter";
import { formatCurrencyFromNumber } from "src/advanced-calculator/helpers/utils";
import { BonusPage } from "studio/lib/interfaces/compensations";

// accessors
const getNumber = (d: BonusPage) => d.bonus;
const getText = (d: BonusPage) => String(d.year);

type BarsProps = {
  yearlyBonusesForLocation: BonusPage[];
  parentWidth: number;
  parentHeight: number;
};

function BonusGraph({
  yearlyBonusesForLocation,
  parentWidth,
  parentHeight,
}: BarsProps) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  const isMobile = parentWidth < 400;
  const verticalMargin = isMobile ? 50 : 80;

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
        domain: yearlyBonusesForLocation.map(getText),
        paddingInner: 0.1,
      }),
    [xMax, yearlyBonusesForLocation],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...yearlyBonusesForLocation.map(getNumber))],
      }),
    [yMax, yearlyBonusesForLocation],
  );

  return parentWidth < 10 || !visible ? null : (
    <svg
      ref={ref}
      width={parentWidth}
      height={parentHeight}
      style={{ overflow: "visible", display: "block" }}
    >
      <Group top={verticalMargin}>
        {yearlyBonusesForLocation.map((d, index) => {
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
              y: barY - (isMobile ? 30 : 50),
              opacity: 1,
            },
          };

          return (
            <g key={`bar-${index}`}>
              <motion.rect
                width={barWidth}
                x={barX}
                fill="var(--surface-violet-vivid)"
                rx={20}
                transition={transition}
                variants={barRectVariant}
                initial="offscreen"
                animate={inView ? "onscreen" : "offscreen"}
              />

              <motion.g
                className={styles.pensionGraphTextWrapper}
                variants={barLabelVariant}
                animate={inView ? "onscreen" : "offscreen"}
                transition={transition}
                initial="offscreen"
              >
                <foreignObject
                  className={styles.pensionGraphForeignObject}
                  style={{
                    overflow: "visible",
                  }}
                  width={barWidth}
                  height="50"
                  x={barX}
                >
                  <motion.div>
                    <span className={styles.pensionGraphPercentage}>
                      {text}
                    </span>
                    <div className={styles.pensionGraphNumber}>
                      <Counter
                        initial={0}
                        num={inView ? num : 0}
                        formatter={formatCurrencyFromNumber}
                      />
                    </div>
                  </motion.div>
                </foreignObject>
              </motion.g>
            </g>
          );
        })}
      </Group>
    </svg>
  );
}

const BonusGraphParent = ({
  yearlyBonusesForLocation,
}: {
  yearlyBonusesForLocation: BonusPage[];
}) => {
  return (
    <div style={{ aspectRatio: "7/3", width: "90%", margin: "auto" }}>
      <ParentSize>
        {({ width, height }) => {
          return (
            <BonusGraph
              parentHeight={height}
              parentWidth={width}
              yearlyBonusesForLocation={yearlyBonusesForLocation}
            />
          );
        }}
      </ParentSize>
    </div>
  );
};

export default BonusGraphParent;
