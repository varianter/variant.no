"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "src/components/buttons/Button";
import Text from "src/components/text/Text";
import formatPhoneNumber from "src/components/utils/formatPhoneNumber";
import { ChewbaccaEmployee, Competence } from "src/types/employees";
import { aliasFromEmail } from "src/utils/employees";

import styles from "./employees.module.css";

const competences: Competence[] = [
  "Utvikling",
  "Administasjon",
  "Design",
  "Project Management",
];

function countCompetences(employees: ChewbaccaEmployee[]) {
  const competenceCounts: Record<Competence, number> = {
    Utvikling: 0,
    Administasjon: 0,
    Design: 0,
    "Project Management": 0,
  };

  employees
    .flatMap((e) => e.competences)
    .forEach((c) => (competenceCounts[c] += 1));

  return competenceCounts;
}

function countLocations(employees: ChewbaccaEmployee[]) {
  const locationCounts: Record<string, number> = {};

  employees
    .flatMap((e) => e.officeName)
    .filter((o) => !!o)
    .forEach((o) =>
      !locationCounts[o!]
        ? (locationCounts[o!] = 1)
        : (locationCounts[o!] += 1),
    );

  return locationCounts;
}

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
  const competenceCounts = countCompetences(employees);
  const locationCounts = countLocations(employees);
  const locations = Object.keys(locationCounts);

  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

  const [employeeFilters, setEmployeeFilters] = useState<EmployeeFilters>({
    competenceFilter: null,
    locationFilter: null,
  });

  function filterEmployees(newFilters: Partial<EmployeeFilters>) {
    const combinedFilters = { ...employeeFilters, ...newFilters };
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
            Fag
          </Text>
          <Button
            size="small"
            type={
              employeeFilters.competenceFilter == null
                ? "secondaryFilled"
                : "secondary"
            }
            onClick={() => filterEmployees({ competenceFilter: null })}
          >
            Alle
          </Button>
          {competences.map((competence) => {
            const active = employeeFilters.competenceFilter == competence;
            return (
              <Button
                size="small"
                key={competence}
                type={active ? "secondaryFilled" : "secondary"}
                onClick={() =>
                  filterEmployees({ competenceFilter: competence })
                }
              >
                {competence} ({competenceCounts[competence]})
              </Button>
            );
          })}
        </div>
        <div className={styles.employeeFilterWrapper}>
          <Text type="labelSemibold" className={styles.employeeFilterLabel}>
            Lokasjon
          </Text>
          <Button
            size="small"
            type={
              employeeFilters.locationFilter == null
                ? "secondaryFilled"
                : "secondary"
            }
            onClick={() => filterEmployees({ locationFilter: null })}
          >
            Alle
          </Button>
          {locations.map((location) => {
            const active = employeeFilters.locationFilter == location;
            return (
              <Button
                size="small"
                key={location}
                type={active ? "secondaryFilled" : "secondary"}
                onClick={() => filterEmployees({ locationFilter: location })}
              >
                {location} ({locationCounts[location]})
              </Button>
            );
          })}
        </div>
      </div>

      <div className={styles.employeeCountWrapper}>
        <div style={{ display: "flex" }}></div>

        <p className={styles.employeeCount}>
          Viser{" "}
          <span className={styles.employeeCountValue}>
            {filteredEmployees.length}
          </span>{" "}
          av{" "}
          <span className={styles.employeeCountValue}>{employees.length}</span>{" "}
          konsulenter
        </p>
      </div>

      {filteredEmployees.map(
        (employee) =>
          employee.imageThumbUrl &&
          employee.name &&
          employee.email && (
            <div key={employee.email} className={styles.employee}>
              <Link
                href={`/${language}/${employeesPageSlug}/${aliasFromEmail(employee.email)}`}
              >
                <div className={styles.employeeImage}>
                  <Image
                    src={employee.imageUrl ?? employee.imageThumbUrl}
                    alt={employee.name}
                    style={{ objectFit: "cover" }}
                    fill={true}
                  />
                </div>
              </Link>
              <div className={styles.employeeInfo}>
                <p className={styles.employeeName}>{employee.name}</p>
                {employee.competences.map((competence) => (
                  <Text
                    type="labelRegular"
                    key={competence}
                    className={styles.employeeRole}
                  >
                    {competence}
                  </Text>
                ))}
                {employee.email && (
                  <p className={styles.employeeEmail}>{employee.email}</p>
                )}
                {employee.telephone && (
                  <p className={styles.employeeTelephone}>
                    {formatPhoneNumber(employee.telephone)}
                  </p>
                )}
              </div>
            </div>
          ),
      )}
    </>
  );
}
