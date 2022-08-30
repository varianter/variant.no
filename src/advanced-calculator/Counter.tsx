import { animate } from 'framer-motion';

import { useEffect, useRef } from 'react';

function usePrevious<Type>(value: Type): Type | undefined {
  const ref = useRef<Type>(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function defaultFormatter(num: number) {
  return Math.floor(num).toString();
}

export default function Counter({
  num,
  formatter = defaultFormatter,
  initial,
  ease = 'easeInOut',
  duration = 0.5,
}: {
  num: number;
  initial?: number;
  formatter?: (num: number) => string;
  ease?: any;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prevNum = usePrevious<number>(initial ?? num);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;
    const controls = animate(prevNum, num, {
      duration,
      ease,
      onUpdate(value) {
        if (value) node.textContent = formatter(value);
      },
    });

    return () => controls.stop();
  }, [num, prevNum, formatter, duration, ease]);

  return <span ref={nodeRef} />;
}
