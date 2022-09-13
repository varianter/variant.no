import { ApiEmployee } from 'src/employees/types';
import { getMockEmployeeList } from 'src/employees/utils/getEmployeesList';

type EmployeeJSON = {
  user_id: string;
  _id: string;
  id: string;
  company_id: string;
  company_name: string;
  company_subdomains: string[];
  company_group_ids: any[];
  email: string;
  external_unique_id: null | string;
  upn: null | string;
  deactivated: boolean;
  deactivated_at: boolean | string;
  role: string;
  roles: string[];
  role_allowed_office_ids: string[];
  role_allowed_tag_ids: any[] | null;
  office_id: string;
  office_name: string;
  country_id: string;
  country_code: string;
  language_code: string;
  language_codes: string[];
  international_toggle: string;
  preferred_download_format: string;
  masterdata_languages: string[];
  expand_proposals_toggle: boolean;
  selected_office_ids: any[];
  include_officeless_reference_projects: boolean;
  selected_tag_ids: any[];
  override_language_code: null;
  default_cv_template_id: string;
  image: {
    url: string;
    thumb: {
      url: string;
    };
    fit_thumb: {
      url: string;
    };
    large: {
      url: string;
    };
    small_thumb: {
      url: string;
    };
  };
  name: string;
  telephone: string;
  default_cv_id: string;
};

export async function requestEmployees(): Promise<ApiEmployee[] | undefined> {
  if (!process.env.CV_PARTNER_API_SECRET) {
    if (process.env.NODE_ENV === 'development') {
      return getMockEmployeeList(50);
    }
    throw new Error('Environment variable CV_PARTNER_API_SECRET is missing');
  }
  const request = await fetch('https://variant.cvpartner.com/api/v1/users', {
    headers: [
      [
        'Authorization',
        `Token token="${process.env.CV_PARTNER_API_SECRET || ''}"`,
      ],
    ],
  });

  if (!request.ok) {
    return undefined;
  }
  const employeesJSON = (await request.json()) as EmployeeJSON[];

  const employeeList = employeesJSON.filter(
    (employee) =>
      !employee.deactivated &&
      employee.image.url &&
      // All employees that have started should be set
      // as countrymanager in cv-parter, when they start.
      employee.roles.some((role) => role === 'countrymanager'),
  );

  return employeeList.map(toApiEmployee);
}

export async function requestByEmails(
  emails: string[],
): Promise<ApiEmployee[]> {
  const employeeList = await requestEmployees();

  if (!employeeList) {
    return [];
  }

  const employee = employeeList.filter((e) => emails.includes(e.email));
  return employee;
}

function toApiEmployee(employee: EmployeeJSON): ApiEmployee {
  const { name, telephone, email, image, office_name } = employee;

  if (getFilteredIds().includes(employee.user_id)) {
    return {
      name,
      telephone: null,
      email,
      image,
      office_name,
    };
  }
  return { name, telephone, email, image, office_name };
}

function getFilteredIds(): string[] {
  try {
    return JSON.parse(process.env.FILTER_USERS ?? '[]') ?? [];
  } catch (e) {
    return [];
  }
}
