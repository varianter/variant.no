export interface Slug {
  _type: string;
  current: string;
}

export interface Reference {
  _type: "reference";
  _ref: string;
}
