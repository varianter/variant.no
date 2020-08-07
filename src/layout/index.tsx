import React from "react";
import Head from "next/head";
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

      {children}

      <AnimatingBackground />
    </div>
  );
};

export default Layout;
