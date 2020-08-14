import React from "react";
import style from "./sayhi.module.css";

export type SayHiProps = {
  className?: string;
  text?: string;
  href: string;
  rel?: string;
};

export default function SayHi({
  className,
  href,
  rel,
  text = "Si hallo!",
}: SayHiProps) {
  return (
    <div className={className}>
      <a className={style.sayHi} href={href} rel={rel}>
        <img src={require("./say-hi.svg")} role="none" />
        <div className={style.text}>{text}</div>
      </a>
    </div>
  );
}
