"use client";

import { useState, useEffect } from "react";
import { FocusOn } from "react-focus-on";
import { ILink, Navigation } from "studio/lib/interfaces/navigation";
import styles from "./header.module.css";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { linkID } from "studio/schemas/objects/link";
import { callToActionFieldID } from "studio/schemas/fields/callToActionFields";
import CustomLink from "src/components/link/CustomLink";
import LinkButton from "src/components/linkButton/LinkButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getHref } from "src/utils/get";
import { BrandAssets } from "../../../../studio/lib/interfaces/brandAssets";

export interface IHeader {
  data: Navigation;
  assets: BrandAssets;
}

const filterLinks = (data: ILink[], type: string) =>
  data?.filter((link) => link._type === type);

export const Header = ({ data, assets }: IHeader) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const renderedLogo = useConvertSanityImageToNextImage(assets?.primaryLogo);
  const sidebarData = data.sidebar || data.main;

  const links = filterLinks(data.main, linkID);
  const ctas = filterLinks(data.main, callToActionFieldID);

  const sidebarLinks = filterLinks(sidebarData, linkID);
  const sidebarCtas = filterLinks(sidebarData, callToActionFieldID);

  const sidebarID = "sidebar";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FocusOn
      enabled={isOpen}
      onClickOutside={toggleMenu}
      onEscapeKey={toggleMenu}
      className={`${styles.focusOn} ${isOpen && styles.isOpen}`}
    >
      <header className={`${isScrolled && !isOpen && styles.scrolled}`}>
        <nav aria-label="Main menu">
          <div className={styles.wrapper}>
            {assets?.primaryLogo && (
              <div className={styles.logo}>
                <Link href="/" aria-label="Home">
                  {renderedLogo}
                </Link>
              </div>
            )}
            {renderPageLinks(links, false, pathname)}
            {renderPageCTAs(ctas, false)}
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
            </div>
          )}
        </nav>
      </header>
    </FocusOn>
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
