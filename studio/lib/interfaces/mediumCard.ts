export interface MediumCardProps {
  title: string;
  url?: string;
  publishedDate?: string;
  thumbnail?: { src: string; alt: string } | null;
  description?: string;
  creator?: string;
  buttonTitle?: string;
}
