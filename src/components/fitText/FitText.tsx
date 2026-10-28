"use client";

import {
  CSSProperties,
  ReactNode,
  RefObject,
  useLayoutEffect,
  useRef,
} from "react";

import styles from "./fitText.module.css";

interface FitTextProps {
  children: ReactNode;
  /** Upper bound in px, so short titles don't become absurdly large. */
  maxSize?: number;
  /** Element for the text, so headings keep their semantics. */
  as?: "span" | "h2" | "h3";
  /** Lower bound in px, so long titles stay legible. */
  minSize?: number;
  className?: string;
}

/**
 * Scales its text up or down so it fills the box it is placed in.
 * The parent decides the box size; this finds the largest font size that fits.
 */
export default function FitText({
  children,
  maxSize,
  as: Tag = "span",
  minSize = 20,
  className,
}: FitTextProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;

    let cancelled = false;

    const fits = (size: number) => {
      text.style.fontSize = `${size}px`;
      return (
        text.scrollHeight <= box.clientHeight &&
        text.scrollWidth <= box.clientWidth
      );
    };

    const fit = () => {
      if (cancelled) return;
      if (box.clientWidth === 0 || box.clientHeight === 0) return;
      // Measure unclamped: the line clamp must not affect fits().
      box.removeAttribute("data-at-min");
      text.style.removeProperty("--fit-lines");
      // The cap can come from CSS (--fit-max, any length) so it follows
      // breakpoints and type tokens. Resolved to px through the font size.
      text.style.fontSize = "var(--fit-max, 160px)";
      const cssMax = parseFloat(getComputedStyle(text).fontSize);
      let low = minSize;
      let high = maxSize ?? cssMax;
      while (high - low > 0.5) {
        const mid = (low + high) / 2;
        if (fits(mid)) low = mid;
        else high = mid;
      }
      // Even at minSize the text does not fit: clamp it with an ellipsis on
      // the last line that fits, and expose the full title (see .box[data-at-min]).
      const atMin = !fits(low);
      if (atMin) {
        const computed = getComputedStyle(text);
        const parsedLineHeight = parseFloat(computed.lineHeight);
        const lineHeightPx = Number.isFinite(parsedLineHeight)
          ? parsedLineHeight
          : parseFloat(computed.fontSize);
        const lines = Math.max(1, Math.floor(box.clientHeight / lineHeightPx));
        text.style.setProperty("--fit-lines", String(lines));
        box.setAttribute("data-at-min", "");
        text.title = text.textContent ?? "";
      } else {
        text.removeAttribute("title");
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    document.fonts?.ready.then(() => {
      if (!cancelled) fit();
    });
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [children, maxSize, minSize]);

  // Before the layout effect runs (SSR, first paint) start at maxSize when
  // given; otherwise the CSS fallback in .text uses --fit-max.
  const initialStyle: CSSProperties | undefined =
    maxSize !== undefined ? { fontSize: `${maxSize}px` } : undefined;

  return (
    <div ref={boxRef} className={`${styles.box} ${className ?? ""}`}>
      <Tag
        ref={textRef as RefObject<HTMLSpanElement & HTMLHeadingElement>}
        className={styles.text}
        style={initialStyle}
      >
        {children}
      </Tag>
    </div>
  );
}
