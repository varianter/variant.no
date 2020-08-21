import { GetStaticProps } from "next";
import { EmployeeJSON } from "src/utils/typings/Employee";
import { handleImages } from "src/utils/imageHandler";
import { Employee } from "src/employees";

export { default } from "src/index";

export const getStaticProps: GetStaticProps<{
  randomEmployee: Employee;
}> = async () => {
  const request = await fetch("https://variant.cvpartner.com/api/v1/users", {
    headers: [
      ["Authorization", `Bearer ${process.env.CV_PARTNER_API_TOKEN || ""}`],
    ],
  });
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images

    const filtered = employeesJSON.filter(
      (employee: EmployeeJSON) =>
        employee.deactivated ||
        // All employees that have started should be set
        // as countrymanager in cv-parter, when they start.
        employee.roles.some((role) => role === "countrymanager")
    );
    const employee = filtered[Math.floor(Math.random() * filtered.length)];
    const imageSlug = await handleImages(employee);
    const randomEmployee = {
      fullName: employee.name,
      name: employee.name.split(" ")[0],
      phone: employee.telephone.startsWith("+47")
        ? employee.telephone.slice(2)
        : employee.telephone,
      imageSlug,
    };
    return { props: { randomEmployee }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
