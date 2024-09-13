"use client";
import styles from "./compensations.module.css";
import Text from "src/components/text/Text";
import { CompensationsPage } from "studio/lib/payloads/compensations";
import SalaryCalculator, {
  Degree,
} from "./components/salaryCalculator/SalaryCalculator";
import { useMemo, useState } from "react";
import {
  calculatePension,
  calculateSalary,
  maxSalariesExaminationYear,
  minSalariesExaminationYear,
  salariesFromLocation,
} from "./utils/salary";
import { CompanyLocation } from "studio/lib/payloads/companyDetails";
import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import YearlyBonuses from "./components/yearlyBonuses/YearlyBonuses";
import BenefitsByLocation from "./components/benefitsByLocation/BenefitsByLocation";

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

  const currentYearSalariesResult = useMemo(
    () =>
      salariesFromLocation(
        currentYear,
        selectedLocation,
        compensations.salariesByLocation,
      ),
    [currentYear, selectedLocation, compensations.salariesByLocation],
  );

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
    if (!currentYearSalariesResult.ok) return;
    const salary = calculateSalary(
      formState.examinationYear,
      formState.selectedDegree,
      currentYearSalariesResult.value,
    );
    if (salary === undefined) return;
    setSalary(salary);
  };

  const locationOptions: IOption[] = locations.map((companyLocation) => ({
    id: companyLocation._id,
    label: companyLocation.companyLocationName,
  }));

  const benefitsFilteredByLocation =
    compensations.benefitsByLocation.find(
      (benefit) => benefit.location._ref === selectedLocation,
    )?.benefits || [];

  const yearlyBonusesForLocation = compensations.bonusesByLocation.find(
    (b) => b.location._ref === selectedLocation,
  )?.yearlyBonuses;

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
      {compensations.showSalaryCalculator && currentYearSalariesResult.ok && (
        <>
          <SalaryCalculator
            examinationYearValue={formState.examinationYear}
            minExaminationYear={minSalariesExaminationYear(
              currentYearSalariesResult.value,
            )}
            maxExaminationYear={
              maxSalariesExaminationYear(currentYearSalariesResult.value) - 1
            }
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
      {yearlyBonusesForLocation && (
        <YearlyBonuses bonuses={yearlyBonusesForLocation} />
      )}
      <BenefitsByLocation benefits={benefitsFilteredByLocation} />
    </div>
  );
};

export default Compensations;
