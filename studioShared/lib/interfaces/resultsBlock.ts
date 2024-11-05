interface ResultsListItem {
  result: string;
  description: string;
  _key: string;
}

export interface ResultsBlock {
  _key: string;
  _type: "resultsBlock";
  resultsBlockTitle?: string;
  resultsList?: ResultsListItem[];
}
