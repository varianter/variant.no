import React from "react";
import Head from "next/head";
import Link from "next/link";
import AnimatingBackground from "src/background";

const favicon = require("@variant/profile/logo/favicon.png");
import style from "./layout.module.css";

// const logoBw = require("@variant/profile/logo/variant-bw.svg");
// const logoColors = require("@variant/profile/logo/variant-colors.svg");

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Variant – En ny variant av et konsulentselskap",
}) => {
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
                <a href="http://handbook.variant.no" rel="noopner">
                  Håndbok
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </div>
      <AnimatingBackground />
    </div>
  );
};

export default Layout;
