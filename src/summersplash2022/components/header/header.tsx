import Link from 'next/link';
import style from 'src/summersplash2022/components/header/header.module.css';
import { and } from 'src/utils/css';
const Header = () => {
  return (
    <div className={and(style.main__inner)}>
      <header className={style.header}>
        <h1 className={style.header__logo}>
          <Link href="/">
            <a>
              <img src={require('src/layout/variant.svg')} alt="Variant" />
            </a>
          </Link>
        </h1>

        <span hidden id="menu-label">
          Hovedmeny
        </span>

        <button
          className={style.burgerButtonContainer}
          aria-labelledby="menu-label"
        ></button>

        <nav className={and(style.header__nav)} aria-labelledby="menu-label">
          <ul className={style.header__nav__ul}>
            <li>
              <Link href="/jobs">
                <a>Bli en variant</a>
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
            <li id="dont_show">
              <a
                href="https://twitter.com/intent/tweet?screen_name=variant_as"
                rel="noopener"
              >
                Si hallo!
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
