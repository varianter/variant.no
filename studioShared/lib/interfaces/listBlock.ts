interface ListItem {
  _key: string;
  text: string;
}

export interface ListBlock {
  _key: string;
  _type: "listBlock";
  description?: string;
  list: ListItem[];
}
