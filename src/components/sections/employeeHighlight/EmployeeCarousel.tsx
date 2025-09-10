"use client";

import { useId, useState } from "react";

import { EmployeeHighlightItem } from "studio/lib/interfaces/pages";

import { EmployeeCard } from "./EmployeeCard";
import styles from "./employeeCarousel.module.css";

/**
 * Carousel for multiple employees.
 */
export function EmployeeCarousel({
  employees,
}: {
  employees: EmployeeHighlightItem[];
}) {
  // Current slide index (0-based)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Accessibility IDs
  const ids = { slides: useId(), helpText: useId() };

  // Navigation functions
  const goToPreviousSlide = () => {
    setCurrentSlideIndex((current) =>
      current === 0 ? employees.length - 1 : current - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((current) =>
      current === employees.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Employee highlights"
        aria-describedby={ids.helpText}
      >
        <p id={ids.helpText} className="visually-hidden">
          Navigate this employee carousel using the Left and Right arrow keys,
          or use the Previous and Next buttons.
        </p>
        <div
          className={styles.slides}
          id={ids.slides}
          style={{
            transform: `translateX(-${currentSlideIndex * 100}%)`,
          }}
        >
          {employees.map((employee, slideIndex) => {
            const isCurrentSlide = currentSlideIndex === slideIndex;
            return (
              <div
                className={styles.slide}
                key={slideIndex}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} of ${employees.length}`}
                aria-hidden={!isCurrentSlide}
              >
                <EmployeeCard employee={employee} />
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          className={`${styles.navButton} ${styles.prev}`}
          aria-label="Previous employee"
          onClick={goToPreviousSlide}
          aria-controls={ids.slides}
        ></button>
        <button
          type="button"
          className={`${styles.navButton} ${styles.next}`}
          aria-label="Next employee"
          onClick={goToNextSlide}
          aria-controls={ids.slides}
        ></button>
      </div>
    </div>
  );
}
