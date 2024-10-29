"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";

import { defaultLanguage } from "i18n/supportedLanguages";
import { SanityImage } from "src/components/image/SanityImage";
import LanguageSwitcher from "src/components/languageSwitcher/LanguageSwitcher";
import CustomLink from "src/components/link/CustomLink";
import LinkButton from "src/components/linkButton/LinkButton";
import Text from "src/components/text/Text";
import { getHref } from "src/utils/link";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { ILink, Navigation } from "studio/lib/interfaces/navigation";
import { callToActionFieldID } from "studio/schemas/fields/callToActionFields";
import { linkID } from "studio/schemas/objects/link";

import styles from "./header.module.css";

export interface IHeader {
  navigation: Navigation;
  assets: BrandAssets;
  currentLanguage: string;
  pathTranslations: InternationalizedString;
}

const filterLinks = (data: ILink[], type: string) =>
  data?.filter((link) => link._type === type);

export const Header = ({
  navigation,
  assets,
  currentLanguage,
  pathTranslations,
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
              {assets?.primaryLogo && (
                <div className={styles.logo}>
                  <Link href="/" aria-label="Home">
                    <SanityImage image={assets.primaryLogo} />
                  </Link>
                </div>
              )}
              {renderPageLinks(links, false, pathname)}
              {renderPageCTAs(ctas, false)}
              <div className={styles.languageSwitcher}>
                {defaultLanguage && (
                  <LanguageSwitcher
                    currentLanguage={currentLanguage}
                    pathTranslations={pathTranslations}
                  />
                )}
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
              </div>
            )}
          </nav>
        </header>
      </FocusOn>
      {breadCrumb(currentLanguage, pathname)}
    </>
  );
};

export const breadCrumb = (currentLanguage: string, pathname: string) => (
  <ul className={styles.breadCrumbMenu}>
    {["Home", ...pathname.split("/").slice(2)].map((e, index, path) => {
      const href =
        "/" + currentLanguage + "/" + path.slice(1, index + 1).join("/");
      const isLast = index === path.length - 1;

      return (
        <li key={index} className={styles.breadCrumb}>
          <Link className={styles.breadCrumb} href={href}>
            <Text
              className={isLast ? styles.breadCrumbText : styles.breadCrumbLink}
              type={isLast ? "labelSemibold" : "desktopLink"}
            >
              {e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()}
            </Text>
          </Link>
          {!isLast && (
            <span
              className={
                index < path.length - 2
                  ? styles.dotSeparator
                  : styles.lastDotSeparator
              }
            >
              •
            </span>
          )}
        </li>
      );
    })}
  </ul>
);

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
