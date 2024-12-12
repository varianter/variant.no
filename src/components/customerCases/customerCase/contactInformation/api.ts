import { EmployeeAndMetadata } from "src/components/sections/contact-box/types";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/admin";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

export async function getEmployeePageSlug(language: string) {
  const employeePageSlug =
    (
      await loadStudioQuery<{ slug: string } | null>(EMPLOYEE_PAGE_SLUG_QUERY, {
        language,
      })
    ).data?.slug ?? "";

  return employeePageSlug;
}

export async function fetchLocationsWithContact(): Promise<
  EmployeeAndMetadata[]
> {
  const companyLocations = (
    await loadStudioQuery<CompanyLocation[]>(COMPANY_LOCATIONS_QUERY, {})
  ).data;
  const contactByLocation = await fetchContactByLocationMap(companyLocations);

  return contactByLocation;
}

async function fetchContactByLocationMap(
  companyLocations: CompanyLocation[],
): Promise<EmployeeAndMetadata[]> {
  const uniqueEmails = Array.from(
    new Set(
      companyLocations
        .map((location) => location.contactPerson)
        .filter((contactPerson) => contactPerson !== undefined),
    ),
  );

  const contactRes = await fetchEmployeesByEmails(uniqueEmails);

  if (!contactRes.ok) {
    return [];
  }

  const contactByLocation: EmployeeAndMetadata[] = [];

  for (const location of companyLocations) {
    const employee = contactRes.value.find(
      (employee) => employee.email === location.contactPerson,
    );

    if (!employee || !location?.companyLocationName) {
      continue;
    }

    contactByLocation.push({
      employee,
      tag: location.companyLocationName,
      tagSlug: location._id,
    });
  }
  return contactByLocation;
}
