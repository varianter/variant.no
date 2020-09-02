const externalGetEmployeesURL =
  'https://variant-homepage-proxy.azurewebsites.net/api/getEmployees';

export const getEmployeesUrl = process.env.AZURE_URL_OVERRIDE
  ? `${process.env.AZURE_URL_OVERRIDE}/getEmployees`
  : externalGetEmployeesURL;
