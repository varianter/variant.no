import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import style from '../calculator.module.css';

const container = {
  initial: {
    transition: {
      //delay: i * 0.1
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      //delay: i * 0.1
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  animate: {
    transition: {
      //delay: i * 0.1
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

type SplitTextProps = {
  children: string;
} & HTMLMotionProps<'span'>;
export function SplitText({ children, ...rest }: SplitTextProps) {
  let words = children.split('') as string[];
  return (
    <>
      {words.map((word, i) => {
        return (
          <span
            key={children + i}
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            <motion.span
              {...rest}
              style={{ display: 'inline-block', willChange: 'transform' }}
              custom={i}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

function defaultFormatter(num: number) {
  return Math.floor(num).toString();
}

export default function CounterFlip({
  num,
  formatter = defaultFormatter,
}: {
  num: number;
  formatter: (num: number) => string;
}) {
  return (
    <div className={style.lol}>
      <AnimatePresence>
        <motion.span
          key={num}
          style={{ display: 'inline-block' }}
          variants={container}
          initial="intial"
          animate="visible"
        >
          <SplitText
            //initial={{ y: "-100%" }}
            initial="initial"
            exit="exit"
            animate="visible"
            //variants={items}
            variants={{
              visible: (i: number) => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                },
              }),
              exit: (i: number) => ({
                y: '100%',

                transition: {
                  delay: i * 0.1,
                },
              }),
              initial: (i: number) => ({
                y: '-100%',

                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
          >
            {formatter(num)}
          </SplitText>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
