import { PortableTextBlock } from 'src/components/richText/RichText';

interface Slug {
  _type: string;
  current: string;
}

interface Benefit {
  _type: string;
  _key: string;
  basicTitle: string;
  richText: PortableTextBlock[];
}


export interface SalaryAndBenefits {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  basicTitle: string;
  page: string;
  slug: Slug;
  benefits: Benefit[];
}