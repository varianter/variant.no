import { PortableTextBlock } from "sanity";

export interface CheckboxProps {
  label: string | PortableTextBlock[];
  name: string;
  error?: string;
  value: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
