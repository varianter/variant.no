"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Button from "src/components/buttons/Button";
import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee, Competence } from "src/types/employees";

import styles from "./employees.module.css";

const competences: Competence[] = [
  "Utvikling",
  "Administasjon",
  "Design",
  "Project Management",
];

export interface EmployeesProps {
  employees: ChewbaccaEmployee[];
  language: string;
  employeesPageSlug: string;
}

interface EmployeeFilters {
  competenceFilter: Competence | null;
  locationFilter: string | null;
}

export default function EmployeeList({
  employees,
  language,
  employeesPageSlug,
}: EmployeesProps) {
  const locations = Array.from(new Set(employees.map((e) => e.officeName)));
  const t = useTranslations("employee_card");

  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

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
          <Button
            size="small"
            background={employeeFilters.competenceFilter ? "light" : "dark"}
            type={
              employeeFilters.competenceFilter == null ? "primary" : "secondary"
            }
            onClick={() => filterEmployees({ competenceFilter: null })}
          >
            <Text type="labelSmall"> {t("all")}</Text>
          </Button>
          {competences.map((competence) => {
            const active = employeeFilters.competenceFilter == competence;
            return (
              <Button
                size="small"
                key={competence}
                background={active ? "dark" : "light"}
                type={"secondary"}
                onClick={() =>
                  filterEmployees({ competenceFilter: competence })
                }
              >
                <Text type="labelSmall"> {t(competence)}</Text>
              </Button>
            );
          })}
        </div>
        <div className={styles.employeeFilterWrapper}>
          <Text type="labelSemibold" className={styles.employeeFilterLabel}>
            {t("location")}
          </Text>
          <Button
            size="small"
            background={employeeFilters.locationFilter ? "light" : "dark"}
            type={
              employeeFilters.locationFilter == null ? "primary" : "secondary"
            }
            onClick={() => filterEmployees({ locationFilter: null })}
          >
            <Text type="labelSmall"> {t("all")}</Text>
          </Button>

          {locations.map((location) => {
            const active = employeeFilters.locationFilter == location;
            return (
              <Button
                size="small"
                key={location}
                background={active ? "dark" : "light"}
                type={"secondary"}
                onClick={() => filterEmployees({ locationFilter: location })}
              >
                <Text type="labelSmall"> {location} </Text>
              </Button>
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
