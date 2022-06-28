import { motion, useAnimation, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { Children, ReactNode, useEffect } from 'react';

type SplitTextProps = {
  children: string;
} & HTMLMotionProps<'span'>;
export function SplitText({ children, ...rest }: SplitTextProps) {
  let words = children.split('') as string[];
  return (
    <>
      {words.map((word, i) => {
        return (
          <motion.span
            key={word + i}
            {...rest}
            style={{ display: 'inline-block', willChange: 'transform' }}
            custom={i}
          >
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </motion.span>
        );
      })}
    </>
  );
}

export const wordContainerVariants = {
  hidden: { transition: { staggerChildren: 0 } },
  visible: { transition: { staggerChildren: 0.04 } },
};

export const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

export function recursiveSplit(children: React.ReactNode): ReactNode {
  const arrayChildren = Children.toArray(children);

  return Children.map(arrayChildren, (child) => {
    if (typeof child === 'string') {
      return <SplitText variants={wordVariants}>{child as string}</SplitText>;
    }
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(
      child,
      child.props,
      recursiveSplit(child.props?.children),
    );
  });
}

export function TextSplitter({ children }: { children: React.ReactNode }) {
  const { inView, ref } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      //style={{ display: "contents" }}
      variants={wordContainerVariants}
      initial="hidden"
      animate={controls}
      //exit="before"
    >
      {recursiveSplit(children)}
    </motion.div>
  );
}

/* 
export function TextSplitter({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      style={{ display: "contents" }}
      variants={wordContainerVariants}
      initial={"before"}
      animate={"after"}
      exit={"before"}
    >
      <SplitText variants={wordVariants}>{child}</SplitText>;
    </motion.span>
  );
}
 */
