import { ClientPerspective } from "@sanity/client";
import { QueryResponseInitial } from "@sanity/react-loader";

import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
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

import { isNonNullQueryResponse } from "./queryResponse";

type PageFromParams<D, T> = {
  queryResponse: D;
  docType: T;
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
  return {
    queryResponse,
    docType: pageBuilderID,
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
  return {
    queryResponse: {
      compensationsPage: compensationsPageResult,
      companyLocations: companyLocationsResult,
      locale: localeDocumentResult,
    },
    docType: compensationsId,
  };
}

async function fetchCustomerCase({
  language,
  path,
  perspective,
}: PageDataParams): Promise<
  | PageFromParams<QueryResponseInitial<CustomerCasePage>, "customerCasesPage">
  | PageFromParams<QueryResponseInitial<CustomerCase>, "customerCase">
  | null
> {
  if (path.length === 0) {
    return null;
  }
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
  if (path.length === 1) {
    return {
      queryResponse: customerCasesPageResult,
      docType: customerCasesPageID,
    };
  }
  const customerCaseResult = await loadSharedQuery<CustomerCase | null>(
    CUSTOMER_CASE_QUERY,
    {
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
  return {
    queryResponse: customerCaseResult,
    docType: customerCaseID,
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
  return {
    queryResponse,
    docType: legalDocumentID,
  };
}

export interface PageDataParams {
  language: string;
  path: string[];
  perspective: ClientPerspective;
}

export async function fetchPageDataFromParams(params: PageDataParams) {
  return (
    (await fetchDynamicPage(params)) ??
    (await fetchCompensationsPage(params)) ??
    (await fetchCustomerCase(params)) ??
    (await fetchLegalDocument(params))
  );
}
