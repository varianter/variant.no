"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";
import { use, useState } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee, Competence } from "src/types/employees";
import { Result } from "studio/utils/result";
import { capitalizeFirstLetter } from "studio/utils/stringUtils";

import styles from "./employees.module.css";

const competences: Competence[] = [
  "Utvikling",
  "Ledelse",
  "Design",
  "Prosjekt- og produktledelse",
  "Strategi",
];

export interface EmployeesProps {
  employees: Promise<Result<ChewbaccaEmployee[], string>>;
  language: string;
  employeesPageSlug: string;
}

// 4 columns * 2 rows
const DEFAULT_LIMIT = 4 * 2;

export default function EmployeeList({
  employees: employeesPromise,
  language,
  employeesPageSlug,
}: EmployeesProps) {
  const t = useTranslations("employee_card");
  const employeesRes = use(employeesPromise);

  const employees = employeesRes.ok ? employeesRes.value : [];
  const locations = Array.from(new Set(employees.map((e) => e.officeName)));

  const [showAll, setShowAll] = useState(false);

  const [competenceFilter, setCompetenceFilter] = useQueryState("competence", {
    parse: (value) => capitalizeFirstLetter(value) as Competence,
    serialize: (value) => value.toLowerCase(),
  });
  const [locationFilter, setLocationFilter] = useQueryState("location", {
    parse: (value) => capitalizeFirstLetter(value),
    serialize: (value) => value.toLowerCase(),
  });

  const filteredEmployees = getFilteredEmployees(
    employees,
    competenceFilter,
    locationFilter,
  );

  const employeeCompetences = Array.from(
    new Set(employees.flatMap((e) => e.competences)),
  );

  return (
    <>
      <div className={styles.employeeFiltersWrapper}>
        <div className={styles.employeeFilterWrapper}>
          <div className={styles.employeeFilterLabel}>
            <Text type="label">{t("field")}</Text>
          </div>
          <Tag
            active={!competenceFilter}
            type="button"
            onClick={() => {
              setCompetenceFilter(null);
            }}
            text={t("all")}
          />
          {sortCompetenceAlphabetically(competences)
            .filter((competence) => employeeCompetences.includes(competence))
            .map((competence) => {
              const active = competenceFilter == competence;
              return (
                <Tag
                  key={competence}
                  active={active}
                  type="button"
                  onClick={() => {
                    setCompetenceFilter(competence);
                  }}
                  text={t(competence)}
                />
              );
            })}
        </div>
        <div className={styles.employeeFilterWrapper}>
          <div className={styles.employeeFilterLabel}>
            <Text type="label">{t("location")}</Text>
          </div>
          {/* TODO: legg til aria og fieldset på tags for UU */}
          <Tag
            active={!locationFilter}
            type="button"
            onClick={() => {
              setLocationFilter(null);
            }}
            text={t("all")}
          />

          {sortAlphabetically(locations).map((location) => {
            if (!location) return null;
            const active = locationFilter == location;
            return (
              <Tag
                key={location}
                active={active}
                type="button"
                onClick={() => {
                  setLocationFilter(location);
                }}
                text={location}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.peopleCountWrapper}>
        <p className={styles.employeeCount}>
          {t("show")}{" "}
          <span className={styles.employeeCountValue}>
            {filteredEmployees.length}
          </span>{" "}
          {t("of")} <span>{employees.length}</span> {t("consultants")}
        </p>

        <div className={styles.peopleContainer}>
          {filteredEmployees
            .slice(0, showAll ? filteredEmployees.length : DEFAULT_LIMIT)
            .map((employee) => (
              <EmployeeCard
                employee={employee}
                employeePageSlug={employeesPageSlug}
                language={language}
                key={employee.name}
              />
            ))}
        </div>

        {!showAll && filteredEmployees.length > DEFAULT_LIMIT && (
          <div className={styles.showMore}>
            <button
              className={styles.showMore__button}
              onClick={() => setShowAll(true)}
            >
              {t("showMore")}
              <Image
                src="/_assets/arrow-down.svg"
                alt=""
                role="none"
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function getFilteredEmployees(
  employees: ChewbaccaEmployee[],
  competenceFilter: string | null,
  locationFilter: string | null,
) {
  return employees.filter((e) => {
    if (
      competenceFilter &&
      !e.competences.includes(competenceFilter as Competence)
    ) {
      return false;
    }

    if (locationFilter && e.officeName !== locationFilter) {
      return false;
    }

    return true;
  });
}

function sortAlphabetically(filter: (string | null | undefined)[]) {
  return filter.toSorted((a, b) => a?.localeCompare(b ?? "") ?? 0);
}

function sortCompetenceAlphabetically(competences: Competence[]) {
  return competences.toSorted((a, b) => a?.localeCompare(b ?? "") ?? 0);
}
