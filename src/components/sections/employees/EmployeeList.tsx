"use client";

import { useTranslations } from "next-intl";
import { use, useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee, Competence } from "src/types/employees";
import { Result } from "studio/utils/result";

import styles from "./employees.module.css";

const competences: Competence[] = [
  "Utvikling",
  "Administasjon",
  "Design",
  "Project Management",
];

export interface EmployeesProps {
  employees: Promise<Result<ChewbaccaEmployee[], string>>;
  language: string;
  employeesPageSlug: string;
}

interface EmployeeFilters {
  competenceFilter: Competence | null;
  locationFilter: string | null;
}

export default function EmployeeList({
  employees: employeesPromise,
  language,
  employeesPageSlug,
}: EmployeesProps) {
  const employeesRes = use(employeesPromise);
  const employees = employeesRes.ok ? employeesRes.value : [];
  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

  const locations = Array.from(new Set(employees.map((e) => e.officeName)));
  const t = useTranslations("employee_card");

  const [employeeFilters, setEmployeeFilters] = useState<EmployeeFilters>({
    competenceFilter: null,
    locationFilter: null,
  });

  function filterEmployees(newFilters: Partial<EmployeeFilters>) {
    const combinedFilters = { ...employeeFilters, ...newFilters };

    if (newFilters.competenceFilter === employeeFilters.competenceFilter) {
      combinedFilters.competenceFilter = null;
    }

    if (newFilters.locationFilter === employeeFilters.locationFilter) {
      combinedFilters.locationFilter = null;
    }

    setEmployeeFilters(combinedFilters);

    const newFilteredEmployees = employees.filter((e) => {
      if (
        combinedFilters.competenceFilter !== null &&
        !e.competences.includes(combinedFilters.competenceFilter)
      ) {
        return false;
      }

      if (
        combinedFilters.locationFilter !== null &&
        e.officeName !== combinedFilters.locationFilter
      ) {
        return false;
      }

      return true;
    });

    setFilteredEmployees(newFilteredEmployees);
  }

  return (
    <>
      <div className={styles.employeeFiltersWrapper}>
        <div className={styles.employeeFilterWrapper}>
          <Text type="labelSemibold" className={styles.employeeFilterLabel}>
            {t("field")}
          </Text>
          <Tag
            active={!employeeFilters.competenceFilter}
            type="button"
            onClick={() => filterEmployees({ competenceFilter: null })}
            text={t("all")}
          />

          {competences.map((competence) => {
            const active = employeeFilters.competenceFilter == competence;
            return (
              <Tag
                key={competence}
                active={active}
                type="button"
                onClick={() =>
                  filterEmployees({ competenceFilter: competence })
                }
                text={t(competence)}
              />
            );
          })}
        </div>
        <div className={styles.employeeFilterWrapper}>
          <Text type="labelSemibold" className={styles.employeeFilterLabel}>
            {t("location")}
          </Text>
          <Tag
            active={!employeeFilters.locationFilter}
            type="button"
            onClick={() => filterEmployees({ locationFilter: null })}
            text={t("all")}
          />

          {locations.map((location) => {
            if (!location) return null;
            const active = employeeFilters.locationFilter == location;
            return (
              <Tag
                key={location}
                active={active}
                type="button"
                onClick={() => filterEmployees({ locationFilter: location })}
                text={location}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.employeeCountWrapper}>
        <div style={{ display: "flex" }}></div>

        <p className={styles.employeeCount}>
          {t("show")}{" "}
          <span className={styles.employeeCountValue}>
            {filteredEmployees.length}
          </span>{" "}
          {t("of")}{" "}
          <span className={styles.employeeCountValue}>{employees.length}</span>{" "}
          {t("consultants")}
        </p>
      </div>

      <div className={styles.peopleContainer}>
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            employee={employee}
            employeePageSlug={employeesPageSlug}
            language={language}
            key={employee.name}
          />
        ))}
      </div>
    </>
  );
}
