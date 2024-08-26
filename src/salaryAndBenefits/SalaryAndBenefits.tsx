"use client";
import styles from "./salaryAndBenefits.module.css";
import Text from "src/components/text/Text";
import { SalaryAndBenefitsPage } from "studio/lib/payloads/salaryAndBenefits";
import { RichText } from "src/components/richText/RichText";
import SalaryCalculator, {
  Degree,
} from "./components/salaryCalculator/SalaryCalculator";
import { useState } from "react";
import { calculatePension, calculateSalary } from "./utils/calculateSalary";

interface SalaryAndBenefitsProps {
  salaryAndBenefits: SalaryAndBenefitsPage;
}

interface SalaryCalculatorFormState {
  examinationYear: number;
  selectedDegree: Degree;
}

const SalaryAndBenefits = ({ salaryAndBenefits }: SalaryAndBenefitsProps) => {
  const currentYear = new Date().getFullYear();

  const [formState, setFormState] = useState<SalaryCalculatorFormState>({
    examinationYear: currentYear - 1,
    selectedDegree: "bachelor",
  });
  const [salary, setSalary] = useState<number | null>(null);

  const updateSelectedDegree = (newDegree: Degree) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedDegree: newDegree,
    }));
  };

  const updateExaminationYear = (newYear: number) => {
    setFormState((prevState) => ({
      ...prevState,
      examinationYear: newYear,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSalary(
      calculateSalary(
        currentYear,
        formState.examinationYear,
        formState.selectedDegree
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <Text type="h1">{salaryAndBenefits.basicTitle}</Text>
      {salaryAndBenefits.showSalaryCalculator && (
        <>
          <SalaryCalculator
            examinationYearValue={formState.examinationYear}
            selectedDegree={formState.selectedDegree}
            onDegreeChanged={updateSelectedDegree}
            onExaminationYearChanged={updateExaminationYear}
            onSubmit={handleSubmit}
          />
          {salary !== null ? (
            <div aria-live="polite">
              <Text> Du vil få en årlig lønn på {salary}</Text>
              <Text>
                Du vil få en årlig pensjon på omtrent {calculatePension(salary)}
              </Text>
            </div>
          ) : null}
        </>
      )}
      <div className={styles.benefits}>
        {salaryAndBenefits.benefits.map((benefit) => (
          <div key={benefit._key} className={styles.benefitWrapper}>
            <Text type="h2">{benefit.basicTitle}</Text>
            <RichText value={benefit.richText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryAndBenefits;
