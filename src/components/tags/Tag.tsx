import React from "react";

import styles from "src/components/tags/tag.module.css";

type TagBackground = "dark" | "light";
type Device = "desktop" | "tablet" | "mobile";
type State = "default" | "focused" | "hover" | "pressed" | "disabled";
type Size = "normal" | "large";

interface ITagProps {
  children: React.ReactNode;
  background?: "light" | "dark";
  size?: "normal" | "large";
  state?: "default" | "focused" | "hover" | "pressed" | "disabled";
  device?: "desktop" | "mobile";
  onClick?: () => void;
  disabled?: boolean;
}

const backgroundClassMap: { [key in TagBackground]: string } = {
  light: styles.light,
  dark: styles.dark,
};

const deviceClassMap: { [key in Device]: string } = {
  desktop: styles.desktop,
  tablet: styles.tablet,
  mobile: styles.mobile,
};

const stateClassMap: { [key in State]: string } = {
  default: styles.default,
  focused: styles.focused,
  hover: styles.hover,
  pressed: styles.pressed,
  disabled: styles.disabled,
};

const sizeClassMap: { [key in Size]: string } = {
  normal: styles.normal,
  large: styles.large,
};

const Tag = ({
  background = "dark",
  device = "desktop",
  size = "normal",
  state = "default",
  onClick,
  children,
  disabled,
}: ITagProps) => {
  const className = `${styles.tag} ${backgroundClassMap[background]} ${deviceClassMap[device]} ${stateClassMap[state]} ${sizeClassMap[size]}`;

  console.log(className);

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Tag;
