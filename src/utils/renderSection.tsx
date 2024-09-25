import { QueryResponseInitial } from "@sanity/react-loader";
import React from "react";

import Article from "src/components/sections/article/Article";
import ArticlePreview from "src/components/sections/article/ArticlePreview";
import Callout from "src/components/sections/callout/Callout";
import CalloutPreview from "src/components/sections/callout/CalloutPreview";
import CallToAction from "src/components/sections/callToAction/CallToAction";
import CallToActionPreview from "src/components/sections/callToAction/CallToActionPreview";
import ContactForm from "src/components/sections/contactForm/ContactForm";
import Grid from "src/components/sections/grid/Grid";
import GridPreview from "src/components/sections/grid/GridPreview";
import { Hero } from "src/components/sections/hero/Hero";
import HeroPreview from "src/components/sections/hero/HeroPreview";
import ImageSectionComponent from "src/components/sections/imageSection/ImageSectionComponent";
import ImageSectionComponentPreview from "src/components/sections/imageSection/ImageSectionComponentPreview";
import { LogoSalad } from "src/components/sections/logoSalad/LogoSalad";
import LogoSaladPreview from "src/components/sections/logoSalad/LogoSaladPreview";
import { Testimonials } from "src/components/sections/testimonials/Testimonials";
import TestimonialsPreview from "src/components/sections/testimonials/TestimonialsPreview";
import {
  ArticleObject,
  CallToActionObject,
  CalloutObject,
  ContactFormSection,
  GridSection,
  HeroObject,
  ImageSection,
  LogoSaladObject,
  PageBuilder,
  Section,
  TestimonialsObject,
} from "studio/lib/interfaces/pages";

interface SectionRendererProps {
  section: Section;
  sectionIndex: number;
  isDraftMode: boolean;
  initialData: QueryResponseInitial<PageBuilder>;
  isLandingPage?: boolean;
}

const renderHero = (
  section: HeroObject,
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

const renderLogoSalad = (
  section: LogoSaladObject,
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

const renderArticle = (
  section: ArticleObject,
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

const renderCallout = (
  section: CalloutObject,
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

const renderCallToAction = (
  section: CallToActionObject,
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

const renderTestimonials = (
  section: TestimonialsObject,
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
      return renderHero(
        section as HeroObject,
        sectionIndex,
        isDraftMode,
        initialData,
        isLandingPage,
      );
    case "logoSalad":
      return renderLogoSalad(
        section as LogoSaladObject,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "article":
      return renderArticle(
        section as ArticleObject,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "callout":
      return renderCallout(
        section as CalloutObject,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "ctaSection":
      return renderCallToAction(
        section as CallToActionObject,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "testimonials":
      return renderTestimonials(
        section as TestimonialsObject,
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
      );
    default:
      return null;
  }
};

export default SectionRenderer;
