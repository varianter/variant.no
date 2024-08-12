"use client";
import React from "react";
import styles from "./SkipToMain.module.css";

const SkipToMain = () => {
  return (
    <a href="#main" className={styles.skipLink}>
      Skip to main content
    </a>
  );
};

export default SkipToMain;
