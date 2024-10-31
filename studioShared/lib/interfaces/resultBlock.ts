interface ResultListItem {
  result: string;
  description: string;
}

export interface ResultBlock {
  _key: string;
  _type: "resultBlock";
  resultBlockTitle?: string;
  resultList?: ResultListItem[];
}
