import React from "react";

import styles from "./button.module.css";

type ButtonType = "primary" | "secondary";
type ButtonSize = "large" | "small" | "extraSmall";

interface IButton {
  size?: ButtonSize;
  type?: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  ariaDisabled?: boolean;
}

const sizeClassMap: { [key in ButtonSize]: string } = {
  large: styles.large,
  small: styles.small,
  extraSmall: styles.extraSmall,
};

const typeClassMap: { [key in ButtonType]: string } = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const Button = ({
  size = "large",
  type = "primary",
  onClick,
  children,
  disabled,
  loading,
  ariaDisabled,
}: IButton) => {
  const className = `${styles.button} ${sizeClassMap[size]} ${typeClassMap[type]} ${loading ? styles.loading : ""}`;

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
