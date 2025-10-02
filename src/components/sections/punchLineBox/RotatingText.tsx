"use client";

import {
  AnimatePresence,
  type HTMLMotionProps,
  type Transition,
  motion,
} from "motion/react";
import * as React from "react";

import { cn } from "src/utils/css";

import style from "./punchLineBox.module.css";

type RotatingTextProps = {
  text: string | string[];
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
} & HTMLMotionProps<"div">;

function RotatingText({
  text,
  y = -50,
  duration = 2000,
  transition = { duration: 0.3, ease: "easeOut" },
  containerClassName,
  ...props
}: RotatingTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!Array.isArray(text)) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  const currentText = Array.isArray(text) ? text[index] : text;

  return (
    <span
      className={cn(
        style.textOverflow,
        style.overflowHidden,
        containerClassName,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          transition={transition}
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y }}
          {...props}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export { RotatingText, type RotatingTextProps };
