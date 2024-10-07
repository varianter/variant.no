export interface SlugTranslation {
  language: string;
  slug: string;
}

export interface SlugTranslations {
  _translations: (SlugTranslation | null)[];
}
