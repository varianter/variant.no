import { IImage } from "./media";

export interface CompanyInfo {
  brandAssets: BrandAssets;
  siteMetadata: SiteMetadata;
}

export interface BrandAssets {
  primaryLogo: IImage;
  secondaryLogo: IImage;
  favicon: IImage;
}

interface SiteMetadata {
  siteName: string;
  defaultLanguage: string;
}
