import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import AnimatingBackground from 'src/background';
import { and } from 'src/utils/css';
import style from './layout.module.css';

const favicon = require('@variant/profile/lib/logo/favicon.png');

type LayoutProps = {
  title?: string;
  fullWidth?: boolean;
  mode?: string;
};

const SplashLayout: React.FC<LayoutProps> = ({
  children,
  title = 'Variant – En variant av et konsulentselskap',
  fullWidth = false,
  mode,
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
                <img
                  src={require(mode === 'job'
                    ? './variant-white.svg'
                    : './variant.svg')}
                  alt="Variant"
                />
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
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </div>
      <AnimatingBackground />
    </div>
  );
};

export default SplashLayout;

function useTogglableBurgerMenu<
  T extends HTMLElement,
  U extends HTMLElement,
  R extends HTMLElement
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
