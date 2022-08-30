import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { InView } from 'react-intersection-observer';

function ElementInView({
  children,
}: {
  children: ReactNode;
  hasBeenInView?: () => void;
}) {
  const [isInView, setIsInView] = useState(false);

  function handleOnChange(elementInViewport: boolean) {
    setIsInView(elementInViewport);
  }

  return (
    <InView as="div" onChange={handleOnChange}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
      >
        {children}
      </motion.div>
    </InView>
  );
}

export default ElementInView;
