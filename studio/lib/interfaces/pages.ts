import { PortableTextBlock } from "sanity";

import { IEventPosting } from "./eventPosting";
import { Slug } from "./global";
import { IImage, ImageExtendedProps } from "./media";
import { ILink } from "./navigation";
import { SeoData } from "./seo";

export interface HeroSection {
  _type: "hero";
  _key: string;
  eyebrow?: string;
  title: string;
  description?: string;
  image?: IImage;
}

export interface LogoSaladSection {
  _type: "logoSalad";
  _key: string;
  logos: IImage[];
  title: string;
  supporting: string;
}

export interface ITextContent {
  _type: "textContent";
  _key: string;
  textType: "title" | "paragraph" | "richText" | "quote";
  textTitle?: ITextTitle;
  textParagraph?: ITextParagraph;
  textQuote?: ITextQuote;
  richText?: PortableTextBlock[];
}

export interface ITextTitle {
  eyebrow?: string;
  title?: string;
}

export interface ITextParagraph {
  paragraphHeader?: string;
  textContent?: string;
}

export interface ITextQuote {
  author?: string;
  quote?: string;
}

export interface ImageSection {
  _type: "imageSection";
  _key: string;
  image: IImage;
}

export interface ImageSplitSection {
  _type: "imageSplitSection";
  _key: string;
  size: "small" | "medium";
  is2vs3: boolean;
  imageFullHeight: boolean;
  content: {
    _key: string;
    basicTitle: string;
    description: string;
  }[];
  imageExtended: ImageExtendedProps;
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
  background: "light" | "dark" | "transparent";
  contactPoints: {
    _key: string;
    _type: string;
    tag: string;
    overrideTitle?: string;
    email: string;
  }[];
}

export interface EmployeesSection {
  _type: "employees";
  _key: string;
  basicTitle: string;
}

export interface CustomerCasesEntrySection {
  _type: "customerCasesEntry";
  _key: string;
  basicTitle: string;
}

export interface JobsSection {
  _type: "jobs";
  _key: string;
  basicTitle: string;
  subtitle: string;
}

export interface EventsSection {
  _type: "events";
  _key: string;
  basicTitle: string;
  subtitle: string;
  allEvents: boolean;
  oldEvents: boolean;
  hideLocationFilters: boolean;
  eventSectionColor?: { value: string };
  eventPostingsArray: IEventPosting[];
}

export enum CompensationCalculatorBackground {
  Dark = "dark",
  Violet = "violet",
}

export type SplitSectionSection =
  | HandbookSection
  | CompensationCalculatorSection;

export interface SplitSection {
  _key: string;
  _type: "splitSection";
  sections: SplitSectionSection[];
  title?: string;
}

export interface SplitSectionProps {
  section: SplitSection;
  language: string;
}

export enum HandbookBackground {
  Light = "light",
  Violet = "violet",
}

export interface HandbookSection {
  _type: "handbookSection";
  _key: string;
  handbookTitle: string;
  handbookDescription: string;
  handbookLink: ILink;
  handbookBackground: HandbookBackground;
}

export interface CompensationCalculatorSection {
  _type: "compensationCalculator";
  _key: string;
  moduleTitle?: string;
  background: CompensationCalculatorBackground;

  calculatorBlock: {
    calculatorTitle: string;
    calculatorDescription: string;
    calculatorLink: ILink;
  };
}

export interface GenerositySection {
  _type: "generositySection";
  _key: string;
  basicTitle: string;
  description: string;

  handbookBlock: HandbookSection;
}

export interface EmployeeHighlightItem {
  basicTitle?: string;
  name?: string;
  description?: string;
  employeePhoto?: IImage;
  email?: string;
  phone?: string;
}

export interface PunchLineBoxSection {
  _type: "punchLineBox";
  _key: string;
  sentences: {
    mainPunchLine: string;
    actionLine: string;
    email: string;
  }[];
}

export interface EmployeeHighlightSection {
  _type: "employeeHighlight";
  _key: string;
  employees?: EmployeeHighlightItem[];
}

export interface OpennessSection {
  _type: "opennessSection";
  _key: string;
  basicTitle: string;
  image: IImage;
  description: string;
}

export interface LearningSection {
  _type: "learningSection";
  _key: string;
  basicTitle: string;
  image: IImage;
  description: string;
  articleLink: string;
  articleTag: string;
  articleTitle: string;
  articleSubtitle: string;
}

export interface Field {
  _id: string;
  title: string;
  description?: string;
  type: "article" | "podcast" | "video" | "other";
  image?: IImage;
  link?: ILink;
  size?: "large" | "medium" | "small";
  readingListeningTime?: string;
}

export interface FieldGrid {
  _type: "fieldGrid";
  _key: string;
  title: string;
  fields: Field[];
}

export interface EventRegistrationSection {
  _type: "eventRegistration";
  _key: string;
  recordID: string;
  submitButtonText: string | undefined;
  date: string;
  interests: string[];
  companyRequired?: boolean;
}

export interface BlogSection {
  _type: "blogSection";
  _key: string;
  basicTitle: string;
  buttonTitle: string;
  postNumber: number;
}

export type Section =
  | HeroSection
  | LogoSaladSection
  | ITextContent
  | ImageSection
  | ImageSplitSection
  | GridSection
  | EmployeesSection
  | CustomerCasesEntrySection
  | ContactBoxSection
  | EmployeeHighlightSection
  | CompensationCalculatorSection
  | JobsSection
  | EventsSection
  | OpennessSection
  | PunchLineBoxSection
  | GenerositySection
  | LearningSection
  | HandbookSection
  | SplitSection
  | FieldGrid
  | EventRegistrationSection
  | BlogSection;

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
  footerWidgetColor?: string;
}

export interface ColorPalette {
  footerWidgetColor: string;
  slug: string;
}
