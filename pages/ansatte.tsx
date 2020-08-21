import { GetStaticProps } from "next";
import { Employee } from "src/employees";
import { handleImages } from "src/utils/imageHandler";
import { EmployeeJSON } from "src/utils/typings/Employee";

export { default } from "src/employees";

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://variant.cvpartner.com/api/v1/users", {
    headers: [
      ["Authorization", `Bearer ${process.env.CV_PARTNER_API_TOKEN || ""}`],
    ],
  });
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employeeList = await Promise.all<Employee>(
      employeesJSON
        .filter(
          (employee: EmployeeJSON) =>
            employee.deactivated ||
            // All employees that have started should be set
            // as countrymanager in cv-parter, when they start.
            employee.roles.some((role) => role === "countrymanager")
        )
        .map(async (employee: any) => {
          const imageSlug = await handleImages(employee);
          return {
            fullName: employee.name,
            name: employee.name.split(" ")[0],
            phone: employee.telephone.startsWith("+47")
              ? employee.telephone.slice(2)
              : employee.telephone,
            imageSlug,
          };
        })
    );
    return { props: { employeeList }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
