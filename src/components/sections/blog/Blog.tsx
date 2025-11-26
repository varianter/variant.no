"use client";

import React, { useEffect, useState } from "react";

import Text from "src/components/text/Text";
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

  return (
    blogArticles && (
      <div className={styles.wrapper}>
        <Text type="titleL">{section.basicTitle}</Text>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={styles.articles}>
            {blogArticles.slice(0, section.postNumber).map((article, index) => (
              <MediumCard
                key={index}
                article={{
                  ...article,
                  buttonTitle: section.buttonTitle || "Les mer",
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  );
}
