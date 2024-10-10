import { PortableTextBlock } from "sanity";

import { Slug } from "./global";
import { IImage, ImageExtendedProps } from "./media";
import { ILink } from "./navigation";

export interface HeroSection {
  _key: string;
  _type: string;
  basicTitle: string;
  callToActions: ILink[];
  description: string;
}

export interface LogoSaladSection {
  _key: string;
  _type: string;
  logos: IImage[];
  richText?: PortableTextBlock[];
  supporting: string;
}

export interface ArticleSection {
  _key: string;
  _type: string;
  tag?: string;
  basicTitle: string;
  richText?: PortableTextBlock[];
  link?: ILink;
  imageExtended: ImageExtendedProps;
}

export interface CalloutSection {
  _key: string;
  _type: string;
  richText?: PortableTextBlock[];
  link?: ILink;
}

export interface CallToActionSection {
  _key: string;
  _type: string;
  basicTitle?: string;
  callToActions?: ILink[];
}

export interface TestimonialsSection {
  _key: string;
  _type: string;
  basicTitle?: string;
  imagesAsCircles: boolean;
  listOfTestimonials: {
    _type: string;
    _key: string;
    image: IImage;
    basicTitle: string;
    subTitle: string;
    richText: PortableTextBlock[];
  }[];
}

export interface ImageSection {
  _key: string;
  _type: string;
  basicTitle: string;
  image: IImage;
}

export interface GridSection {
  _key: string;
  _type: string;
  basicTitle: string;
  items: {
    _key: string;
    _type: string;
    basicTitle: string;
    richText?: PortableTextBlock[];
    image: IImage;
  }[];
}

export type Section =
  | HeroSection
  | LogoSaladSection
  | ArticleSection
  | CalloutSection
  | CallToActionSection;

export interface PageBuilder {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  language: string;
  page: string;
  sections: Section[];
  slug: Slug;
}

export interface SEO {
  title: string;
  description: string;
  imageUrl?: string;
}

export type Category = {
  _key: string;
  _type: string;
  name: string;
};

export interface BlogPage {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  basicTitle: string;
  page: string;
  slug: Slug;
  allPostsLabel: string;
  categories: Category[];
}

export interface Post {
  _type: string;
  _updatedAt: string;
  slug: Slug;
  _createdAt: string;
  _rev: string;
  _id: string;
  basicTitle: string;
  category: string;
  richText: PortableTextBlock[];
  lead: {
    image: IImage;
    richText: PortableTextBlock[];
  };
  date: string;
}
