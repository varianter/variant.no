"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { use, useState, useTransition } from "react";

import EmployeeCard, {
  EmployeeCardSkeleton,
} from "src/components/employeeCard/EmployeeCard";
import { Tag } from "src/components/tag";
import Text from "src/components/text/Text";
import { ChewbaccaEmployee, Competence } from "src/types/employees";
import { Result } from "studio/utils/result";

import styles from "./employees.module.css";
import { EmployeeListSkeleton } from "./EmployeeSkeleton";

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

const DEFAULT_LIMIT = 4 * 2;

export default function EmployeeList({
  employees: employeesPromise,
  language,
  employeesPageSlug,
}: EmployeesProps) {
  let [isPending, startTransition] = useTransition();

  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const limitEmployees = !searchParams.has("showAll");
  console.log(searchParams, searchParams.has("showAll"));

  const employeesRes = use(employeesPromise);
  const employees = employeesRes.ok ? employeesRes.value : [];
  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

  const limitedEmployees = limitEmployees
    ? filteredEmployees.slice(0, DEFAULT_LIMIT)
    : filteredEmployees;

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

          {sortCompetenceAlphabetically(competences).map((competence) => {
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

          {sortAlphabetically(locations).map((location) => {
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

      <div className={styles.peopleCountWrapper}>
        <p className={styles.employeeCount}>
          {t("show")}{" "}
          <span className={styles.employeeCountValue}>
            {filteredEmployees.length}
          </span>{" "}
          {t("of")} <span>{employees.length}</span> {t("consultants")}
        </p>

        <div className={styles.peopleContainer}>
          {limitedEmployees.map((employee) => (
            <EmployeeCard
              employee={employee}
              employeePageSlug={employeesPageSlug}
              language={language}
              key={employee.name}
            />
          ))}
        </div>
        {isPending && <EmployeeListSkeleton />}
        <Link
          onClick={() =>
            startTransition(() => {
              replace(`${currentPath}?showAll`);
            })
          }
          href={`${currentPath}?showAll`}
          shallow
          scroll={false}
        >
          Show more
        </Link>
      </div>
    </>
  );
}

function sortAlphabetically(filter: (string | null | undefined)[]) {
  return filter.sort((a, b) => a?.localeCompare(b ?? "") ?? 0);
}

function sortCompetenceAlphabetically(competences: Competence[]) {
  return competences.sort((a, b) => a?.localeCompare(b ?? "") ?? 0);
}
