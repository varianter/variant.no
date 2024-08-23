export interface Link {
  [key: string]: any;
  linkType?: string;
  _type?: string;
}

export const isFieldVisible = (
  link: Link,
  linkTypeField: string,
  expectedType: string,
): boolean => {
  return link[linkTypeField] === expectedType;
};
