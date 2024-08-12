"use client";
import React from "react";
import styles from "./button.module.css";
import { useRouter } from "next/navigation";

type ButtonSize = "large" | "small";

interface IButton {
  size?: ButtonSize;
}

const sizeClassMap: { [key in ButtonSize]: string } = {
  large: styles.large,
  small: styles.small,
};

const BackButton = ({ size = "small" }: IButton) => {
  const isStorybook = typeof window !== "undefined" && !!window.STORYBOOK_ENV;
  const router = isStorybook ? null : useRouter();
  const className = `${styles.button} ${sizeClassMap[size]} ${styles.back}`;

  const handleClick = () => {
    if (router) {
      router.back();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      Back
    </button>
  );
};

export default BackButton;
