import { GetStaticProps } from "next";
import { Employee, massageEmployee } from "src/employees";
import { handleImages } from "src/utils/imageHandler";
import { EmployeeJSON } from "src/utils/typings/Employee";

export { default } from "src/employees";

export const getStaticProps: GetStaticProps<{
  employeeList: Employee[];
}> = async () => {
  const request = await fetch(
    `${process.env.AZURE_PROXY_URL}/getEmployees?code=${process.env.AZURE_PROXY_KEY}`
  );
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employeeList = await Promise.all<Employee>(
      employeesJSON.map(async (employee: EmployeeJSON) => {
        const imageSlug = await handleImages(employee);
        return { ...massageEmployee(employee), imageSlug };
      })
    );
    return { props: { employeeList }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
