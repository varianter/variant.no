import { ContactBoxSection } from "studio/lib/interfaces/pages";

// TODO: Replace with a global document in Sanity once we have write access.
// Contact points are copied from the existing "fag" page contact box.
const TAGS: Record<string, { development: string; design: string }> = {
  no: { development: "Utvikling", design: "Design" },
  en: { development: "Development", design: "Design" },
};

const TITLES: Record<string, string> = {
  no: "La oss snakke fag",
  en: "Let's talk fields",
};

export function defaultContactBox(language: string): ContactBoxSection {
  const tags = TAGS[language] ?? TAGS.en;
  return {
    _type: "contactBox",
    _key: "default-footer-contact-box",
    basicTitle: TITLES[language] ?? TITLES.en,
    background: "light",
    contactPoints: [
      {
        _key: "default-dev",
        _type: "contactPoint",
        tag: tags.development,
        email: "mb@variant.no",
      },
      {
        _key: "default-design",
        _type: "contactPoint",
        tag: tags.design,
        email: "te@variant.no",
      },
    ],
  };
}
