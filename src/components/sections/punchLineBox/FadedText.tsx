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

type FadingTextProps = {
  transition?: Transition;
  key: string;
  containerClassName?: string;
} & HTMLMotionProps<"div">;

function FadingText({
  children,
  transition = { duration: 0.3, ease: "easeOut", delay: 0.7 },
  containerClassName,
  ...props
}: FadingTextProps) {
  return (
    <div className={cn(style.overflowHidden, containerClassName)}>
      <AnimatePresence mode="wait">
        <motion.div
          transition={transition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export { FadingText, type FadingTextProps };
