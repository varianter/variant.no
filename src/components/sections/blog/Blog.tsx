"use client";

import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

import Text from "src/components/text/Text";
import { setEqualHeights } from "src/components/utils/formatBlogCards";
import { MediumCardProps } from "studio/lib/interfaces/mediumCard";
import { BlogSection } from "studio/lib/interfaces/pages";

import styles from "./blog.module.css";
import MediumCard from "./MediumCard";

export interface BlogSectionProps {
  section: BlogSection;
}

export default function Blog({ section }: BlogSectionProps) {
  const [blogArticles, setArticles] = useState<MediumCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const variantSmall = "small";
  const variantMedium = "medium";
  const variantLarge = "large";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/blogArticles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (loading || blogArticles.length === 0) return;

    const runEqualHeights = () => {
      setEqualHeights(`.${styles.cardWrapper}.${styles.large}`);
      setEqualHeights(`.${styles.cardWrapper}.${styles.medium}`);
      setEqualHeights(`.${styles.cardWrapper}.${styles.small}`);
    };

    setTimeout(runEqualHeights, 50);

    window.addEventListener("resize", runEqualHeights);

    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            runEqualHeights();
          }
        });
      }
    });

    return () => {
      window.removeEventListener("resize", runEqualHeights);
    };
  }, [loading, blogArticles]);

  // Use CustomErrorMessage and make a new error message?
  if (!loading && blogArticles.length === 0) {
    notFound();
  }

  return (
    blogArticles && (
      <div className={styles.wrapper}>
        <Text type="titleL">{section.basicTitle}</Text>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.articles}>
            {blogArticles.slice(0, 2).map((article, index) => (
              <div
                key={index}
                className={`${styles.article} ${styles[variantLarge]}`}
              >
                <MediumCard
                  article={{
                    ...article,
                    variant: variantLarge,
                  }}
                />
              </div>
            ))}
            {blogArticles.slice(2, 4).map((article, index) => (
              <div
                key={index}
                className={`${styles.article} ${styles[variantMedium]}`}
              >
                <MediumCard
                  article={{
                    ...article,
                    variant: variantMedium,
                  }}
                />
              </div>
            ))}
            {blogArticles.slice(4, 10).map((article, index) => (
              <div
                key={index}
                className={`${styles.article} ${styles[variantSmall]}`}
              >
                <MediumCard
                  article={{
                    ...article,
                    variant: variantSmall,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
}
