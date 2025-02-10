"use client";

import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { use, useEffect } from "react";

import {
  calculateSalary,
  getDegreeOptions,
  getMaybeMaxYear,
  getMinMaxYear,
} from "src/components/compensations/utils/salary";
import InputField from "src/components/forms/inputField/InputField";
import { RadioButtonGroup } from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { Result } from "studio/utils/result";

import styles from "./compensation-calculator.module.css";
import { Degree, SalaryData } from "./types";

type CalculatorProps = {
  localeRes: Promise<LocaleDocument>;
  salariesRes: Promise<Result<SalaryData, unknown>>;
  background: "light" | "dark" | "violet";
  initialYear?: number;
};

export default function Calculator({
  localeRes,
  salariesRes,
  initialYear,
  background,
}: CalculatorProps) {
  const t = useTranslations("compensation");
  const locale = use(localeRes);
  const salaries = use(salariesRes);

  const [year, setYear] = useQueryState<number | null>("year", {
    defaultValue:
      initialYear ?? getMaybeMaxYear(salaries) ?? new Date().getFullYear(),
    parse: (value) => (value ? parseInt(value, 10) : null),
    serialize: (value) => (value ? value.toString() : ""),
  });

  const [degree, setDegree] = useQueryState<Degree>("degree", {
    defaultValue: "master",
    parse: (value) => (value as Degree) ?? null,
    serialize: (value) => value ?? "",
  });

  const [salary, setSalary] = useQueryState<number | null>("salary", {
    defaultValue: salaries.ok
      ? (calculateSalary(
          initialYear ?? getMaybeMaxYear(salaries) ?? new Date().getFullYear(),
          "master",
          salaries.value,
        ) ?? 0)
      : 0,
    parse: (value) => (value ? parseFloat(value) : null),
    serialize: (value) => (value ? value.toString() : ""),
  });

  // Update calculatedSalary whenever year, degree, or salaries change
  useEffect(() => {
    if (salaries.ok) {
      const newSalary = calculateSalary(year, degree, salaries.value) ?? 0;
      setSalary(newSalary);
    }
  }, [year, degree, salaries, setSalary]);

  if (!locale || !salaries.ok) {
    console.error(
      "[CompensationCalculator]: Sanity data not found. Not rendering CompensationCalculator.",
    );
    return null;
  }

  const { min, max } = getMinMaxYear(salaries.value);
  const degreeOptions = getDegreeOptions(t);

  return (
    <form
      className={styles.formCalculator}
      aria-label={t("calculator.formLabel")}
    >
      <RadioButtonGroup
        id="degree-group"
        label={t("calculator.educationInput")}
        options={degreeOptions}
        background={background}
        selectedId={degree}
        onValueChange={(selectedOption) =>
          setDegree(selectedOption.id as Degree)
        }
      />
      <div className={styles.inputWrapper}>
        <InputField
          label={t("calculator.yearInput")}
          name="examinationYear"
          type="number"
          min={min}
          max={max}
          value={year}
          onChange={(_name, value) => setYear(parseInt(value))}
          required
        />
      </div>
      {salary !== null ? (
        <div aria-live="polite" className={styles.salaryTextContainer}>
          <Text type="labelRegular">{t("calculator.resultLabel")}</Text>
          <p className={styles.salaryText}>
            {formatAsCurrency(salary, locale.locale, locale.currency)}
          </p>
          <Text type="labelRegular">{t("calculator.bonusResult")}</Text>
        </div>
      ) : null}
      {/* This is very temporary, remove once new data is available */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rotate: "3deg",
          paddingTop: "3rem",
        }}
      >
        <svg
          width="300"
          height="120"
          viewBox="0 0 742 592"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "0px", // Adjust to move the SVG lower
            zIndex: -1,
          }}
        >
          <path
            d="M88.3348 29.664C90.3515 18.804 100.79 11.6351 111.65 13.6518L715.33 125.755C726.19 127.772 733.359 138.21 731.342 149.071L654.659 562.011C652.642 572.871 642.203 580.04 631.343 578.023L27.664 465.92C16.8039 463.903 9.63499 453.464 11.6517 442.604L88.3348 29.664Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M680.432 353.06C702.733 232.986 623.473 117.569 503.399 95.2683L318.769 60.9776C198.696 38.6768 83.2786 117.937 60.9778 238.011V238.011C38.677 358.084 117.937 473.501 238.011 495.802L422.641 530.093C542.714 552.394 658.132 473.133 680.432 353.06V353.06ZM104.583 3.22644V3.22644C94.9891 1.44452 85.7669 7.7777 83.985 17.372V17.372L3.22659 452.196V452.196C1.44468 461.791 7.77786 471.013 17.3721 472.795V472.795L636.827 587.844V587.844C646.421 589.626 655.643 583.293 657.425 573.698V573.698L738.184 138.874V138.874C739.965 129.28 733.632 120.057 724.038 118.276V118.276L104.583 3.22644Z"
            fill="#FFD02F"
          />
          <circle
            cx="208.397"
            cy="116.299"
            r="8.83453"
            transform="rotate(10.5215 208.397 116.299)"
            fill="#282828"
          />
          <circle
            cx="295.257"
            cy="132.432"
            r="8.83453"
            transform="rotate(10.5215 295.257 132.432)"
            fill="#282828"
          />
          <path
            d="M270.663 158.415C268.881 168.009 256.548 173.765 243.116 171.27C229.684 168.775 220.24 158.975 222.021 149.381"
            stroke="#282828"
            strokeWidth="7.06762"
            strokeLinecap="round"
          />
        </svg>

        <p
          style={{
            border: "2px solid var(--surface-yellow)",
            padding: "5px 15px",
            borderRadius: "15px",
            backgroundColor: "white",
          }}
        >
          {t("calculator.notice")}
        </p>
      </div>
    </form>
  );
}
