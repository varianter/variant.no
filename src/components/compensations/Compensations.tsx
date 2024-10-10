"use client";
import { useMemo, useState } from "react";

import {
  IOption,
  RadioButtonGroup,
} from "src/components/forms/radioButtonGroup/RadioButtonGroup";
import Text from "src/components/text/Text";
import { formatAsCurrency } from "src/utils/i18n";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { LocaleDocument } from "studio/lib/interfaces/locale";

import styles from "./compensations.module.css";
import BenefitsByLocation from "./components/benefitsByLocation/BenefitsByLocation";
import SalaryCalculator, {
  Degree,
} from "./components/salaryCalculator/SalaryCalculator";
import YearlyBonuses from "./components/yearlyBonuses/YearlyBonuses";
import {
  calculatePension,
  calculateSalary,
  maxSalariesExaminationYear,
  minSalariesExaminationYear,
  salariesFromLocation,
} from "./utils/salary";

interface CompensationsProps {
  compensations: CompensationsPage;
  locations: CompanyLocation[];
  locale: LocaleDocument;
}

interface SalaryCalculatorFormState {
  examinationYear: number;
  selectedDegree: Degree;
}

const Compensations = ({
  compensations,
  locations,
  locale,
}: CompensationsProps) => {
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
        label="Velg lokasjon"
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
              <Text>
                {`Du vil få en årlig lønn på ${formatAsCurrency(salary, locale.locale, locale.currency)}`}
              </Text>
              {compensations.pensionPercent && (
                <Text>
                  Du vil få en årlig pensjon på omtrent{" "}
                  {formatAsCurrency(
                    calculatePension(salary, compensations.pensionPercent),
                    locale.locale,
                    locale.currency,
                  )}
                </Text>
              )}
            </div>
          ) : null}
        </>
      )}
      {yearlyBonusesForLocation && (
        <YearlyBonuses bonuses={yearlyBonusesForLocation} locale={locale} />
      )}
      <BenefitsByLocation benefits={benefitsFilteredByLocation} />
    </div>
  );
};

export default Compensations;
