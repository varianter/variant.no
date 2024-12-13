"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FocusOn } from "react-focus-on";

import { defaultLanguage } from "i18n/supportedLanguages";
import LanguageSwitcher from "src/components/languageSwitcher/LanguageSwitcher";
import CustomLink from "src/components/link/CustomLink";
import LinkButton from "src/components/linkButton/LinkButton";
import useScrollDirection from "src/utils/hooks/useScrollDirection";
import { getHref } from "src/utils/link";
import { Announcement } from "studio/lib/interfaces/announcement";
import { BrandAssets } from "studio/lib/interfaces/brandAssets";
import { InternationalizedString } from "studio/lib/interfaces/global";
import { ILink, Navigation } from "studio/lib/interfaces/navigation";

import styles from "./header.module.css";

export interface IHeader {
  navigation: Navigation;
  assets: BrandAssets;
  announcement?: Announcement | null;
  currentLanguage: string;
  pathTranslations: InternationalizedString;
  contactEmail: string | undefined;
}

const callToActionFieldID = "callToActionField";
const linkID = "link";

const filterLinks = (data: ILink[], type: string) =>
  data?.filter((link) => link._type === type);

export const Header = ({
  navigation,
  /* announcement, */
  currentLanguage,
  pathTranslations,
  contactEmail,
}: IHeader) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarData = navigation.sidebar || navigation.main;

  const scrollDirection = useScrollDirection();

  const links = filterLinks(navigation.main, linkID);
  const ctas = filterLinks(navigation.main, callToActionFieldID);

  const sidebarLinks = filterLinks(sidebarData, linkID);

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

  /* const showAnnouncement =
    announcement !== null &&
    announcement.text?.length > 0 &&
    (!announcement.hideAfter || new Date(announcement.hideAfter) > new Date());
 */
  const t = useTranslations("contact_information");

  return (
    <>
      <FocusOn
        enabled={isOpen}
        as="header"
        onClickOutside={toggleMenu}
        onEscapeKey={toggleMenu}
        className={`${styles.header} ${styles.focusOn} ${isOpen && styles.isOpen} ${scrollDirection === "down" ? `${styles.hidden}` : ""} `}
      >
        <nav className={styles.nav} aria-label="Main menu">
          <div className={styles.wrapper}>
            <div className={styles.desktopWrapper}>
              <Link
                href="/"
                aria-label="Home"
                className={styles.logo}
                scroll={false}
              />
              <PageLinks links={links} isMobile={false} pathname={pathname} />
              <PageCTAs ctas={ctas} isMobile={false} />
              <div className={styles.languageSwitcher}>
                {defaultLanguage && (
                  <LanguageSwitcher
                    currentLanguage={currentLanguage}
                    pathTranslations={pathTranslations}
                  />
                )}

                {contactEmail && (
                  <LinkButton
                    link={`mailto:${contactEmail}`}
                    linkTitle={t("contact_us")}
                    size="L"
                    type="secondary"
                    background="light"
                    withoutIcon
                  />
                )}
              </div>
              <button
                aria-haspopup="true"
                aria-controls={sidebarID}
                className={isOpen ? styles.open : styles.closed}
                aria-expanded={isOpen}
                onClick={toggleMenu}
                aria-label="Mobile menu"
              />
            </div>
            {isOpen && (
              <div
                className={styles.mobileMenu}
                id={sidebarID}
                aria-label="Mobile Menu"
                onClick={() => setIsOpen(false)}
              >
                <PageLinks
                  links={sidebarLinks}
                  isMobile={true}
                  pathname={pathname}
                />
                <hr className={styles.divider} />
                <div className={styles.mobileButtons}>
                  {defaultLanguage && (
                    <LanguageSwitcher
                      currentLanguage={currentLanguage}
                      pathTranslations={pathTranslations}
                    />
                  )}

                  {contactEmail && (
                    <LinkButton
                      link={`mailto:${contactEmail}`}
                      linkTitle={t("contact_us")}
                      size="L"
                      type="primary"
                      background="light"
                      withoutIcon
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* {showAnnouncement && (
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
        )} */}
      </FocusOn>
    </>
  );
};

function PageLinks({
  links,
  isMobile,
  pathname,
}: {
  links: ILink[];
  isMobile: boolean;
  pathname: string;
}) {
  return (
    <ul className={isMobile ? styles.listMobile : styles.desktopLinks}>
      {links?.map((link: ILink) => {
        const linkUrl = getHref(link);
        const isSelected = pathname === `${linkUrl}`;
        return (
          <li key={link._key}>
            <CustomLink
              link={link}
              type="headerLink"
              isSelected={isSelected}
              scroll={false}
            />
          </li>
        );
      })}
    </ul>
  );
}

function PageCTAs({ ctas, isMobile }: { ctas: ILink[]; isMobile: boolean }) {
  return (
    <ul className={isMobile ? styles.listMobile : styles.desktopCtas}>
      {ctas?.map((link: ILink, index) => (
        <li key={link._key}>
          <LinkButton
            link={link}
            size="S"
            type={ctas.length < 2 || index === 1 ? "primary" : "secondary"}
          />
        </li>
      ))}
    </ul>
  );
}
