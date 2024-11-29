import { ClientPerspective } from "@sanity/client";
import { QueryResponseInitial } from "@sanity/react-loader";

import { ChewbaccaEmployee } from "src/types/employees";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { LocaleDocument } from "studio/lib/interfaces/locale";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import {
  COMPANY_LOCATIONS_QUERY,
  LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
} from "studio/lib/queries/admin";
import { LOCALE_QUERY } from "studio/lib/queries/locale";
import { PAGE_BY_SLUG_QUERY } from "studio/lib/queries/pages";
import { EMPLOYEE_PAGE_SLUG_AND_TITLE_QUERY } from "studio/lib/queries/siteSettings";
import {
  SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY,
  SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
  SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY,
} from "studio/lib/queries/slugTranslations";
import {
  COMPENSATIONS_PAGE_BY_SLUG_QUERY,
  CUSTOMER_CASES_PAGE_QUERY,
} from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { legalDocumentID } from "studio/schemas/documents/admin/legalDocuments";
import { compensationsId } from "studio/schemas/documents/compensations";
import { pageBuilderID } from "studio/schemas/documents/pageBuilder";
import { customerCasesPageID } from "studio/schemas/documents/specialPages/customerCasesPage";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASE_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";
import { customerCaseID } from "studioShared/schemas/documents/customerCase";

import { fetchChewbaccaEmployee } from "./employees";
import { isNonNullQueryResponse } from "./queryResponse";
import { domainFromHostname } from "./url";

type PageFromParams<D, T> = {
  queryResponse: D;
  docType: T;
  pathTitles: string[];
  pathTranslations: InternationalizedString;
};

async function fetchDynamicPage({
  language,
  path,
  perspective,
}: PageDataParams): Promise<PageFromParams<
  QueryResponseInitial<PageBuilder>,
  "pageBuilder"
> | null> {
  if (path.length === 0) {
    return null;
  }
  const queryResponse = await loadStudioQuery<PageBuilder | null>(
    PAGE_BY_SLUG_QUERY,
    {
      slug: path[0],
      language,
    },
    { perspective },
  );
  if (!isNonNullQueryResponse(queryResponse)) {
    return null;
  }
  const pathTranslations =
    await loadStudioQuery<InternationalizedString | null>(
      SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug: path[0],
        language,
      },
    );
  return {
    queryResponse,
    docType: pageBuilderID,
    pathTitles: [queryResponse.data.basicTitle],
    pathTranslations: pathTranslations.data ?? [],
  };
}

async function fetchCompensationsPage({
  language,
  path,
  perspective,
}: PageDataParams): Promise<PageFromParams<
  {
    compensationsPage: QueryResponseInitial<CompensationsPage>;
    companyLocations: QueryResponseInitial<CompanyLocation[]>;
    locale: QueryResponseInitial<LocaleDocument>;
  },
  "compensations"
> | null> {
  if (path.length !== 1) {
    return null;
  }
  const compensationsPageResult =
    await loadStudioQuery<CompensationsPage | null>(
      COMPENSATIONS_PAGE_BY_SLUG_QUERY,
      {
        slug: path[0],
        language,
      },
      {
        perspective,
      },
    );
  if (!isNonNullQueryResponse(compensationsPageResult)) {
    return null;
  }
  const companyLocationsResult = await loadStudioQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    {},
    { perspective },
  );
  if (!isNonNullQueryResponse(companyLocationsResult)) {
    return null;
  }
  const localeDocumentResult = await loadStudioQuery<LocaleDocument>(
    LOCALE_QUERY,
    {},
    { perspective },
  );
  if (!isNonNullQueryResponse(localeDocumentResult)) {
    return null;
  }
  const pathTranslations =
    await loadStudioQuery<InternationalizedString | null>(
      SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug: path[0],
        language,
      },
    );
  return {
    queryResponse: {
      compensationsPage: compensationsPageResult,
      companyLocations: companyLocationsResult,
      locale: localeDocumentResult,
    },
    docType: compensationsId,
    pathTitles: [compensationsPageResult.data.basicTitle],
    pathTranslations: pathTranslations.data ?? [],
  };
}

async function fetchCustomerCase({
  language,
  hostname,
  path,
  perspective,
}: PageDataParams): Promise<
  | PageFromParams<QueryResponseInitial<CustomerCasePage>, "customerCasesPage">
  | PageFromParams<
      {
        customerCase: QueryResponseInitial<CustomerCase>;
        customerCasesPagePath: string[];
      },
      "customerCase"
    >
  | null
