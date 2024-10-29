import { InternationalizedString, Slug } from "./global";

export interface SitemapBaseData {
  _updatedAt: string;
}

export interface FieldTranslatedSitemapData extends SitemapBaseData {
  slug: InternationalizedString;
}

export interface SingleTranslationSitemapData extends SitemapBaseData {
  slug: string;
}

export interface UntranslatedSitemapData extends SitemapBaseData {
  slug: Slug;
}

export interface DocumentTranslatedSitemapData extends UntranslatedSitemapData {
  language: string;
}
