import Link from 'next/link';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { and } from 'src/utils/css';
import { useMediaQuery } from 'src/utils/use-media-query';

import style from './page-header.module.css';

export type PageHeaderProps = PropsWithChildren<{
  homepage?: boolean;
  zenMode?: boolean;
  onVisibleChange?(visible: boolean): void;
  whiteMode?: boolean;
}>;
export default function PageHeader({
  homepage = false,
  zenMode = false,
  whiteMode = false,
  onVisibleChange,
}: PageHeaderProps) {
  const modalRef = React.createRef<HTMLDivElement>();
  const navRef = React.createRef<HTMLUListElement>();
  const closeRef = React.createRef<HTMLButtonElement>();
  const isNotHamburgerMode = useMediaQuery(`(min-width: 601px)`) ?? true;
  const { isMenuVisible, setMenuVisible } = useTogglableBurgerMenu(
    modalRef,
    navRef,
    closeRef,
    isNotHamburgerMode,
  );

  useEffect(() => {
    onVisibleChange?.(isMenuVisible);
  }, [isMenuVisible, onVisibleChange]);

  const LogoWrapper = homepage ? 'h1' : 'div';

  return (
    <header className={style.header}>
      <LogoWrapper className={style.header__logo}>
        <Link
          href="/"
          aria-label="Variant startside"
          aria-current={homepage ? 'page' : undefined}
        >
          <img
            src={require(whiteMode ? './whiteVariant.svg' : './variant.svg')}
            alt="Variant"
          />
        </Link>
      </LogoWrapper>

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
                !whiteMode ? '' : style['bar1--whiteMode'],
                isMenuVisible ? style.bar1_change : '',
              )}
            />
            <div
              className={and(
                style.bar2,
                !whiteMode ? '' : style['bar2--whiteMode'],
                isMenuVisible ? style.bar2_change : '',
              )}
            />
            <div
              className={and(
                style.bar3,
                !whiteMode ? '' : style['bar3--whiteMode'],
                isMenuVisible ? style.bar3_change : '',
              )}
            />
          </button>

          <nav
            className={and(
              style.header__nav,
              !whiteMode ? '' : style['header__nav--whiteMode'],
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
                <Link href="tjenesteomrader">Tjenester</Link>
              </li>
              <li>
                <a href="http://handbook.variant.no" rel="noopener">
                  Håndbok
                </a>
              </li>
              <li>
                <a href="http://blog.variant.no" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <Link href="/ansatte">Alle varianter</Link>
              </li>
              <li>
                <Link href="/kalkulator">Lønnskalkulator</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

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
  };
}
