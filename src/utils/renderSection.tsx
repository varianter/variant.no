import { QueryResponseInitial } from "@sanity/react-loader";

import Article from "src/components/sections/article/Article";
import ArticlePreview from "src/components/sections/article/ArticlePreview";
import Callout from "src/components/sections/callout/Callout";
import CalloutPreview from "src/components/sections/callout/CalloutPreview";
import CallToAction from "src/components/sections/callToAction/CallToAction";
import CallToActionPreview from "src/components/sections/callToAction/CallToActionPreview";
import CompensationCalculator from "src/components/sections/compensation-calculator/CompensationCalculator";
import ContactBox from "src/components/sections/contact-box/ContactBox";
import CustomerCasesEntry from "src/components/sections/customerCasesEntry/CustomerCasesEntry";
import EmployeeHighlight from "src/components/sections/employeeHighlight/EmployeeHighlight";
import Employees from "src/components/sections/employees/Employees";
import Grid from "src/components/sections/grid/Grid";
import GridPreview from "src/components/sections/grid/GridPreview";
import { Hero } from "src/components/sections/hero/Hero";
import HeroPreview from "src/components/sections/hero/HeroPreview";
import ImageSplitComponent from "src/components/sections/image-split/ImageSplit";
import ImageSplitComponentPreview from "src/components/sections/image-split/ImageSplitPreview";
import ImageSectionComponent from "src/components/sections/imageSection/ImageSectionComponent";
import ImageSectionComponentPreview from "src/components/sections/imageSection/ImageSectionComponentPreview";
import Jobs from "src/components/sections/jobs/Jobs";
import { LogoSalad } from "src/components/sections/logoSalad/LogoSalad";
import LogoSaladPreview from "src/components/sections/logoSalad/LogoSaladPreview";
import { Testimonials } from "src/components/sections/testimonials/Testimonials";
import TestimonialsPreview from "src/components/sections/testimonials/TestimonialsPreview";
import { Locale } from "src/i18n/routing";
import {
  ArticleSection,
  CallToActionSection,
  CalloutSection,
  CustomerCasesEntrySection,
  GridSection,
  HeroSection,
  ImageSection,
  ImageSplitSection,
  LogoSaladSection,
  PageBuilder,
  Section,
  TestimonialsSection,
} from "studio/lib/interfaces/pages";

interface SectionRendererProps {
  language: string;
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
function ImageSplitSectionWrapper({
  section,
  sectionIndex,
  isDraftMode,
  initialData,
}: {
  section: ImageSplitSection;
  sectionIndex: number;
  isDraftMode: boolean;
  initialData: QueryResponseInitial<PageBuilder>;
}) {
  return isDraftMode ? (
    <ImageSplitComponentPreview
      initialData={initialData}
      sectionIndex={sectionIndex}
    />
  ) : (
    <ImageSplitComponent section={section} />
  );
}

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

const renderCustomerCasesEntrySection = (
  section: CustomerCasesEntrySection,
  sectionIndex: number,
  isDraftMode: boolean,
  initialData: QueryResponseInitial<PageBuilder>,
  language: Locale,
) => {
  return isDraftMode ? (
    <CustomerCasesEntry language={language} section={section} />
  ) : (
    <CustomerCasesEntry language={language} section={section} />
  );
};

const SectionRenderer = ({
  language,
  section,
  sectionIndex,
  isDraftMode,
  initialData,
  isLandingPage = false,
}: SectionRendererProps) => {
  switch (section._type) {
    case "hero":
      return renderHeroSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
        isLandingPage,
      );
    case "logoSalad":
      return renderLogoSaladSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "article":
      return renderArticleSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "callout":
      return renderCalloutSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "ctaSection":
      return renderCallToActionSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "testimonials":
      return renderTestimonialsSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "imageSection":
      return renderImageSection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
      );
    case "imageSplitSection":
      return (
        <ImageSplitSectionWrapper
          section={section}
          sectionIndex={sectionIndex}
          isDraftMode={isDraftMode}
          initialData={initialData}
        />
      );
    case "compensationCalculator":
      return <CompensationCalculator section={section} language={language} />;
    case "grid":
      return renderGridSection(section, sectionIndex, isDraftMode, initialData);
    case "customerCasesEntry":
      return renderCustomerCasesEntrySection(
        section,
        sectionIndex,
        isDraftMode,
        initialData,
        language as Locale,
      );
    case "contactBox":
      return <ContactBox section={section} language={language} />;
    case "employees":
      return <Employees language={language} section={section} />;
    case "jobs":
      return <Jobs language={language} section={section} />;
    case "employeeHighlight":
      return <EmployeeHighlight section={section} />;
    default:
      return null;
  }
};

export default SectionRenderer;
