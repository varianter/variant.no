import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import fetch from 'node-fetch';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest,
): Promise<void> {

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
          const [data, error] = await fetchHarvestPaged(harvestAccountId);
          if (error) {
            context.log('Error: ', error);
            console.error(error);
            throw new Error(error)
          } 
          return data ? data : [];
        },
      ),
    );

    // Map emails and flatten, we don't care if duplicates occur
    // (i.e same user in different companies) since this will be used
    // for contains filter
    const validEmployeeEmails: Array<string> = harvestUsers.reduce(
      (acc, companies) => [...acc, ...companies.map(({ email }) => email)], []
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


async function fetchHarvestPaged(harvestAccountId: string): Promise<[any[], string]> {
  try {

    const initialRequest = await fetchHarvest(harvestAccountId);
    if (initialRequest.ok) {
      const first_response = await initialRequest.json();
      if ( first_response.total_pages === 1 ) return [first_response.users, null]
      // If more than one page with users, we can do a get all since we know the total amount of pages.
      const totalPagesToQuery = first_response.total_pages - 1;
      const extraPages = await Promise.all([...Array(totalPagesToQuery)].map(async (_, i) => {
        const request = await fetchHarvest(harvestAccountId, i + 2);
        if (request.ok) return await request.json()
        throw new Error(await request.text());
      }))
      
      return [extraPages.reduce((acc, curr) => [...acc, ...curr.users], first_response.users), null]
    }else {
      return [null, await initialRequest.text()]
    }
  }catch(e) {
    return [null, e.message]
  }
}

async function fetchHarvest(harvestAccountId: string, page?: number) {
  const harvestUrl = 'https://api.harvestapp.com/v2';
  // Do weak comparison on page to also catch undefined
  return fetch(`${harvestUrl}/users?is_active=true${ page != null ? `&page=${page}`: ''}`, {
            headers: [
              ['Authorization', `Bearer ${process.env.HARVEST_API_TOKEN}`],
              ['Harvest-Account-ID', harvestAccountId],
              ['User-Agent', 'Variant-no function'],
            ],
          });
}