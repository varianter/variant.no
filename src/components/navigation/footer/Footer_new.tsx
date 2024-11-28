"use client";

import Image from "next/image";
import { ReactNode } from "react";

import CustomLink from "src/components/link/CustomLink";
import SoMeLink from "src/components/link/SoMeLink";
import { LegalDocument } from "studio/lib/interfaces/legalDocuments";
import { ILink, LinkType, Navigation } from "studio/lib/interfaces/navigation";
import {
  SocialMediaLink,
  SocialMediaProfiles,
} from "studio/lib/interfaces/socialMedia";

import styles from "./footer_new.module.css";
import { FooterSection } from "./footerSection/FooterSection";
import { TextTertiary } from "./textTertiary/TextTertiary";

export interface IFooter {
  navigationData: Navigation;
  soMeData: SocialMediaProfiles | null;
  legalData: LegalDocument[];
}

const FooterNew = ({ navigationData, soMeData, legalData }: IFooter) => {
  // TODO: Replace dummyLink with real links from sanity
  const dummyLink = (linkTitle: string) => {
    const link = {
      _key: "",
      _type: "",
      linkTitle: linkTitle,
      linkType: LinkType.Internal,
    };
    return link;
  };

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.flex_container_left}>
          <div>
            <TextTertiary>
              Vi har kontorer i Trondheim, Oslo og Bergen. Kom gjerne innom for
              en kopp kaffe eller bare en hyggelig prat.
            </TextTertiary>
            {/*  TODO:: Get offices and map through. Should these link to something?  */}
            <ul className={styles.offices}>
              <CustomLink link={dummyLink("Trondheim")} type="footerLinkNew" />
              <CustomLink link={dummyLink("Oslo")} type="footerLinkNew" />
              <CustomLink link={dummyLink("Bergen")} type="footerLinkNew" />
            </ul>
          </div>
          <div>
            <FooterSection title="Generell kontakt">
              <CustomLink link={dummyLink("928 07 375")} type="footerLinkNew" />
              <CustomLink
                link={dummyLink("post@variant.no")}
                type="footerLinkNew"
              />
            </FooterSection>
          </div>
        </div>
        <div className={styles.flex_container_right}>
          <FooterSection title="Hovedmeny">
            <CustomLink link={dummyLink("Arbeid")} type="footerLinkNew" />
            <CustomLink link={dummyLink("Fag")} type="footerLinkNew" />
            <CustomLink link={dummyLink("Jobb")} type="footerLinkNew" />
            <CustomLink link={dummyLink("Folk")} type="footerLinkNew" />
          </FooterSection>

          <FooterSection title="Annet">
            <CustomLink link={dummyLink("Refill 2025")} type="footerLinkNew" />
            <CustomLink link={dummyLink("Styleguide")} type="footerLinkNew" />
            <CustomLink link={dummyLink("Bærekraft")} type="footerLinkNew" />
          </FooterSection>

          {soMeData && (
            <FooterSection title="Følg oss">
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
        <ul className={styles.grey_links__language}>
          <li>
            <CustomLink link={dummyLink("variant.se")} type="footerLinkGrey" />
          </li>
          <li>
            <CustomLink link={dummyLink("English")} type="footerLinkGrey" />
          </li>
        </ul>
        <ul className={styles.credits}>
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
                <CustomLink link={link} type="footerLinkGrey" />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
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

export default FooterNew;