> {
  if (path.length === 0) {
    return null;
  }

  const domain = hostname === null ? null : domainFromHostname(hostname);

  const customerCasesPageResult =
    await loadStudioQuery<CustomerCasePage | null>(
      CUSTOMER_CASES_PAGE_QUERY,
      {
        slug: path[0],
        language,
      },
      { perspective },
    );
  if (!isNonNullQueryResponse(customerCasesPageResult)) {
    return null;
  }
  const pagePathTranslations =
    await loadStudioQuery<InternationalizedString | null>(
      SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug: path[0],
        language,
      },
    );
  if (path.length === 1) {
    return {
      queryResponse: customerCasesPageResult,
      docType: customerCasesPageID,
      pathTitles: [customerCasesPageResult.data.basicTitle],
      pathTranslations: pagePathTranslations.data ?? [],
    };
  }
  const customerCaseResult = await loadSharedQuery<CustomerCase | null>(
    CUSTOMER_CASE_QUERY,
    {
      domain,
      slug: path[1],
      language,
    },
    {
      perspective,
    },
  );
  if (!isNonNullQueryResponse(customerCaseResult)) {
    return null;
  }
  const casePathTranslations =
    await loadSharedQuery<InternationalizedString | null>(
      SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_BY_TYPE_QUERY,
      {
        slug: path[1],
        language,
        type: customerCaseID,
      },
    );
  return {
    queryResponse: {
      customerCase: customerCaseResult,
      customerCasesPagePath: [language, customerCasesPageResult.data.slug],
    },
    docType: customerCaseID,
    pathTitles: [
      customerCasesPageResult.data.basicTitle,
      customerCaseResult.data.basicTitle,
    ],
    pathTranslations:
      casePathTranslations.data?.reduce<InternationalizedString>(
        (acc, translation) => {
          const pageSlug = pagePathTranslations.data?.find(
            (pageTranslation) => pageTranslation._key === translation._key,
          )?.value;
          return pageSlug !== undefined
            ? [
                ...acc,
                {
                  _key: translation._key,
                  value: `${pageSlug}/${translation.value}`,
                },
              ]
            : acc;
        },
        [],
      ) ?? [],
  };
}

async function fetchEmployeePage({
  language,
  path,
  perspective,
  hostname,
}: PageDataParams): Promise<PageFromParams<
  ChewbaccaEmployee,
  "employee"
> | null> {
  if (path.length !== 2) {
    return null;
  }
  const employeePageSlugAndTitleRes = await loadStudioQuery<{
    slug: string;
    basicTitle: string;
  } | null>(
    EMPLOYEE_PAGE_SLUG_AND_TITLE_QUERY,
    {
      language,
    },
    { perspective },
  );
  if (!isNonNullQueryResponse(employeePageSlugAndTitleRes)) {
    return null;
  }
  if (path[0] !== employeePageSlugAndTitleRes.data.slug) {
    return null;
  }
  const employeeAlias = path[1];
  const employee = await fetchChewbaccaEmployee(employeeAlias, hostname);

  if (!employee.ok) {
    return null;
  }
  const pathTranslations =
    await loadStudioQuery<InternationalizedString | null>(
      SLUG_FIELD_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug: path[0],
        language,
      },
      { perspective },
    );
  return {
    queryResponse: employee.value,
    docType: "employee",
    pathTitles: [
      employeePageSlugAndTitleRes.data.basicTitle,
      employee.value.name ?? employeeAlias,
    ],
    pathTranslations: pathTranslations.data ?? [],
  };
}

async function fetchLegalDocument({
  language,
  path,
  perspective,
}: PageDataParams): Promise<PageFromParams<
  QueryResponseInitial<LegalDocument>,
  "legalDocument"
> | null> {
  if (path.length !== 1) {
    return null;
  }
  const queryResponse = await loadStudioQuery<LegalDocument | null>(
    LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
    {
      slug: path[0],
      language,
    },
    {
      perspective,
    },
  );
  if (!isNonNullQueryResponse(queryResponse)) {
    return null;
  }
  const pathTranslations =
    await loadStudioQuery<InternationalizedString | null>(
      SLUG_TRANSLATIONS_FROM_LANGUAGE_QUERY,
      {
        slug: path[0],
        language,
      },
    );
  return {
    queryResponse,
    docType: legalDocumentID,
    pathTitles: [queryResponse.data.basicTitle],
    pathTranslations: pathTranslations.data ?? [],
  };
}

export interface PageDataParams {
  language: string;
  path: string[];
  perspective: ClientPerspective;
  hostname: string | null;
}

export async function fetchPageDataFromParams(params: PageDataParams) {
  return (
    (await fetchEmployeePage(params)) ??
    (await fetchDynamicPage(params)) ??
    (await fetchCompensationsPage(params)) ??
    (await fetchCustomerCase(params)) ??
    (await fetchLegalDocument(params))
  );
}
