import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

export interface InputFieldProps {
  label: string;
  name: string;
  error?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  autoCorrect?: string;
  type?: HTMLInputTypeAttribute;
  max?: number;
  min?: number;
  spellCheck?: "true" | "false";
  autoCapitalize?: string;
  value: string | number;
  onChange: (name: string, value: string) => void;
  required?: boolean;
}
