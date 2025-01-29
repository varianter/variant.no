"use client";

import { curveLinear } from "@visx/curve";
import { ParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { extent, max, min } from "d3-array";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

import styles from "src/advanced-calculator/calculator.module.css";
import {
  Payscale,
  PayscaleEntry,
} from "src/advanced-calculator/helpers/getPayscale";
import {
  formatCurrencyFromNumber,
  getLastInArray,
} from "src/advanced-calculator/helpers/utils";
import Text from "src/components/text/Text";

const getYear = (d: PayscaleEntry): Date => d?.date ?? new Date();
const getPayValue = (d: PayscaleEntry): number => d?.pay;

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
  const xMax = width - (padding.left + padding.right);

  const { historic, prognosis } = payscale;
  const projectedPayscale = [getLastInArray(historic), ...prognosis];
  const markers = useMemo(() => {
    return [...historic, ...prognosis].filter(
      (entry) => entry.date instanceof Date && typeof entry.pay === "number",
    );
  }, [historic, prognosis]);

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
          max(markers, getPayValue) ?? 0,
          min(markers, getPayValue) ?? 1000000,
        ],
        nice: true,
      }),
    [yMin, yMax, markers],
  );

  return (
    <div>
      <svg
        className={styles.payscale}
        width={width}
        height={height}
        style={{ overflow: "visible" }}
      >
        <rect
          x={padding.left}
          y={padding.top}
          width={xMax}
          height={yMax}
          rx={20}
          fill="var(--surface-violet-light)"
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
          data={projectedPayscale}
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
            key={year}
            transform={`translate(${yearScale(date)} ${payScale(pay)})`}
          >
            <circle
              key={year}
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="var(--surface-violet-light)"
            />
            <foreignObject
              x="-50"
              y="10"
              width="100"
              height="50"
              className={styles.markerText}
            >
              <div className={styles.markerTextContainer}>
                <Text type="labelRegular" className={styles.markerYear}>
                  {year}
                </Text>
                <Text type="h5" className={styles.markerPay}>
                  {formatCurrencyFromNumber(pay)}
                </Text>
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
};

const SalaryGraphParent = ({ payscale }: { payscale: Payscale }) => {
  const t = useTranslations("compensation.salary");

  return (
    <div style={{ aspectRatio: "5/3", width: "90%", margin: "auto" }}>
      <ParentSize>
        {({ width, height }) => (
          <SalaryGraph
            parentHeight={height}
            parentWidth={width}
            payscale={payscale}
          />
        )}
      </ParentSize>
      <p>{t("historicalGrowth")}</p>
      <p>{t("basedOnExperience")}</p>
    </div>
  );
};

export default SalaryGraphParent;
