import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export const useReducedMotionEffect = () => {
  const [value, setValue] = useState(false);
  const data = useReducedMotion();
  useEffect(() => setValue(data), [data]);
  return value;
};
