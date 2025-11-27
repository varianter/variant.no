"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

import DotSeparator from "src/components/dotSeparator/dotSeparator";
import CustomLink from "src/components/link/CustomLink";
import SoMeLink from "src/components/link/SoMeLink";
import Text from "src/components/text/Text";
import {
  CompanyInfo,
  CompanyLocation,
} from "studio/lib/interfaces/companyDetails";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { ILink, Navigation } from "studio/lib/interfaces/navigation";
import { ColorPalette } from "studio/lib/interfaces/pages";
import {
  SocialMediaLink,
  SocialMediaProfiles,
} from "studio/lib/interfaces/socialMedia";

import styles from "./footer.module.css";
import { FooterIllustration } from "./footerIllustration/FooterIllustration";
import { FooterSection } from "./footerSection/FooterSection";

export interface IFooter {
  navigationData: Navigation;
  soMeData: SocialMediaProfiles | null;
  legalData: LegalDocument[];
  companyInfo: CompanyInfo;
  companyLocations: CompanyLocation[];
  footerColorPalette: ColorPalette[] | null;
}

const Footer = ({
  navigationData,
  soMeData,
  /* legalData, */
  companyInfo,
  companyLocations,
  footerColorPalette,
}: IFooter) => {
  const t = useTranslations("footer");
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterIllustration
          color={
            footerColorPalette?.find((item) => pathname.includes(item.slug))
              ?.footerWidgetColor || "#FFD02F"
          }
        />
        <div className={styles.footerContent}>
          <nav className={styles.nav}>
            <div className={styles.flex_container_left}>
              <div>
                <Text type="description" color="tertiary">
                  {t("text")}
                </Text>
                <ul className={styles.offices}>
                  {companyLocations.map((location, _key) => (
                    <Fragment key={_key}>
                      <li key={location._key}>
                        <Text type="titleXS" as="span">
                          {location.companyLocationName}
                        </Text>
                      </li>
                      <DotSeparator />
                    </Fragment>
                  ))}
                </ul>
              </div>
              <div>
                <FooterSection title={t("contact")}>
                  <Link
                    href={`mailto:${companyInfo.companyEmail}`}
                    className={styles.contactInfo}
                  >
                    <Text type="titleXS" as="span">
                      {companyInfo.companyEmail}
                    </Text>
                  </Link>
                  {companyInfo.companyPhone && (
                    <Link
                      href={`tel:${companyInfo.companyPhone}`}
                      className={styles.contactInfo}
                    >
                      <Text type="titleXS" as="span">
                        {companyInfo.companyPhone}
                      </Text>
                    </Link>
                  )}
                </FooterSection>
              </div>
            </div>
            <div className={styles.flex_container_right}>
              {navigationData.main && (
                <FooterSection title={t("mainMenu")}>
                  {renderPageLinks(navigationData)}
                </FooterSection>
              )}
              {navigationData.footer?.some(
                (section) =>
                  section.linksAndContent && section.linksAndContent.length > 0,
              ) && (
                <FooterSection title={t("other")}>
                  {renderOtherLinks(navigationData)}
                </FooterSection>
              )}
              {soMeData && (
                <FooterSection title={t("socialMedia")}>
                  {renderSoMe(navigationData, soMeData)}
                </FooterSection>
              )}
            </div>
          </nav>
          <Image
            className={styles.logo}
            src={"/_assets/variant-logo.svg"}
            alt={"variant logo"}
            width={310}
            height={74}
          />
          <div className={styles.grey_links}>
            <span className={styles.organisationNumber}>
              Org. nr. {companyInfo.organizationNumber}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const renderOtherLinks = (data: Navigation) => {
  return data.footer?.map((footer) =>
    footer.linksAndContent?.map((link: ILink) => (
      <CustomLink key={link._key} link={link} type="footerLink" />
    )),
  );
};

const renderPageLinks = (data: Navigation) => {
  return data.main.map((p: ILink) => (
    <CustomLink key={p._key} link={p} type="footerLink" />
  ));
};

const renderSoMe = (data: Navigation, soMeData: SocialMediaProfiles) => {
  const socialMediaSections = filterSectionsByType(data, "socialMedia");
  return (
    socialMediaSections &&
    socialMediaSections.length > 0 &&
    soMeData.soMeLinkArray &&
    soMeData.soMeLinkArray.map((link: SocialMediaLink) => (
      <SoMeLink key={link._key} link={link} />
    ))
  );
};

const filterSectionsByType = (
  data: Navigation,
  type: "content" | "socialMedia",
) => data.footer?.filter((section) => section.sectionType === type);

export default Footer;
