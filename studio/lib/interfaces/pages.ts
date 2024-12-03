import { PortableTextBlock } from "sanity";

import { SeoData } from "src/utils/seo";
import { CompensationCalculatorBackground } from "studio/schemas/objects/sections/compensation-calculator";

import { Slug } from "./global";
import { IImage, ImageExtendedProps } from "./media";
import { ILink } from "./navigation";

export interface HeroSection {
  _type: "hero";
  _key: string;
  basicTitle: string;
  callToActions: ILink[];
  description: string;
}

export interface LogoSaladSection {
  _type: "logoSalad";
  _key: string;
  logos: IImage[];
  richText?: PortableTextBlock[];
  supporting: string;
}

export interface ArticleSection {
  _type: "article";
  _key: string;
  tag?: string;
  basicTitle: string;
  richText?: PortableTextBlock[];
  link?: ILink;
  imageExtended: ImageExtendedProps;
}

export interface CalloutSection {
  _type: "callout";
  _key: string;
  richText?: PortableTextBlock[];
  link?: ILink;
}

export interface CallToActionSection {
  _type: "ctaSection";
  _key: string;
  basicTitle?: string;
  callToActions?: ILink[];
}

export interface TestimonialsSection {
  _type: "testimonials";
  _key: string;
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
  _type: "imageSection";
  _key: string;
  basicTitle: string;
  image: IImage;
}

export interface ImageSplitSection {
  _type: "imageSplitSection";
  _key: string;
  basicTitle: string;
  imageExtended: ImageExtendedProps;
  description: string;
  actions: ILink[];
}

export interface GridSection {
  _type: "grid";
  _key: string;
  basicTitle: string;
  items: {
    _key: string;
    _type: string;
    basicTitle: string;
    richText?: PortableTextBlock[];
    image: IImage;
  }[];
}
export interface ContactBoxSection {
  _type: "contactBox";
  _key: string;
  basicTitle: string;
  optionalSubtitle?: string;
  background: "light" | "dark";
  contactPoints: {
    _key: string;
    _type: string;
    tag: string;
    email: string;
  }[];
}

export interface EmployeesSection {
  _type: "employees";
  _key: string;
  basicTitle: string;
}

export interface JobsSection {
  _type: "jobs";
  _key: string;
  basicTitle: string;
  subtitle: string;
}

export interface CompensationCalculatorSection {
  _type: "compensationCalculator";
  _key: string;
  moduleTitle: string;
  background: CompensationCalculatorBackground;

  calculatorBlock: {
    calculatorTitle: string;
    calculatorDescription: string;
    calculatorLink: ILink;
  };

  handbookBlock: {
    handbookTitle: string;
    handbookDescription: string;
    handbookLink: ILink;
  };
}

export interface EmployeeHighlightSection {
  _type: "employeeHighlight";
  _key: string;
  basicTitle: string;
  name: string;
  description: string;
  employeePhoto: IImage;
}

export type Section =
  | HeroSection
  | LogoSaladSection
  | ArticleSection
  | CalloutSection
  | CallToActionSection
  | TestimonialsSection
  | ImageSection
  | ImageSplitSection
  | GridSection
  | ContactBoxSection
  | EmployeesSection
  | CompensationCalculatorSection
  | JobsSection;

export interface PageBuilder {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  language: string;
  basicTitle: string;
  sections: Section[];
  slug: Slug;
  seo: SeoData;
}
