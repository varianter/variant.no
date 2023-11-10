import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import whiteStyling from 'src/summersplash2022/components/header/header.module.css';
import style from 'src/summersplash2022/components/header/headerBlack.module.css';
import { and } from 'src/utils/css';
import { useMediaQuery } from 'src/utils/use-media-query';
const Header = (props: { white: boolean }) => {
  const fullWidth = false;
  const zenMode = false;

  const modalRef = React.createRef<HTMLDivElement>();
  const navRef = React.createRef<HTMLUListElement>();
  const closeRef = React.createRef<HTMLButtonElement>();

  const isNotHamburgerMode = useMediaQuery(`(min-width: 851px)`) ?? true;
  const { isMenuVisible, setMenuVisible } = useTogglableBurgerMenu(
    modalRef,
    navRef,
    closeRef,
    isNotHamburgerMode,
  );

  if (props.white) {
    return (
      <div
        className={and(
          style.main__inner,
          fullWidth ? style.main__innerFullWidth : '',
        )}
      >
        <header className={style.header}>
          <div className={style.header__logo}>
            <Link href="/">
              <a aria-label="Variant startside">
                <img src={require('./whiteVariant.svg')} alt="Variant" />
              </a>
            </Link>
          </div>

          {!zenMode && (
            <>
              <span hidden id="menu-label">
                Hovedmeny
              </span>

              <button
                className={style.burgerButtonContainer}
                ref={closeRef}
                aria-labelledby="menu-label"
                aria-expanded={isMenuVisible}
                aria-controls="menu-id"
                onClick={() => setMenuVisible(!isMenuVisible)}
              >
                <div
                  style={
                    isMenuVisible
                      ? { backgroundColor: 'black' }
                      : { backgroundColor: 'white' }
                  }
                  className={and(
                    style.bar1,
                    isMenuVisible ? style.bar1_change : '',
                  )}
                />
                <div
                  style={{ backgroundColor: 'white' }}
                  className={and(
                    style.bar2,
                    isMenuVisible ? style.bar2_change : '',
                  )}
                />
                <div
                  style={
                    isMenuVisible
                      ? { backgroundColor: 'black' }
                      : { backgroundColor: 'white' }
                  }
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
                id="menu-id"
                aria-labelledby="menu-label"
                aria-hidden={isNotHamburgerMode ? undefined : !isMenuVisible}
                ref={modalRef}
              >
                <ul
                  className={whiteStyling.header__nav__ul}
                  hidden={!isNotHamburgerMode && !isMenuVisible}
                  ref={navRef}
                >
                  <li>
                    <Link href="/tjenesteomrader">
                      <a>Tjenester</a>
                    </Link>
                  </li>
                  <li>
                    <a href="http://handbook.variant.no" rel="noopener">
                      Håndbok
                    </a>
                  </li>
                  <li>
                    <a href="http://variant.blog" rel="noopener">
                      Blogg
                    </a>
                  </li>
                  <li>
                    <Link href="/ansatte">
                      <a>Alle varianter</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kalkulator">
                      <a>Lønnskalkulator</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </header>
        {/* <div>{children}</div> */}
      </div>
    );
  } else {
    return (
      <div
        className={and(
          style.main__inner,
          fullWidth ? style.main__innerFullWidth : '',
        )}
      >
        <header className={style.header}>
          <div className={style.header__logo}>
            <Link href="/">
              <a aria-label="Variant startside">
                <img src={require('./variant.svg')} alt="Variant" />
              </a>
            </Link>
          </div>

          {!zenMode && (
            <>
              <span hidden id="menu-label">
                Hovedmeny
              </span>

              <button
                className={style.burgerButtonContainer}
                ref={closeRef}
                aria-labelledby="menu-label"
                aria-expanded={isMenuVisible}
                aria-controls="menu-id"
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
                id="menu-id"
                aria-labelledby="menu-label"
                aria-hidden={isNotHamburgerMode ? undefined : !isMenuVisible}
                ref={modalRef}
              >
                <ul
                  className={style.header__nav__ul}
                  hidden={!isNotHamburgerMode && !isMenuVisible}
                  ref={navRef}
                >
                  <li>
                    <Link href="/tjenesteomrader">
                      <a>Tjenester</a>
                    </Link>
                  </li>
                  <li>
                    <a href="http://handbook.variant.no" rel="noopener">
                      Håndbok
                    </a>
                  </li>
                  <li>
                    <a href="http://variant.blog" rel="noopener">
                      Blogg
                    </a>
                  </li>
                  <li>
                    <Link href="/ansatte">
                      <a>Alle varianter</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kalkulator">
                      <a>Lønnskalkulator</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </header>
        {/* <div>{children}</div> */}
      </div>
    );
  }
};

function useTogglableBurgerMenu<
  T extends HTMLElement,
  U extends HTMLElement,
  R extends HTMLElement,
>(
  modalRef: React.RefObject<T>,
  ulRef: React.RefObject<U>,
  closeButton: React.RefObject<R>,
  isNotHamburgerMode: boolean,
) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    // Avoid scrolling when menu is visible.
    if (isMenuVisible) {
      document.body.classList.add('body-hidden');
    } else {
      document.body.classList.remove('body-hidden');
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
  };
}

export default Header;
