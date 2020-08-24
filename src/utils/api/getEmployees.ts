const externalGetEmployeesURL =
  'https://variant-homepage-proxy.azurewebsites.net/api/getEmployees?code=rM%2FOUPE7QtnGa6el%2FAro%2FT2u7Zc029LU2CaOtlbn6lz4l3UoceauVw%3D%3D';

export const getEmployeesUrl = process.env.AZURE_URL_OVERRIDE
  ? `${process.env.AZURE_URL_OVERRIDE}/getEmployees`
  : externalGetEmployeesURL;
