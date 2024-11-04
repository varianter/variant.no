import { CustomerCaseSection as CustomerCaseSectionObject } from "studioShared/lib/interfaces/customerCases";

import ImageSection from "./image/ImageSection";
import QuoteBlock from "./quote/QuoteBlock";
import ResultBlock from "./results/ResultBlock";
import RichTextSection from "./richText/RichTextSection";
import SplitSection from "./splitSection/SplitSection";

export function CustomerCaseSection({
  section,
}: {
  section: CustomerCaseSectionObject;
}) {
  switch (section._type) {
    case "splitSection":
      return <SplitSection section={section} />;
    case "richTextBlock":
      return <RichTextSection section={section} />;
    case "quoteBlock":
      return <QuoteBlock section={section} />;
    case "imageBlock":
      return <ImageSection section={section} />;
    case "resultBlock":
      return <ResultBlock section={section} />;
  }
}
