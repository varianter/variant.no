import React from "react";

import styles from "./button.module.css";

type ButtonType = "primary" | "secondary";
type ButtonSize = "large" | "medium" | "small";
type ButtonIcon = "iconLeft" | "iconRight";
type ButtonBackground = "dark" | "light";

interface IButton {
  size?: ButtonSize;
  type?: ButtonType;
  icon?: ButtonIcon;
  background?: ButtonBackground;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  ariaDisabled?: boolean;
}

// const sizeClassMap: { [key in ButtonSize]: string } = {
//   large: styles.large,
//   medium: styles.medium,
//   small: styles.small,
// };

// const typeClassMap: { [key in ButtonType]: string } = {
//   primary: styles.primary,
//   secondary: styles.secondary,
// };

// const backgroundClassMap: { [key in ButtonBackground]: string } = {
//   dark: styles.dark,
//   light: styles.light,
// };

// const iconColorClassMap: { [key in ButtonBackground]: string } = {
//   dark: styles.iconColorDark,
//   light: styles.iconColorLight,
// };

// const iconSizeClassMap: { [key in ButtonSize]: string } = {
//   large: styles.iconLarge,
//   medium: styles.iconMedium,
//   small: styles.iconSmall,
// };

const Button = ({
  // size = "large",
  // type = "primary",
  onClick,
  children,
  disabled,
  // loading,
  ariaDisabled,
  // icon,
  // background = "dark",
}: IButton) => {
  // const className = `${styles.button} ${typeClassMap[type]} ${sizeClassMap[size]} ${backgroundClassMap[background]} ${loading ? styles.loading : ""}`;
  // const iconColorClass = `${iconColorClassMap[background]} ${iconSizeClassMap[size]}`;

  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={ariaDisabled}
    >
      {children}
      {/* {icon === "iconLeft" && (
        <span className={`${styles.iconLeft} ${iconColorClass}`}></span>
      )}
     
      {icon === "iconRight" && (
        <span className={`${styles.iconRight} ${iconColorClass}`}></span>
      )} */}
    </button>
  );
};

export default Button;
