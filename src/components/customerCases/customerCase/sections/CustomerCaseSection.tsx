import { CustomerCaseSection as CustomerCaseSectionObject } from "studioShared/lib/interfaces/customerCases";

import ImageSection from "./image/ImageSection";
import ListBlock from "./list/ListBlock";
import ResultsBlock from "./results/ResultsBlock";
import SplitSection from "./splitSection/SplitSection";

export function CustomerCaseSection({
  section,
}: {
  section: CustomerCaseSectionObject;
}) {
  switch (section._type) {
    case "splitSection":
      return <SplitSection section={section} />;
    case "imageBlock":
      return <ImageSection section={section} />;
    case "resultsBlock":
      return <ResultsBlock section={section} />;
    case "listBlock":
      return <ListBlock section={section} />;
  }
}
