import {
  EmployeeHighlightItem,
  EmployeeHighlightSection,
} from "studio/lib/interfaces/pages";

import { EmployeeCard } from "./EmployeeCard";
import { EmployeeCarousel } from "./EmployeeCarousel";

/**
 * Main component that decides whether to show a single employee or a carousel.
 */
export default function EmployeeHighlight({
  section,
}: {
  section: EmployeeHighlightSection;
}) {
  const employees: EmployeeHighlightItem[] = section.employees?.length
    ? section.employees
    : section.name
      ? [
          {
            basicTitle: section.basicTitle,
            name: section.name,
            description: section.description,
            employeePhoto: section.employeePhoto,
          },
        ]
      : [];

  // Early return if no valid employee data
  if (employees.length === 0) {
    return null;
  }

  // Single employee: render card directly
  if (employees.length === 1) {
    return <EmployeeCard employee={employees[0]} />;
  }

  // Multiple employees: render carousel
  return <EmployeeCarousel employees={employees} />;
}
