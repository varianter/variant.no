"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { NAV_QUERY } from "studio/lib/queries/navigation";
import { Navigation } from "studio/lib/payloads/navigation";
import { Header } from "./Header";
import { CompanyInfo } from "studio/lib/payloads/companyInfo";
import { COMPANY_INFO_QUERY } from "studio/lib/queries/companyInfo";

export default function HeaderPreview({
  initialNav,
  initialCompanyInfo,
}: {
  initialNav: QueryResponseInitial<Navigation>;
  initialCompanyInfo: QueryResponseInitial<CompanyInfo>;
}) {
  const { data: newNav } = useQuery<Navigation | null>(
    NAV_QUERY,
    {},
    { initial: initialNav },
  );
  const { data: newCompanyInfo } = useQuery<CompanyInfo | null>(
    COMPANY_INFO_QUERY,
    {},
    { initial: initialCompanyInfo },
  );

  return (
    newNav &&
    newCompanyInfo && (
      <Header data={newNav} assets={newCompanyInfo.brandAssets} />
    )
  );
}
