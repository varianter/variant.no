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

const sizeClassMap: { [key in ButtonSize]: string } = {
  large: styles.large,
  medium: styles.medium,
  small: styles.small,
};

const typeClassMap: { [key in ButtonType]: string } = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const backgroundClassMap: { [key in ButtonBackground]: string } = {
  dark: styles.dark,
  light: styles.light,
};

const Button = ({
  size = "large",
  type = "primary",
  onClick,
  children,
  disabled,
  loading,
  ariaDisabled,
  background = "dark",
}: IButton) => {
  const className = `${styles.button} ${typeClassMap[type]} ${sizeClassMap[size]} ${backgroundClassMap[background]} ${loading ? styles.loading : ""}`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={ariaDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
