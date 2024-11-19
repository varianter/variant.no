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

export interface EmployeesProps {
  employees: ChewbaccaEmployee[];
  language: string;
  employeesPageSlug: string;
}

export default function EmployeeList({
  employees,
  language,
  employeesPageSlug,
}: EmployeesProps) {
  const [filteredEmployees, setFilteredEmployees] =
    useState<ChewbaccaEmployee[]>(employees);

  const competences: Competence[] = [
    "Utvikling",
    "Administasjon",
    "Design",
    "Project Management",
  ];

  const competenceCounts: Record<Competence, number> = {
    Utvikling: 0,
    Administasjon: 0,
    Design: 0,
    "Project Management": 0,
  };

  employees
    .flatMap((e) => e.competences)
    .forEach((c) => (competenceCounts[c] += 1));

  const [competenceFilters, setCompetenceFilters] = useState(
    new Map<Competence, boolean>(competences.map((c) => [c, false])),
  );

  function toggleFilter(toggleFilterKey: Competence) {
    const newFilters = competenceFilters;
    newFilters.set(toggleFilterKey, !newFilters.get(toggleFilterKey));
    setCompetenceFilters(newFilters);

    console.log(newFilters.values());

    if (newFilters.values().every((x) => !x)) {
      setFilteredEmployees(employees);
      return;
    }

    const newFilteredEmployees = employees.filter((x) =>
      x.competences.some((c) => newFilters.get(c)),
    );

    setFilteredEmployees(newFilteredEmployees);
  }

  return (
    <>
      <div className={styles.employeeCountWrapper}>
        <p className={styles.employeeCount}>
          Viser{" "}
          <span className={styles.employeeCountValue}>
            {filteredEmployees.length}
          </span>{" "}
          av{" "}
          <span className={styles.employeeCountValue}>{employees.length}</span>{" "}
          konsulenter
        </p>
        <div style={{ display: "flex" }}>
          {competences.map((competence) => {
            const active = competenceFilters.get(competence);
            return (
              <Button
                key={competence}
                type={active ? "secondaryFilled" : "secondary"}
                onClick={() => toggleFilter(competence)}
              >
                {competence} ({competenceCounts[competence]})
              </Button>
              //   <Checkbox
              //     key={competence}
              //     name={`show${competence}`}
              //     value={competenceFilters.get(competence)!}
              //     label={competence}
              //     onChange={() => {
              //       toggleFilter(competence);
              //     }}
              //   />
            );
          })}
        </div>
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
