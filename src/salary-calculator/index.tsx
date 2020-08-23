import anime from "animejs";
import React, { useEffect, useRef, useState } from "react";
import Layout from "src/layout";
import RadioButton from "../components/radio-button";
import Slider from "../components/slider";
import { calculateEstimatedSalaray, getMaxYear, Degree } from "./calculate";
import style from "./index.module.css";

const SalaryCalculator = () => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <Calculator />
      </div>
    </Layout>
  );
};

export default SalaryCalculator;

const formatCurrency = (pay: string | undefined) => {
  if (!pay) return pay;
  return new Intl.NumberFormat("nb-NO").format(parseInt(pay));
};

const Calculator = () => {
  const [degree, setDegree] = useState<Degree>("masters");
  const [selectedYear, setSelectedYear] = useState(2007);
  const containerRef = useRef(null);
  const maxYear = getMaxYear();

  const [salary, setSalary] = useState("0");

  useEffect(() => {
    let payObj = { value: salary };
    anime({
      targets: payObj,
      value: calculateEstimatedSalaray(selectedYear, degree),
      duration: 500,
      round: 1,
      easing: "easeInOutExpo",
      update: () => setSalary(formatCurrency(payObj.value) ?? ""),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, degree]);

  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.calculatorContainer}>
        <div className={style.topSvgContainer}>
          <svg width="100%" height="100%" viewBox="0 0 600 600">
            <g transform="translate(300, 300)">
              <path
                className="top-path"
                d="M136.6,-181.3C183.8,-153.7,233.59999999999997,-122.9,248.4,-80.1C263.1,-37.3,242.8,17.5,201.7,41.2C160.5,64.9,98.5,57.5,61.400000000000006,61.5C24.299999999999997,65.4,12.100000000000001,80.7,-21.5,110.2C-55.1,139.8,-110.1,183.6,-132.6,174.9C-155.1,166.2,-145.1,105,-151.3,56.2C-157.6,7.3,-180.1,-29.3,-167.1,-49.6C-154.1,-70,-105.5,-74.3,-71.8,-106.3C-38,-138.3,-19,-198.2,12.8,-215.8C44.7,-233.5,89.3,-209,136.6,-181.3Z"
                fill={"rgba(204, 52, 112, 1)"}
                stroke="none"
                strokeWidth="0"
              ></path>
            </g>
          </svg>
        </div>
        <div className={style.svgContainer}>
          <svg width="100%" height="100%" viewBox="0 0 500 500">
            <g transform="translate(250, 250)">
              <path
                className="path"
                id="clippingPath"
                d="M114,-157.7C152.3,-129,191.3,-101.9,194.1,-68.8C196.9,-35.7,163.6,3.3,137.8,33C111.9,62.7,93.6,83.1,71.9,99.6C50.2,116,25.1,128.5,-9.200000000000001,141.2C-43.5,153.9,-87,166.7,-107.4,149.9C-127.9,133,-125.3,86.4,-148.6,41.9C-171.8,-2.6999999999999993,-221,-45.2,-224.5,-84.9C-228.1,-124.6,-186,-161.4,-141,-187.9C-96,-214.5,-48,-230.7,-5.1,-223.7C37.8,-216.7,75.6,-186.4,114,-157.7Z"
                fill="#03dac6"
                stroke="none"
                strokeWidth="0"
              ></path>
            </g>
          </svg>
        </div>

        <fieldset className={style.contentContainer}>
          <h2 className={style.title}>Lønnskalkulator</h2>

          <p>
            Vil du vite hva du vil tjene hos oss? Svar på to enkle spørsmål:
          </p>

          <div className={style.gradeContainer}>
            <h3 className={style.question}>
              Hvilken grad du har eller får du?
            </h3>

            <RadioButton
              changed={setDegree}
              id="degree-1"
              isSelected={degree === "bachelor"}
              label="Bachelor"
              value="bachelor"
            />

            <RadioButton
              changed={setDegree}
              id="degree-2"
              isSelected={degree === "masters"}
              label="Master"
              value="masters"
            />
          </div>

          <h3 className={style.question}>Når ble du ferdig med graden?</h3>
          <div className={style.barSliderContainer}>
            <span
              className={style.icon}
              aria-label="Grown lady icon"
              role="img"
            >
              👵
            </span>
            <Slider
              initial={selectedYear}
              to={maxYear}
              from={1990}
              onChange={setSelectedYear}
              label={"Utdanningsår"}
            />
            <span className={style.icon} aria-label="Child icon" role="img">
              👶
            </span>
          </div>

          <footer className={style.summary}>
            <div className={style.calculation}>
              <div className={style.question}>Da blir lønnen din sånn:</div>
              <div className={style.flexRow}>
                <span>Utdanning</span>
                <span className={style.number}>
                  {degree == "masters" ? 5 : 3} år
                </span>
              </div>
              <div className={style.flexRow}>
                <span>Erfaring</span>
                <span className={style.number}>
                  {maxYear - selectedYear} år
                </span>
              </div>
              <div className={style.flexRow}>
                <span>Din årslønn i Variant</span>
                <span className={style.number}>{salary}</span>
              </div>
            </div>
          </footer>
        </fieldset>
      </div>
    </div>
  );
};
