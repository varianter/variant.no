import { GetStaticProps } from "next";
import { handleImages } from "src/utils/imageHandler";
import { Employee, massageEmployee } from "src/employees";

export { default } from "src/index";

export const getStaticProps: GetStaticProps<{
  randomEmployee: Employee;
}> = async () => {
  // Set so we can run local as fallback.
  const baseUrl = process.env.AZURE_PROXY_URL || "http://localhost:7071/api/";
  const authKey = process.env.AZURE_PROXY_KEY
    ? `?code=${process.env.AZURE_PROXY_KEY}`
    : "";
  const request = await fetch(`${baseUrl}/getEmployees${authKey}`);
  if (request.ok) {
    const employeesJSON = await request.json();
    // Make images
    const employee =
      employeesJSON[Math.floor(Math.random() * employeesJSON.length)];
    const imageSlug = await handleImages(employee);
    const randomEmployee = { ...massageEmployee(employee), imageSlug };
    return { props: { randomEmployee }, revalidate: 24 * 60 * 60 };
  }
  // Trigger fallback on previous version
  throw new Error();
};
