"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { useId, useState } from "react";

import { client } from "studio/lib/client";
import { IImage } from "studio/lib/interfaces/media";
import { ImageCarouselSection } from "studio/lib/interfaces/pages";

import styles from "./imageCarousel.module.css";

function CarouselSlide({ image }: { image: IImage }) {
  const imageProps = useNextSanityImage(client, image);
  const objectPosition = image.hotspot
    ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
    : "50% 50%";

  if (!imageProps) return null;

  return (
    <Image
      src={imageProps.src}
      alt={image.alt ?? ""}
      fill
      style={{ objectFit: "cover", objectPosition }}
      blurDataURL={image.metadata?.lqip}
      placeholder={image.metadata?.lqip ? "blur" : "empty"}
    />
  );
}

export default function ImageCarousel({
  section,
}: {
  section: ImageCarouselSection;
}) {
  const [index, setIndex] = useState(0);
  const ids = { slides: useId(), helpText: useId() };
  const { images, title } = section;

  if (!images?.length) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={title ?? "Image carousel"}
        aria-describedby={ids.helpText}
        className={styles.carousel}
      >
        <p id={ids.helpText} className="visually-hidden">
          Use the previous and next buttons to navigate between images.
        </p>
        <div
          className={styles.slides}
          id={ids.slides}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((item, i) => (
            <div
              key={item._key}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
              aria-hidden={i !== index}
            >
              <CarouselSlide image={item.image} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.prev}`}
          onClick={prev}
          aria-label="Previous image"
          aria-controls={ids.slides}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.navButton} ${styles.next}`}
          onClick={next}
          aria-label="Next image"
          aria-controls={ids.slides}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {images[index].caption && (
        <p className={styles.caption}>{images[index].caption}</p>
      )}

      <div
        className={styles.dots}
        role="tablist"
        aria-label="Carousel navigation"
      >
        {images.map((item, i) => (
          <button
            key={item._key}
            role="tab"
            aria-selected={i === index}
            aria-label={`Image ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
