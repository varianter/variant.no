import { ChewbaccaEmployee } from "src/types/employees";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { ContactBoxSection } from "studio/lib/interfaces/pages";
import { EmployeeAndMetadata } from "./types";
import { loadStudioQuery } from "studio/lib/store";
import { EMPLOYEE_PAGE_SLUG_QUERY } from "studio/lib/queries/siteSettings";

export async function getEmployeesPageSlug(
  language: string,
): Promise<string | undefined> {
  const employeesPageRes = await loadStudioQuery<{ slug: string }>(
    EMPLOYEE_PAGE_SLUG_QUERY,
    {
      language,
    },
    {
      cache: "force-cache",
      next: {
        // Cache for 1 day.. Not likely to change (or is it???)
        revalidate: 60 * 60 * 24,
      },
    },
  );

  return employeesPageRes.data?.slug;
}

export async function fetchEmployeesWithTags(
  contactPoints: ContactBoxSection["contactPoints"],
) {
  const contacts = fetchEmployeesByEmails(
    contactPoints.map((contactPoint) => contactPoint.email),
  ).then((result) =>
    result.ok
      ? result.value.map((e) => employeeAndMetadata(e, contactPoints))
      : [],
  );
  return contacts;
}

function employeeAndMetadata(
  employee: ChewbaccaEmployee,
  contactPoints: ContactBoxSection["contactPoints"],
): EmployeeAndMetadata {
  const metadata = contactPoints.find(
    (contactPoint) => contactPoint.email === employee.email,
  );
  return {
    employee,
    tag: metadata?.tag ?? "",
    tagSlug: slugify(metadata?.tag ?? ""),
    overrideTitle: metadata?.overrideTitle ?? "",
  };
}
function slugify(tag: string) {
  return tag.toLowerCase().replace(/ /g, "-");
}
