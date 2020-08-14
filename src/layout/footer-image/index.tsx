import { useEffect } from "react";
import { useThrottle } from "@react-hook/throttle";
import style from "./footer-image.module.css";

type FooterProps<T extends HTMLElement> = {
  className?: string;
  container: React.RefObject<T>;
};

const translateX = (offset: number) => ({
  transform: `translateX(${offset}px)`,
});
const translateY = (offset: number) => ({
  transform: `translateY(${offset}px)`,
});
export default function FooterImage<T extends HTMLElement>({
  container,
  className,
}: FooterProps<T>) {
  const xOffset = useXMouseOffset(container);
  const normalizedOffset = Math.max(0.1, Math.log(xOffset)) * 10;
  const invertedOffset = normalizedOffset * -1;

  return (
    <div className={className}>
      <svg
        width="5195"
        height="2392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style.svg}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1682 183.658l60-24.038c60-24.038 180-72.114 300-66.105 120 6.01 240 66.105 360 78.124 120 12.019 240-24.038 360-18.029 120 6.01 240 54.086 300 78.124l60 24.038V370H1682V183.658z"
          fill="#E61A6B"
          style={translateY(normalizedOffset)}
        />
        <path
          d="M1372.5 97.5c-312-57-569-.5-837 283s-276 1005.5-535 2011h5194C4553 1869 4061 615 3872 380.5S3478.5 0 3012 0s-536.5 230-906.5 230-421-75.5-733-132.5z"
          fill="#1A1837"
          style={translateX(invertedOffset)}
        />
      </svg>
    </div>
  );
}

function useXMouseOffset<T extends HTMLElement>(container: React.RefObject<T>) {
  const [xOffset, setXOffset] = useThrottle<number>(0, 60);
  useEffect(function () {
    if (!container.current) return;

    const handler = function (e: MouseEvent) {
      setXOffset(e.x);
    };
    container.current.addEventListener("mousemove", handler);
    return () => container.current?.removeEventListener("mousemove", handler);
  }, []);
  return Math.max(0.1, Number.isNaN(xOffset) ? 0.1 : xOffset);
}
