import { Box, Button, Card, Checkbox, Flex, Text } from "@sanity/ui";
import React from "react";
import { PatchEvent, set } from "sanity";

import {
  Language,
  supportedLanguages,
} from "internationalization/supportedLanguages";

interface LanguageSelectorProps {
  value?: Language[];
  onChange: (event: PatchEvent) => void;
}

const LanguageSelector = ({ value = [], onChange }: LanguageSelectorProps) => {
  // Get the currently set default language
  const currentDefaultLanguage = value.find((lang) => lang.default)?.id || null;

  // Handle the selection or deselection of a language
  const handleLanguageSelection = (lang: Language) => {
    const isSelected = value.some((item) => item.id === lang.id);
    const updatedValue = isSelected
      ? value.filter((item) => item.id !== lang.id) // Deselect if already selected
      : [...value, { ...lang, default: false }]; // Select if not already selected

    // Determine the new default language
    const newDefaultLanguage = getNewDefaultLanguage(
      updatedValue,
      currentDefaultLanguage,
      lang,
    );

    // Apply the new default language to the updated list
    const finalValue = updatedValue.map((item) => ({
      ...item,
      default: item.id === newDefaultLanguage,
    }));

    onChange(PatchEvent.from(set(finalValue)));
  };

  // Handle setting a specific language as the default
  const handleDefaultSetting = (lang: Language) => {
    const updatedValue = value.map(
      (item) =>
        item.id === lang.id
          ? { ...item, default: true } // Set this language as default
          : { ...item, default: false }, // Unset default for others
    );
    onChange(PatchEvent.from(set(updatedValue)));
  };

  return (
    <Flex direction="column" gap={3}>
      {supportedLanguages.map((lang) => (
        <Card
          key={lang._key}
          padding={4}
          radius={2}
          shadow={1}
          style={{
            cursor: "pointer",
            backgroundColor: value.some((item) => item.id === lang.id)
              ? "#E3F2FD"
              : "white",
          }}
          onClick={() => handleLanguageSelection(lang)}
        >
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Checkbox
                id={lang.id}
                checked={value.some((item) => item.id === lang.id)}
                readOnly
              />
              <Box flex={1} paddingLeft={3}>
                <Text>
                  <label htmlFor={lang.id}>
                    {lang.icon} {lang.title}
                  </label>
                </Text>
              </Box>
            </Flex>
            {value.some((item) => item.id === lang.id) && (
              <Box>
                <Button
                  padding={2}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the button click from triggering the card's click handler
                    handleDefaultSetting(lang);
                  }}
                  mode={
                    currentDefaultLanguage === lang.id ? "default" : "ghost"
                  }
                  tone="primary"
                >
                  {currentDefaultLanguage === lang.id
                    ? "Default"
                    : "Set as Default"}
                </Button>
              </Box>
            )}
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

// Helper function to determine the new default language
const getNewDefaultLanguage = (
  updatedLanguages: Language[],
  currentDefault: string | null,
  deselectedLang: Language,
): string | null => {
  if (updatedLanguages.length === 1) {
    // If only one language remains, set it as the default
    return updatedLanguages[0].id;
  }

  if (currentDefault === deselectedLang.id) {
    // Find a new default language if the current default is deselected
    const newDefaultLang = supportedLanguages.find((lang) =>
      updatedLanguages.some((item) => item.id === lang.id),
    );
    return newDefaultLang?.id || null;
  }

  return currentDefault;
};

export default LanguageSelector;
