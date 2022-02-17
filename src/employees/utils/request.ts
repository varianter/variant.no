import { ApiEmployee } from 'src/employees/types';

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
      employee.deactivated ||
      // All employees that have started should be set
      // as countrymanager in cv-parter, when they start.
      employee.roles.some((role) => role === 'countrymanager'),
  );

  return employeeList.map(({ name, telephone, email, image, office_name }) => ({
    name,
    telephone,
    email,
    image,
    office_name,
  }));
}

export async function requestByEmail(
  email: string,
): Promise<ApiEmployee | undefined> {
  const employeeList = await requestEmployees();

  if (!employeeList) {
    return undefined;
  }

  const employee = employeeList.find((e) => e.email == email);
  return employee;
}
