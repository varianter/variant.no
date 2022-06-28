import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import AnimatingBackground from 'src/background';
import { and } from 'src/utils/css';
import style from './layout.module.css';

import favicon from '@variant/profile/lib/logo/favicon.png';

type LayoutProps = {
  title?: string;
  fullWidth?: boolean;
  crazy?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Variant – En variant av et konsulentselskap',
  fullWidth = false,
  crazy = false,
}) => {
  const modalRef = React.createRef<HTMLDivElement>();
  const navRef = React.createRef<HTMLUListElement>();
  const closeRef = React.createRef<HTMLButtonElement>();
  const { isMenuVisible, setMenuVisible, tabIndex } = useTogglableBurgerMenu(
    modalRef,
    navRef,
    closeRef,
  );

  return (
    <div
      className={style.main}
      style={isMenuVisible ? { position: 'fixed' } : { position: 'relative' }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:url"
          content="https://www.variant.no/"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/og-header-min.png"
          key="og:image"
        />
      </Head>
      <div
        className={and(
          style.main__inner,
          fullWidth ? style.main__innerFullWidth : '',
        )}
      >
        <header className={style.header}>
          <h1 className={style.header__logo}>
            <Link href="/">
              <a>
                <img src={require('./variant.svg')} alt="Variant" />
              </a>
            </Link>
          </h1>

          <span hidden id="menu-label">
            Hovedmeny
          </span>

          <button
            className={style.burgerButtonContainer}
            ref={closeRef}
            aria-labelledby="menu-label"
            aria-expanded={isMenuVisible}
            onClick={() => setMenuVisible(!isMenuVisible)}
          >
            <div
              className={and(
                style.bar1,
                isMenuVisible ? style.bar1_change : '',
              )}
            />
            <div
              className={and(
                style.bar2,
                isMenuVisible ? style.bar2_change : '',
              )}
            />
            <div
              className={and(
                style.bar3,
                isMenuVisible ? style.bar3_change : '',
              )}
            />
          </button>

          <nav
            className={and(
              style.header__nav,
              isMenuVisible ? '' : style.header__nav__hidden,
            )}
            aria-labelledby="menu-label"
            aria-hidden={!isMenuVisible}
            ref={modalRef}
          >
            <ul className={style.header__nav__ul} ref={navRef}>
              <li>
                <Link href="/jobs">
                  <a tabIndex={tabIndex}>Bli en variant</a>
                </Link>
              </li>
              <li>
                <a
                  href="http://handbook.variant.no"
                  rel="noopener"
                  tabIndex={tabIndex}
                >
                  Håndbok
                </a>
              </li>
              <li>
                <a
                  href="http://variant.blog"
                  rel="noopener"
                  tabIndex={tabIndex}
                >
                  Blogg
                </a>
              </li>
              <li>
                <Link href="/ansatte">
                  <a tabIndex={tabIndex}>Alle varianter</a>
                </Link>
              </li>
              <li id="dont_show">
                <a
                  href="https://twitter.com/intent/tweet?screen_name=variant_as"
                  rel="noopener"
                  tabIndex={tabIndex}
                >
                  Si hallo!
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </div>
      <AnimatingBackground crazy={crazy} />

      <footer className={style.footer}>
        <div className={style.footer__inner}>
          <div className={style.footer__item}>
            <h2>Utforsk</h2>
            <ul>
              <li>
                <Link href="/jobs">
                  <a>Ledige stillinger</a>
                </Link>
              </li>
              <li>
                <a href="https://handbook.variant.no">Håndbok</a>
              </li>
              <li>
                <a href="http://variant.blog" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <a href="https://github.com/varianter" rel="noopener">
                  Open Source
                </a>
              </li>
              <li>
                <Link href="/kalkulator">
                  <a>Lønnskalkulator</a>
                </Link>
              </li>
              <li>
                <a href="https://styleguide.variant.no">Styleguide</a>
              </li>
              <li>
                <a
                  href="https://blog.variant.no/tagged/b%C3%A6rekraft"
                  rel="noopener"
                  title="Les mer om Variants bærekraftsinitiativ"
                >
                  Bærekraft
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Still oss spørsmål</h2>
            <ul>
              <li>
                Ring på{' '}
                <a href="tel:+4792807375" title="Ring oss">
                  928 07 375
                </a>
              </li>
              <li>
                Mail på{' '}
                <a href="mailto:post@variant.no" title="Send oss epost">
                  post@variant.no
                </a>
              </li>
              <li>
                Tweet på{' '}
                <a
                  href="https://twitter.com/variant_as"
                  title="Følg oss på Twitter"
                >
                  @variant_as
                </a>
              </li>
              <li>
                Se bilder på{' '}
                <a
                  href="https://instagram.com/variant_as"
                  title="Følg oss på Instagram"
                >
                  @variant_as
                </a>
              </li>
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Møt oss</h2>

            <p>
              Vi holder til i vårt eget hus i{' '}
              <a
                href="https://www.google.com/maps/place/Varianthuset/@63.4328051,10.397323,17z/data=!3m1!4b1!4m5!3m4!1s0x466d312df4ea1347:0xf63e949e041942ee!8m2!3d63.4328051!4d10.3995117"
                rel="noopener"
                target="_blank"
                title="Kart til Varianthuset i Trondheim"
              >
                Thomas Angells gate 10
              </a>{' '}
              i Trondheim, på{' '}
              <a
                href="https://www.google.com/maps/place/Spaces+-+Spaces+Oslo+Kvadraturen/@59.9096596,10.7460537,18z/data=!4m5!3m4!1s0x46416e89a671fbe3:0x278831a2eb8f70ea!8m2!3d59.9097229!4d10.7467068"
                rel="noopener"
                target="_blank"
                title="Kart til Variant Oslo"
              >
                Spaces Kvadraturen
              </a>{' '}
              i Oslo og på{' '}
              <a
                href="https://g.page/Vaskerelven-39-5323"
                rel="noopener"
                target="_blank"
                title="Kart til Variant Bergen"
              >
                Spaces Vaskerelven
              </a>{' '}
              i Bergen . Kom innom for en kopp kaffe eller bare en hyggelig
              prat.
            </p>
          </div>
        </div>
        <div
          className={and(style.footer__inner, style['footer__inner--bottom'])}
        >
          <div
            className={and(style.footer__item, style['footer__item--address'])}
          >
            <address>
              <strong>Variant AS</strong>
              <br />
              Thomas Angells gate 10 <br />
              7011 Trondheim
            </address>
          </div>
          <div
            className={and(style.footer__item, style['footer__item--address'])}
          >
            <address>
              <strong>Variant Oslo AS</strong>
              <br />
              C/O Spaces Kvadraturen
              <br />
              Tollbugata 8<br />
              0152 Oslo
            </address>
          </div>
          <div
            className={and(style.footer__item, style['footer__item--address'])}
          >
            <address>
              <strong>Variant Bergen AS</strong>
              <br />
              C/O Spaces Vaskerelven <br />
              Vaskerelven 39
              <br />
              5014 Bergen
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

function useTogglableBurgerMenu<
  T extends HTMLElement,
  U extends HTMLElement,
  R extends HTMLElement,
>(
  modalRef: React.RefObject<T>,
  ulRef: React.RefObject<U>,
  closeButton: React.RefObject<R>,
  breakpointMinWidth = '600px',
) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const isNotHamburgerMode =
    useMediaQuery(`(min-width: ${breakpointMinWidth})`) ?? true;

  useEffect(() => {
    setTabIndex(isMenuVisible || isNotHamburgerMode ? 0 : -1);

    // Avoid scrolling when menu is visible.
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isMenuVisible, isNotHamburgerMode]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isMenuVisible || closeButton.current?.contains(e.target as Node)) {
        return;
      }
      if (!e.target || !ulRef.current?.contains(e.target as Node)) {
        setMenuVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isMenuVisible, modalRef, closeButton, ulRef]);

  const handleTabKey = useCallback(
    (e: KeyboardEvent) => {
      const focusableModalElements =
        modalRef.current?.querySelectorAll<HTMLElement>(
          '[role="button"],a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
        ) ?? [];
      const allFocusables =
        document.querySelectorAll<HTMLElement>(
          '[role="button"],a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
        ) ?? [];

      const first = focusableModalElements[0];
      const last = focusableModalElements[focusableModalElements.length - 1];
      const next =
        Array.from(allFocusables).find(
          (_, i) => allFocusables[i - 1] === document.activeElement,
        ) ?? null;
      const previous =
        Array.from(allFocusables).find(
          (_, i) => allFocusables[i + 1] === document.activeElement,
        ) ?? null;

      // On normal tabbing. If next element is outside modal, jump to first element
      if (!e.shiftKey && !modalRef.current?.contains(next)) {
        first?.focus();
        return e.preventDefault();
      }

      // On "reversed" tabbing. If previous element is outside modal, jump to last element
      if (e.shiftKey && !modalRef.current?.contains(previous)) {
        last?.focus();
        return e.preventDefault();
      }

      // Not start or end, follow normal tab flow.
    },
    [modalRef],
  );
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      if (!isMenuVisible || isNotHamburgerMode) {
        return;
      }
      if (e.key === 'Escape') {
        return setMenuVisible(false);
      }
      if (e.key === 'Tab') {
        return handleTabKey(e);
      }
    }
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  }, [isMenuVisible, isNotHamburgerMode, handleTabKey]);

  return {
    isMenuVisible,
    setMenuVisible,
    tabIndex,
  };
}

function hasWindow() {
  return typeof window !== 'undefined';
}

const useMediaQuery = (mediaQuery: string) => {
  const [isMatched, setMatched] = useState(() => {
    if (!hasWindow()) return false;
    return Boolean(window.matchMedia(mediaQuery).matches);
  });

  useEffect(() => {
    if (!hasWindow()) return;
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () =>
      setMatched(Boolean(mediaQueryList.matches));
    listenTo(mediaQueryList, documentChangeHandler);

    documentChangeHandler();
    return () => removeListener(mediaQueryList, documentChangeHandler);
  }, [mediaQuery]);

  return isMatched;
};

function listenTo(
  matcher: MediaQueryList,
  cb: (ev: MediaQueryListEvent) => void,
) {
  if ('addEventListener' in (matcher as any)) {
    return matcher.addEventListener('change', cb);
  }
  return matcher.addListener(cb);
}

function removeListener(
  matcher: MediaQueryList,
  cb: (ev: MediaQueryListEvent) => void,
) {
  if ('removeEventListener' in (matcher as any)) {
    return matcher.removeEventListener('change', cb);
  }
  return matcher.removeListener(cb);
}
