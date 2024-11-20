interface ResultsListItem {
  result: string;
  description: string;
  _key: string;
}

interface Quote {
  _key: string;
  quoteText?: string;
  quoteAuthor?: string;
}

export interface ResultsBlock {
  _key: string;
  _type: "resultsBlock";
  resultsBlockTitle?: string;
  quote?: Quote[];
  resultsList?: ResultsListItem[];
}
