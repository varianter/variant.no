"use client";
import styles from "./compensations.module.css";
import Text from "src/components/text/Text";
import { CompensationsPage } from "studio/lib/payloads/compensations";
import SalaryCalculator, {
  Degree,
} from "./components/salaryCalculator/SalaryCalculator";
import { useState } from "react";
import { calculatePension, calculateSalary } from "./utils/calculateSalary";
import { CompanyLocation } from "studio/lib/payloads/companyDetails";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
}

interface SalaryCalculatorFormState {
  examinationYear: number;
  selectedDegree: Degree;
}

const Compensations = ({ compensations, locations }: CompensationsProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    locations[0]._id,
  );
  const currentYear = new Date().getFullYear();
  const [salary, setSalary] = useState<number | null>(null);
  const [formState, setFormState] = useState<SalaryCalculatorFormState>({
    examinationYear: currentYear - 1,
    selectedDegree: "bachelor",
  });

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
        formState.selectedDegree,
      ),
    );
  };

  const locationOptions: IOption[] = locations.map((companyLocation) => ({
    id: companyLocation._id,
    label: companyLocation.companyLocationName,
  }));

  return (
    <div className={styles.wrapper}>
      <Text type="h1">{compensations.basicTitle}</Text>
      <RadioButtonGroup
        id="location-group"
        label="Choose your location"
        options={locationOptions}
        selectedId={selectedLocation}
        onValueChange={(option) => setSelectedLocation(option.id)}
      />
      {compensations.showSalaryCalculator && (
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
              {compensations.pensionPercent && (
                <Text>
                  Du vil få en årlig pensjon på omtrent{" "}
                  {calculatePension(salary, compensations.pensionPercent)}
                </Text>
              )}
            </div>
          ) : null}
        </>
      )}
      <div className={styles.benefits}>
        {compensations.benefitsByLocation.map((benefit) => (
          <div key={benefit._key} className={styles.benefitWrapper}>
            {/* TODO: display benefits based on locations */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compensations;
