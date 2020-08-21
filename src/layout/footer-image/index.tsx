import { allColors } from '@variant/profile/lib/colors';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

type FooterProps<T extends HTMLElement> = {
  className?: string;
  container: React.RefObject<T>;
};

export default function FooterImage<T extends HTMLElement>({
  className,
  container,
}: FooterProps<T>) {
  const x = useMotionValue(0);
  const width = useWindowSize();
  useMouseMovement(container, (pageX) => x.set(pageX));

  const offsetX = useTransform(x, [0, width], [0, 100]);
  const offsetY = useTransform(x, [0, width], [0, 30]);
  const offsetYInverted = useTransform(offsetY, (value) => value * -1);

  return (
    <motion.div className={className}>
      <motion.svg
        width="5195"
        height="2392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1400.5 314C1496.5 272.5 1742 159.62 1742 159.62C1802 135.582 1922 87.5056 2042 93.5151C2162 99.5246 2282 159.62 2402 171.639C2522 183.658 2642 147.601 2762 153.61C2882 159.62 3002 207.696 3062 231.734L3122 255.772V370H3062C3002 370 2882 370 2762 370C2642 370 2522 370 2402 370C2282 370 2162 370 2042 370C1922 370 1802 370 1742 370H1682H1291.5C1291.5 370 1304.5 355.5 1400.5 314Z"
          style={{
            translateX: offsetX,
            translateY: offsetYInverted,
          }}
          fill={allColors.primary}
        />
        <motion.path
          d="M1372.5 97.5C1060.5 40.5 803.5 97 535.5 380.5C267.5 664 259.5 1386 0.5 2391.5H5194.5C4553 1869 4061 615 3872 380.5C3683 146 3478.5 0 3012 0C2545.5 0 2475.5 230 2105.5 230C1735.5 230 1684.5 154.5 1372.5 97.5Z"
          fill={allColors.secondary1__shade3}
          style={{
            translateY: offsetY,
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

function useWindowSize() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

function useMouseMovement<T extends HTMLElement>(
  container: React.RefObject<T>,
  setOffsetX: (val: number) => void,
) {
  useEffect(() => {
    const node = container?.current;
    if (!node) return;
    const handleMove = (e: MouseEvent) => setOffsetX(e.pageX);
    node.addEventListener('mousemove', handleMove);
    return () => node.removeEventListener('mousemove', handleMove);
  }, [container, setOffsetX]);
}
