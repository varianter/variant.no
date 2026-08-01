import { QueryResponseInitial } from "@sanity/react-loader";

import EventRegistration from "src/components/hubspot/eventRegistration/eventRegistration";
import Blog from "src/components/sections/blog/Blog";
import CompensationCalculator from "src/components/sections/compensation-calculator/CompensationCalculator";
import ContactBox from "src/components/sections/contact-box/ContactBox";
import CustomerCasesEntry from "src/components/sections/customerCasesEntry/CustomerCasesEntry";
import EmployeeHighlight from "src/components/sections/employeeHighlight/EmployeeHighlight";
import Employees from "src/components/sections/employees/Employees";
import Events from "src/components/sections/events/Events";
import Generosity from "src/components/sections/generosity/Generosity";
import Grid from "src/components/sections/grid/Grid";
import GridPreview from "src/components/sections/grid/GridPreview";
import GridSectionComponent from "src/components/sections/gridSection/GridSection";
import { Handbook } from "src/components/sections/handbook/HandbookSection";
import { Hero } from "src/components/sections/hero/Hero";
import HeroPreview from "src/components/sections/hero/HeroPreview";
import ImageSplitComponent from "src/components/sections/image-split/ImageSplit";
import ImageSplitComponentPreview from "src/components/sections/image-split/ImageSplitPreview";
import ImageCarousel from "src/components/sections/imageCarousel/ImageCarousel";
import ImageSectionComponent from "src/components/sections/imageSection/ImageSectionComponent";
import ImageSectionComponentPreview from "src/components/sections/imageSection/ImageSectionComponentPreview";
import Jobs from "src/components/sections/jobs/Jobs";
import Learning from "src/components/sections/learning/Learning";
import { LogoSalad } from "src/components/sections/logoSalad/LogoSalad";
import LogoSaladPreview from "src/components/sections/logoSalad/LogoSaladPreview";
import Openness from "src/components/sections/openness/Openness";
import PunchLineBox from "src/components/sections/punchLineBox/PunchLineBox";
import SplitSection from "src/components/sections/splitSection/SplitSection";
import TextContent from "src/components/sections/textContent/TextContent";
import { Locale } from "src/i18n/routing";
import {
  CustomerCasesEntrySection,
  GridSection,
  HeroSection,
  ImageSection,
  ImageSplitSection,
  LogoSaladSection,
  PageBuilder,
  Section,
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
      return <CompensationCalculator section={section} />;
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
    case "punchLineBox":
      return <PunchLineBox section={section} />;
    case "contactBox":
      return <ContactBox section={section} language={language} />;
    case "employees":
      return <Employees language={language} section={section} />;
    case "jobs":
      return <Jobs language={language} section={section} />;
    case "employeeHighlight":
      return <EmployeeHighlight section={section} />;
    case "opennessSection":
      return <Openness section={section} />;
    case "generositySection":
      return <Generosity section={section} language={language} />;
    case "learningSection":
      return <Learning section={section} />;
    case "textContent":
      return <TextContent section={section} />;
    case "events":
      return <Events language={language} section={section} />;
    case "handbookSection":
      return <Handbook section={section} language={language} />;
    case "splitSection":
      return <SplitSection section={section} language={language} />;
    case "fieldGrid":
      return <GridSectionComponent section={section} />;
    case "eventRegistration":
      return <EventRegistration section={section} />;
    case "blogSection":
      return <Blog section={section} />;
    case "imageCarousel":
      return <ImageCarousel section={section} />;
    default:
      return null;
  }
};

export default SectionRenderer;
