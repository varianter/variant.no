"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

import CustomLink from "src/components/link/CustomLink";
import SoMeLink from "src/components/link/SoMeLink";
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
import { TextTertiary } from "./textTertiary/TextTertiary";

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
                <TextTertiary>{t("text")}</TextTertiary>
                {/*  TODO:: Get offices and map through. Should these link to something?  */}
                <ul className={styles.offices}>
                  {companyLocations.map((location) => (
                    <li
                      key={location.companyLocationName}
                      className={styles.dotSeparator}
                    >
                      {location.companyLocationName}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <FooterSection title={t("contact")}>
                  <Link
                    href={`mailto:${companyInfo.companyEmail}`}
                    className={styles.contactInfo}
                  >
                    {companyInfo.companyEmail}
                  </Link>
                </FooterSection>
              </div>
            </div>
            <div className={styles.flex_container_right}>
              {navigationData.main && (
                <FooterSection title={t("mainMenu")}>
                  {renderPageLinks(navigationData)}
                </FooterSection>
              )}
              {navigationData.footer && (
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
            {/* <ul className={styles.grey_links__language}>
              <li>
                <CustomLink link={dummyLink("English")} type="footerLink" />
              </li>
            </ul> */}
            {/* THERE ARE NO LEGAL DOCUMENTS FOR LAUNCH, REINSTATE WHEN WE HAVE LEGAL DOCUMENTS TO SHOW */}
            {/* <ul className={styles.credits}>
              {legalData?.map((legal) => {
                const link: ILink = {
                  _key: legal._id,
                  _type: legal._type,
                  linkTitle: legal.basicTitle,
                  linkType: LinkType.Internal,
                  internalLink: {
                    _ref: legal.slug.current,
                  },
                  language: legal.language,
                };
                return (
                  <li key={legal._id}>
                    <CustomLink link={link} type="footerLink" />
                  </li>
                );
              })}
            </ul> */}
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
  return renderList(
    data.footer?.map((footer) =>
      footer.linksAndContent?.map((link: ILink) => (
        <li key={link._key}>
          <CustomLink link={link} type="footerLink" />
        </li>
      )),
    ),
  );
};

const renderPageLinks = (data: Navigation) => {
  return renderList(
    data.main.map((p: ILink) => (
      <li key={p._key}>
        <CustomLink link={p} type="footerLink" />
      </li>
    )),
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
