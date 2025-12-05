export type BlogCardType = "small" | "medium" | "large";

export interface MediumCardProps {
  title: string;
  url?: string;
  publishedDate?: string;
  thumbnail?: { src: string; alt: string } | null;
  description?: string;
  creator?: string;
  variant?: BlogCardType;
}
