import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import fetch from 'node-fetch';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {
  const harvestUrl = 'https://api.harvestapp.com/v2';
  const cvPartnerUrl = 'https://variant.cvpartner.com/api/v1';

  if (process.env.NODE_ENV !== 'production') {
    if (!process.env.CV_PARTNER_API_SECRET) {
      context.res = {
        status: 500,
        body: `Environment variable CV_PARTNER_API_SECRET is missing.
Go to cv-partner and get an API key, add under "Values" in local.settings.json`,
      };
      return;
    }
    if (!process.env.HARVEST_API_TOKEN) {
      context.res = {
        status: 500,
        body: `Environment variable HARVEST_API_TOKEN is missing.
Go to https://id.getharvest.com/developers and get a PAT, add under "Values" in local.settings.json`,
      };
      return;
    }
    if (!process.env.HARVEST_API_ACCOUNT_IDS) {
      context.res = {
        status: 500,
        body: `Environment variable HARVEST_API_ACCOUNT_IDS is missing.
Go to https://id.getharvest.com/developers and find account ID you want to include, add under "Values" in local.settings.json`,
      };
      return;
    }
  }
  try {
    // Fetch all users for each account
    const harvestUsers: any[] = await Promise.all(
      process.env.HARVEST_API_ACCOUNT_IDS.split(';').map(
        async (harvestAccountId) => {
          const request = await fetch(`${harvestUrl}/users?is_active=true`, {
            headers: [
              ['Authorization', `Bearer ${process.env.HARVEST_API_TOKEN}`],
              ['Harvest-Account-ID', harvestAccountId],
              ['User-Agent', 'Variant-no function'],
            ],
          });
          if (request.ok) return await request.json();
        },
      ),
    );

    // Map emails and flatten, we don't care if duplicates occur
    // (i.e same user in different companies) since this will be used
    // for contains filter
    const validEmployeeEmails: Array<string> = harvestUsers.reduce(
      (acc, companies) => [...acc, ...companies.users.map(({ email }) => email)], []
    );

    if (validEmployeeEmails.length === 0) {
      context.res = {
        status: 404,
        body: [],
      };
    }

    const request = await fetch(`${cvPartnerUrl}/users`, {
      headers: [
        [
          'Authorization',
          `Token token="${process.env.CV_PARTNER_API_SECRET || ''}"`,
        ],
      ],
    });
    if (request.ok) {
      const employeesJSON = await request.json();
      // Make images
      const employeeList = employeesJSON.filter(
        (employee) =>
          employee.deactivated ||
          // Filter on valid employees fetched from harvest
          validEmployeeEmails.some(
            (validEmployeeEmail) => validEmployeeEmail === employee.email,
          ),
      );
      context.res = {
        body: employeeList.map(
          ({ name, telephone, image, email, office_name }) => ({
            name,
            telephone,
            email,
            image,
            office_name,
          }),
        ),
      };
    } else {
      context.res = {
        status: 404,
        body: await request.json(),
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
