import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatingBackground from "src/background";

const favicon = require("@variant/profile/logo/favicon.png");
import style from "./layout.module.css";
import FooterImage from "./footer-image";

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Variant – En ny variant av et konsulentselskap",
}) => {
  const footerContainer = useRef<HTMLElement>(null);

  return (
    <div className={style.main}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={style.main__inner}>
        <header className={style.header}>
          <h1 className={style.header__logo}>
            <Link href="/">
              <a>
                <img src={require("./variant.svg")} alt="Variant" />
              </a>
            </Link>
          </h1>
          <nav className={style.header__nav}>
            <ul>
              <li>
                <a href="https://jobs.variant.no" rel="noopener">
                  Bli en variant
                </a>
              </li>
              <li>
                <a href="http://variant.blog" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <a href="http://handbook.variant.no" rel="noopener">
                  Håndbok
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className={style.main__inner}>{children}</div>

        <AnimatingBackground />
      </div>
      <footer className={style.footer} ref={footerContainer}>
        <div className={style.footer__inner}>
          <div className={style.footer__item}>
            <h2>Utforsk</h2>
            <ul>
              <li>
                <a href="https://jobs.variant.no" rel="noopener">
                  Ledige stillinger
                </a>
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
            </ul>
          </div>
          <div className={style.footer__item}>
            <h2>Still oss spørsmål</h2>
            <ul>
              <li>
                Ring på{" "}
                <a href="tel:+4792807375" title="Ring oss">
                  928 07 375
                </a>
              </li>
              <li>
                Mail på{" "}
                <a href="mailto:post@variant.no" title="Send oss epost">
                  post@variant.no
                </a>
              </li>
              <li>
                Tweet på{" "}
                <a
                  href="https://twitter.com/variant_as"
                  title="Følg oss på Twitter"
                >
                  @variant_as
                </a>
              </li>
              <li>
                Se bilder på{" "}
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
              Vi holder til i vårt eget hus i{" "}
              <Link href="/huset">
                <a>Thomas Angellsgt. 10</a>
              </Link>
              . Kom innom for en kopp kaffe eller bare en hyggelig prat.
            </p>

            <address>
              <strong>Variant AS</strong>
              <br />
              Thomas Angellsgate 10 <br />
              7011 Trondheim
            </address>
          </div>
        </div>
        <FooterImage
          container={footerContainer}
          className={style.footer__background}
        />
      </footer>
    </div>
  );
};

export default Layout;
