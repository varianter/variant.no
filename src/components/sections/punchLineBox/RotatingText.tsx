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
  text: string;
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
  animationKey: string;
} & HTMLMotionProps<"div">;

function RotatingText({
  text,
  y = -50,
  animationKey,
  transition = { duration: 0.3, ease: "easeOut" },
  containerClassName,
  ...props
}: RotatingTextProps) {
  return (
    <div className={cn(style.overflowHidden, containerClassName)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={animationKey}
          transition={transition}
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y }}
          {...props}
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export { RotatingText, type RotatingTextProps };
