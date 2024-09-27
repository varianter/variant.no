export interface Slug {
  _type: string;
  current: string;
}

export interface DocumentWithSlug {
  slug: Slug;
  _updatedAt: string;
}
