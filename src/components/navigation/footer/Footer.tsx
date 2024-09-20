"use client";

import { ReactNode } from "react";

import CustomLink from "src/components/link/CustomLink";
import SoMeLink from "src/components/link/SoMeLink";
import Text from "src/components/text/Text";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { CompanyInfo } from "studio/lib/interfaces/companyDetails";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { ILink, LinkType, Navigation } from "studio/lib/interfaces/navigation";
import {
  SocialMediaLink,
  SocialMediaProfiles,
} from "studio/lib/interfaces/socialMedia";

import styles from "./footer.module.css";

export interface IFooter {
  navigationData: Navigation;
  companyInfo: CompanyInfo;
  brandAssets: BrandAssets;
  soMeData: SocialMediaProfiles | null;
  legalData: LegalDocument[];
}

const Footer = ({
  navigationData,
  companyInfo,
  brandAssets,
  soMeData,
  legalData,
}: IFooter) => {
  const renderedLogo = useConvertSanityImageToNextImage(
    brandAssets?.secondaryLogo,
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>{renderedLogo}</div>
      <nav className={styles.nav}>
        {renderLinks(navigationData)}
        {soMeData && renderSoMe(navigationData, soMeData)}
      </nav>
      <ul className={styles.credits}>
        <li key="credit-legal-key-1">
          <Text className={styles.whiteColor}>
            {`© ${currentYear} ${companyInfo.companyName}`}
          </Text>
        </li>
        {legalData?.map((legal) => {
          const path = `legal/${legal.slug.current}`;
          const link = {
            _key: legal._key,
            _type: legal._type,
            linkTitle: legal.basicTitle,
            linkType: LinkType.Internal,
            internalLink: {
              _ref: path,
            },
          };
          return (
            <li key={legal.slug.current}>
              <CustomLink link={link} type="footerLink" />
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

const renderLinks = (data: Navigation) => {
  const contentSections = filterSectionsByType(data, "content");
  const links = contentSections?.[0]?.linksAndContent;
  return (
    links &&
    renderList(
      links.map((link: ILink) => (
        <li key={link._key}>
          <CustomLink link={link} type="footerLink" />
        </li>
      )),
    )
  );
};

const renderSoMe = (data: Navigation, soMeData: SocialMediaProfiles) => {
  const socialMediaSections = filterSectionsByType(data, "socialMedia");
  return (
    socialMediaSections &&
    socialMediaSections.length > 0 &&
    soMeData.soMeLinkArray &&
    renderList(
      soMeData.soMeLinkArray.map((link: SocialMediaLink) => (
        <li key={link._key}>
          <SoMeLink link={link} />
        </li>
      )),
    )
  );
};

const filterSectionsByType = (
  data: Navigation,
  type: "content" | "socialMedia",
) => data.footer?.filter((section) => section.sectionType === type);

const renderList = (children: ReactNode) => (
  <ul className={styles.linkColumn}>{children}</ul>
);

export default Footer;
