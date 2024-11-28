"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";

import { defaultLanguage } from "i18n/supportedLanguages";
import Button from "src/components/buttons/Button";
import LanguageSwitcher from "src/components/languageSwitcher/LanguageSwitcher";
import CustomLink from "src/components/link/CustomLink";
import LinkButton from "src/components/linkButton/LinkButton";
import { BreadCrumbMenu } from "src/components/navigation/breadCrumbMenu/BreadCrumbMenu";
import Text from "src/components/text/Text";
import { getHref } from "src/utils/link";
import { Announcement } from "studio/lib/interfaces/announcement";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { ILink, Navigation } from "studio/lib/interfaces/navigation";
import { callToActionFieldID } from "studio/schemas/fields/callToActionFields";
import { linkID } from "studio/schemas/objects/link";

import styles from "./header.module.css";

export interface IHeader {
  navigation: Navigation;
  assets: BrandAssets;
  announcement: Announcement | null;
  currentLanguage: string;
  pathTitles: string[];
  pathTranslations: InternationalizedString;
  showBreadcrumbs: boolean;
}

const filterLinks = (data: ILink[], type: string) =>
  data?.filter((link) => link._type === type);

export const Header = ({
  navigation,
  announcement,
  currentLanguage,
  pathTitles,
  pathTranslations,
  showBreadcrumbs,
}: IHeader) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarData = navigation.sidebar || navigation.main;

  const links = filterLinks(navigation.main, linkID);
  const ctas = filterLinks(navigation.main, callToActionFieldID);

  const sidebarLinks = filterLinks(sidebarData, linkID);
  const sidebarCtas = filterLinks(sidebarData, callToActionFieldID);

  const sidebarID = "sidebar";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showAnnouncement =
    announcement !== null &&
    announcement.text?.length > 0 &&
    (!announcement.hideAfter || new Date(announcement.hideAfter) > new Date());

  const t = useTranslations("contact_information");

  return (
    <>
      <FocusOn
        enabled={isOpen}
        onClickOutside={toggleMenu}
        onEscapeKey={toggleMenu}
        className={`${styles.focusOn} ${isOpen && styles.isOpen}`}
      >
        <header>
          <nav aria-label="Main menu">
            <div className={styles.wrapper}>
              <Link href="/" aria-label="Home" className={styles.logo} />
              {renderPageLinks(links, false, pathname)}
              {renderPageCTAs(ctas, false)}
              <div className={styles.languageSwitcher}>
                {defaultLanguage && (
                  <LanguageSwitcher
                    currentLanguage={currentLanguage}
                    pathTranslations={pathTranslations}
                  />
                )}
                <Button size="large" type="primary" background="light">
                  <Text type="labelRegular">{t("contact_us")}</Text>
                </Button>
              </div>
              <button
                aria-haspopup="true"
                aria-controls={sidebarID}
                className={isOpen ? styles.open : styles.closed}
                aria-expanded={isOpen}
                onClick={toggleMenu}
              />
            </div>
            {isOpen && (
              <div
                className={styles.mobileMenu}
                id={sidebarID}
                aria-label="Mobile Menu"
                onClick={() => setIsOpen(false)}
              >
                {renderPageLinks(sidebarLinks, true, pathname)}
                {renderPageCTAs(sidebarCtas, true)}
                {defaultLanguage && (
                  <LanguageSwitcher
                    currentLanguage={currentLanguage}
                    pathTranslations={pathTranslations}
                  />
                )}
                {/* TODO: add styling for this section */}
                <Button size="large" type="primary" background="light">
                  <Text type="labelRegular">{t("contact_us")}</Text>
                </Button>
              </div>
            )}
          </nav>
          {showAnnouncement && (
            <div className={styles.announcementWrapper}>
              <div className={styles.announcementContent}>
                <Text type={"bodySmall"}>{announcement.text}</Text>
                {announcement.link && announcement.link.linkTitle && (
                  <div>
                    <CustomLink
                      link={announcement.link}
                      size={"small"}
                      color={"light"}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </header>
      </FocusOn>
      {showBreadcrumbs && (
        <BreadCrumbMenu
          currentLanguage={currentLanguage}
          pathTitles={pathTitles}
          pathname={pathname}
        />
      )}
    </>
  );
};

export const renderPageLinks = (
  links: ILink[],
  isMobile: boolean,
  pathname: string,
) => (
  <ul className={isMobile ? styles.listMobile : styles.desktopLinks}>
    {links?.map((link: ILink) => {
      const linkUrl = getHref(link);
      const isSelected = pathname === `${linkUrl}`;
      return (
        <li key={link._key}>
          <CustomLink link={link} type="headerLink" isSelected={isSelected} />
        </li>
      );
    })}
  </ul>
);

export const renderPageCTAs = (ctas: ILink[], isMobile: boolean) => (
  <ul className={isMobile ? styles.listMobile : styles.desktopCtas}>
    {ctas?.map((link: ILink, index) => (
      <li key={link._key}>
        <LinkButton
          link={link}
          isSmall={true}
          type={ctas.length < 2 || index === 1 ? "primary" : "secondary"}
        />
      </li>
    ))}
  </ul>
);
