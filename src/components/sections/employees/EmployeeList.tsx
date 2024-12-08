"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { use, useState, useTransition } from "react";

import EmployeeCard from "src/components/employeeCard/EmployeeCard";
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
  const employeesRes = use(employeesPromise);
  const employees = employeesRes.ok ? employeesRes.value : [];
  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

  const {
    showShowMoreButton,
    isShowMorePending,
    limitedEmployees,
    showMoreHandler,
    showMoreHref,
  } = useShowAll(filteredEmployees);

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
          <Text type="labelRegular" className={styles.employeeFilterLabel}>
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
          <Text type="labelRegular" className={styles.employeeFilterLabel}>
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
        {isShowMorePending && <EmployeeListSkeleton />}

        {showShowMoreButton && (
          <ShowMoreButton
            showMoreHandler={showMoreHandler}
            showMoreHref={showMoreHref}
          />
        )}
      </div>
    </>
  );
}

function ShowMoreButton({
  showMoreHandler,
  showMoreHref,
}: {
  showMoreHandler: () => void;
  showMoreHref: string;
}) {
  const t = useTranslations("employee_card");

  // @TODO Replace with Button component when actually implemented
  return (
    <div className={styles.showMore}>
      <Link
        className={styles.showMore__button}
        onClick={showMoreHandler}
        href={showMoreHref}
        shallow
        scroll={false}
      >
        {t("showMore")}{" "}
        <Image
          src="/_assets/arrow-down.svg"
          alt=""
          role="none"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}

function useShowAll(filteredEmployees: ChewbaccaEmployee[]) {
  const [isPending, startTransition] = useTransition();

  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const limitEmployees = !searchParams.has("showAll");
  const limitedEmployees = limitEmployees
    ? filteredEmployees.slice(0, DEFAULT_LIMIT)
    : filteredEmployees;

  const showMoreHandler = () =>
    startTransition(() => {
      replace(`${currentPath}?showAll`);
    });

  return {
    limitedEmployees,
    showMoreHandler,
    isShowMorePending: isPending,
    showShowMoreButton:
      limitEmployees && !isPending && filteredEmployees.length > DEFAULT_LIMIT,
    showMoreHref: `${currentPath}?showAll`,
  };
}

function sortAlphabetically(filter: (string | null | undefined)[]) {
  return filter.sort((a, b) => a?.localeCompare(b ?? "") ?? 0);
}

function sortCompetenceAlphabetically(competences: Competence[]) {
  return competences.sort((a, b) => a?.localeCompare(b ?? "") ?? 0);
}
