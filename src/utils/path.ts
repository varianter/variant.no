import { ClientPerspective, QueryParams } from "@sanity/client";
import { QueryResponseInitial } from "@sanity/react-loader";

import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { PageBuilder } from "studio/lib/interfaces/pages";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import {
  COMPANY_LOCATIONS_QUERY,
  LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
} from "studio/lib/queries/admin";
import { PAGE_BY_SLUG_QUERY } from "studio/lib/queries/pages";
import {
  COMPENSATIONS_PAGE_QUERY,
  CUSTOMER_CASES_PAGE_QUERY,
} from "studio/lib/queries/specialPages";
import { loadStudioQuery } from "studio/lib/store";
import { legalDocumentID } from "studio/schemas/documents/admin/legalDocuments";
import { compensationsId } from "studio/schemas/documents/compensations";
import { customerCasesPageID } from "studio/schemas/documents/specialPages/customerCasesPage";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASE_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";
import { customerCaseID } from "studioShared/schemas/documents/customerCase";

interface PageData<D, T> {
  queryResponse: D;
  docType: T;
}

type PageBuilderData = PageData<
  QueryResponseInitial<PageBuilder>,
  "pageBuilder"
>;

type CompensationsPageData = PageData<
  {
    compensationsPage: QueryResponseInitial<CompensationsPage>;
    companyLocations: QueryResponseInitial<CompanyLocation[]>;
  },
  "compensations"
>;

type CustomerCasesPageData = PageData<
  QueryResponseInitial<CustomerCasePage>,
  "customerCasesPage"
>;

type CustomerCaseData = PageData<
  QueryResponseInitial<CustomerCase>,
  "customerCase"
>;

type LegalDocumentData = PageData<
  QueryResponseInitial<LegalDocument>,
  "legalDocument"
>;

type PageFromParams<T> = {
  query: string;
  queryParams: QueryParams;
} & T;

type TryAsResolver<T> = (
  language: string,
  path: string[],
  perspective: ClientPerspective,
) => Promise<PageFromParams<T> | null> | (PageFromParams<T> | null);

const tryAsPage: TryAsResolver<PageBuilderData> = async (
  language,
  path,
  perspective,
) => {
  if (path.length === 0) {
    return null;
  }
  const queryParams = {
    slug: path[0],
    language,
  };
  const pageResult = await loadStudioQuery<PageBuilder | null>(
    PAGE_BY_SLUG_QUERY,
    queryParams,
    { perspective },
  );
  if (pageResult.data === null) {
    return null;
  }
  return {
    query: PAGE_BY_SLUG_QUERY,
    queryParams,
    queryResponse: {
      ...pageResult,
      data: pageResult.data,
    },
    docType: "pageBuilder",
  };
};

const tryAsCompensationsPage: TryAsResolver<CompensationsPageData> = async (
  language,
  path,
  perspective,
) => {
  if (path.length !== 1) {
    return null;
  }
  const queryParams = {
    slug: path[0],
    language,
  };
  const compensationsPageResult =
    await loadStudioQuery<CompensationsPage | null>(
      COMPENSATIONS_PAGE_QUERY,
      queryParams,
      {
        perspective,
      },
    );
  if (compensationsPageResult.data === null) {
    return null;
  }
  const companyLocationsResult = await loadStudioQuery<CompanyLocation[]>(
    COMPANY_LOCATIONS_QUERY,
    {},
    { perspective },
  );
  if (companyLocationsResult.data === null) {
    return null;
  }
  return {
    query: COMPENSATIONS_PAGE_QUERY,
    queryParams,
    queryResponse: {
      compensationsPage: {
        ...compensationsPageResult,
        data: compensationsPageResult.data,
      },
      companyLocations: {
        ...companyLocationsResult,
        data: companyLocationsResult.data,
      },
    },
    docType: compensationsId,
  };
};

const tryAsCustomerCase: TryAsResolver<
  CustomerCaseData | CustomerCasesPageData
> = async (language, path, perspective) => {
  if (path.length === 0) {
    return null;
  }
  const customerCasesPageParams = {
    slug: path[0],
  };
  const customerCasesPageResult =
    await loadStudioQuery<CustomerCasePage | null>(
      CUSTOMER_CASES_PAGE_QUERY,
      customerCasesPageParams,
      { perspective },
    );
  if (customerCasesPageResult.data === null) {
    return null;
  }
  if (path.length === 1) {
    return {
      query: CUSTOMER_CASES_PAGE_QUERY,
      queryParams: customerCasesPageParams,
      queryResponse: {
        ...customerCasesPageResult,
        data: customerCasesPageResult.data,
      },
      docType: customerCasesPageID,
    };
  }
  const customerCaseParams = {
    slug: path[1],
    language,
  };
  const customerCaseResult = await loadSharedQuery<CustomerCase | null>(
    CUSTOMER_CASE_QUERY,
    customerCaseParams,
    {
      perspective,
    },
  );
  if (customerCaseResult.data === null) {
    return null;
  }
  return {
    query: CUSTOMER_CASE_QUERY,
    queryParams: customerCaseParams,
    queryResponse: {
      ...customerCaseResult,
      data: customerCaseResult.data,
    },
    docType: customerCaseID,
  };
};

const tryAsLegalDocument: TryAsResolver<LegalDocumentData> = async (
  language,
  path,
  perspective,
) => {
  if (path.length !== 1) {
    return null;
  }
  const queryParams = {
    slug: path[0],
    language,
  };
  const queryResponse = await loadStudioQuery<LegalDocument | null>(
    LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
    queryParams,
    {
      perspective,
    },
  );
  if (queryResponse.data === null) {
    return null;
  }
  return {
    query: LEGAL_DOCUMENT_BY_SLUG_AND_LANG_QUERY,
    queryParams,
    queryResponse: {
      ...queryResponse,
      data: queryResponse.data,
    },
    docType: legalDocumentID,
  };
};

export async function getPageDataFromParams(
  lang: string,
  path: string[],
  perspective: ClientPerspective,
) {
  return (
    (await tryAsPage(lang, path, perspective)) ??
    (await tryAsCompensationsPage(lang, path, perspective)) ??
    (await tryAsCustomerCase(lang, path, perspective)) ??
    (await tryAsLegalDocument(lang, path, perspective))
  );
}
