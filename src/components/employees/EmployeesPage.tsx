import Image from "next/image";

import { isChewbaccaEmployeesResponse } from "src/types/employees";

const BASE_URL = "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net";

export default async function EmployeesPage() {
  const employeesRes = await fetch(new URL("employees", BASE_URL));
  const employeesData = await employeesRes.json();
  if (!isChewbaccaEmployeesResponse(employeesData)) {
    throw new TypeError(
      `Expected ChewbaccaEmployeesResponse, was ${typeof employeesData}`,
    );
  }
  const employees = employeesData.employees;

  return (
    <pre
      style={{
        marginTop: "5rem",
        textWrap: "wrap",
        padding: "10rem",
        gap: "10rem",
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(20rem, 1fr) )",
      }}
    >
      {employees.map(
        (employee) =>
          employee.imageThumbUrl &&
          employee.name &&
          employee.email && (
            <div key={employee.email}>
              <Image
                src={employee.imageThumbUrl}
                alt={employee.name}
                width={300}
                height={300}
              />
              {employee.officeName && <p>{employee.officeName}</p>}
              <h1>{employee.name}</h1>
              {employee.email && <p>{employee.email}</p>}
              {employee.telephone && <p>{employee.telephone}</p>}
            </div>
          ),
      )}
    </pre>
  );
}
