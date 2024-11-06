import { CustomerCaseSection as CustomerCaseSectionObject } from "studioShared/lib/interfaces/customerCases";

import ImageSection from "./image/ImageSection";
import ListBlock from "./list/ListBlock";
import QuoteBlock from "./quote/QuoteBlock";
import ResultsBlock from "./results/ResultsBlock";
import SplitSection from "./splitSection/SplitSection";
import TextSection from "./text/TextSection";

export function CustomerCaseSection({
  section,
}: {
  section: CustomerCaseSectionObject;
}) {
  switch (section._type) {
    case "splitSection":
      return <SplitSection section={section} />;
    case "textBlock":
      return <TextSection section={section} />;
    case "quoteBlock":
      return <QuoteBlock section={section} />;
    case "imageBlock":
      return <ImageSection section={section} />;
    case "resultsBlock":
      return <ResultsBlock section={section} />;
    case "listBlock":
      return <ListBlock section={section} />;
  }
}
