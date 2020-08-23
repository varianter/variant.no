import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import fetch from "node-fetch";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log(process.env.CV_PARTNER_API_SECRET);
  try {
    const request = await fetch("https://variant.cvpartner.com/api/v1/users", {
      headers: [
        ["Authorization", `Bearer ${process.env.CV_PARTNER_API_SECRET || ""}`],
      ],
    });
    context.log(request);
    if (request.ok) {
      const employeesJSON = await request.json();
      // Make images
      const employeeList = employeesJSON.filter(
        (employee) =>
          employee.deactivated ||
          // All employees that have started should be set
          // as countrymanager in cv-parter, when they start.
          employee.roles.some((role) => role === "countrymanager")
      );
      context.res = {
        body: employeeList,
      };
    } else {
      context.res = {
        status: 404,
        body: await request.clone(),
      };
    }
  } catch (e) {
    context.res = {
      status: 500,
      body: e.message,
    };
  }
};

export default httpTrigger;
