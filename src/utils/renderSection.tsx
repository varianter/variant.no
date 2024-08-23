import { QueryResponseInitial } from "@sanity/react-loader";
import React from "react";
import Article from "src/components/sections/article/Article";
import Callout from "src/components/sections/callout/Callout";
import ArticlePreview from "src/components/sections/article/ArticlePreview";
import { Hero } from "src/components/sections/hero/Hero";
import HeroPreview from "src/components/sections/hero/HeroPreview";
import { LogoSalad } from "src/components/sections/logoSalad/LogoSalad";
import LogoSaladPreview from "src/components/sections/logoSalad/LogoSaladPreview";
import {
  ArticleSection,
  CallToActionSection,
  CalloutSection,
  HeroSection,
  LogoSaladSection,
  PageBuilder,
  TestimonialsSection,
  Section,
  ImageSection,
  GridSection,
  ContactFormSection,
} from "studio/lib/payloads/pages";
import CalloutPreview from "src/components/sections/callout/CalloutPreview";
import CallToAction from "src/components/sections/callToAction/CallToAction";
import CallToActionPreview from "src/components/sections/callToAction/CallToActionPreview";
import { Testimonials } from "src/components/sections/testimonials/Testimonials";
import TestimonialsPreview from "src/components/sections/testimonials/TestimonialsPreview";
import ImageSectionComponent from "src/components/sections/imageSection/ImageSectionComponent";
import Grid from "src/components/sections/grid/Grid";
import ImageSectionComponentPreview from "src/components/sections/imageSection/ImageSectionComponentPreview";
import GridPreview from "src/components/sections/grid/GridPreview";
import ContactForm from "src/components/sections/contactForm/ContactForm";

interface SectionRendererProps {
  section: Section;
  sectionIndex: number;
  isDraftMode: boolean;
  initialData: QueryResponseInitial<PageBuilder>;
  isLandingPage?: boolean;
}

const renderHeroSection = (
  section: HeroSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
  isLandingPage: boolean,
) => {
  return isDraftMode ? (
    <HeroPreview
      initialData={initialData}
      isLanding={isLandingPage}
      sectionIndex={sectionIndex}
    />
  ) : (
    <Hero hero={section} isLanding={isLandingPage} />
  );
};

const renderLogoSaladSection = (
  section: LogoSaladSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <LogoSaladPreview initialData={initialData} sectionIndex={sectionIndex} />
  ) : (
    <LogoSalad logoSalad={section} />
  );
};

const renderArticleSection = (
  section: ArticleSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <ArticlePreview initialData={initialData} sectionIndex={sectionIndex} />
  ) : (
    <Article article={section} />
  );
};

const renderCalloutSection = (
  section: CalloutSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <CalloutPreview initialData={initialData} sectionIndex={sectionIndex} />
  ) : (
    <Callout callout={section} />
  );
};

const renderCallToActionSection = (
  section: CallToActionSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <CallToActionPreview
      initialData={initialData}
      sectionIndex={sectionIndex}
    />
  ) : (
    <CallToAction callToAction={section} />
  );
};

const renderTestimonialsSection = (
  section: TestimonialsSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <TestimonialsPreview
      initialData={initialData}
      sectionIndex={sectionIndex}
    />
  ) : (
    <Testimonials testimonials={section} />
  );
};

const renderImageSection = (
  section: ImageSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <ImageSectionComponentPreview
      initialData={initialData}
      sectionIndex={sectionIndex}
    />
  ) : (
    <ImageSectionComponent section={section} />
  );
};

const renderGridSection = (
  section: GridSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? (
    <GridPreview initialData={initialData} sectionIndex={sectionIndex} />
  ) : (
    <Grid grid={section} />
  );
};

const renderContactFormSection = (
  section: ContactFormSection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
) => {
  return isDraftMode ? <div></div> : <ContactForm data={section} />;
};

const SectionRenderer = ({
  section,
  sectionIndex,
  isDraftMode,
  initialData,
  isLandingPage = false,
}: SectionRendererProps) => {
  switch (section._type) {
    case "hero":
      return renderHeroSection(
        section as HeroSection,
        sectionIndex,
        isDraftMode,
        initialData,
        isLandingPage,
      );
    case "logoSalad":
      return renderLogoSaladSection(
        section as LogoSaladSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "article":
      return renderArticleSection(
        section as ArticleSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "callout":
      return renderCalloutSection(
        section as CalloutSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "ctaSection":
      return renderCallToActionSection(
        section as CallToActionSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "testimonials":
      return renderTestimonialsSection(
        section as TestimonialsSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "imageSection":
      return renderImageSection(
        section as ImageSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "grid":
      return renderGridSection(
        section as GridSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "contactForm":
      return renderContactFormSection(
        section as ContactFormSection,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    default:
      return null;
  }
};

export default SectionRenderer;
