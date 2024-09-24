import { Box, Button, Card, Checkbox, Flex, Text, useTheme } from "@sanity/ui";
import React from "react";
import { ArrayOfObjectsInputProps, PatchEvent, set } from "sanity";

import {
  Language,
  supportedLanguages,
} from "internationalization/supportedLanguages";

const colorMap = {
  dark: {
    selected: "#29356a",
    default: "rgba(19, 20, 27, 0.5)",
  },
  light: {
    selected: "#E3F2FD",
    default: "white",
  },
};

const LanguageSelector = ({
  value = [],
  onChange,
}: ArrayOfObjectsInputProps<Language>) => {
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;

  // Get the currently set default language
  const currentDefaultLanguage = value.find((lang) => lang.default)?.id || null;

  const handleLanguageSelection = (lang: Language) => {
    const isSelected = value.some((item) => item.id === lang.id);
    // Prevent deselecting the last remaining language
    if (isSelected && value.length === 1) {
      return; // Exit early if there's only one language selected
    }

    const updatedValue = isSelected
      ? value.filter((item) => item.id !== lang.id) // Deselect language
      : [...value, { ...lang, default: false }]; // Select language

    const newDefaultLanguage = getNewDefaultLanguage(
      updatedValue,
      currentDefaultLanguage,
      lang,
    );

    const finalValue = updatedValue.map((item) => ({
      ...item,
      default: item.id === newDefaultLanguage,
    }));

    onChange(PatchEvent.from(set(finalValue)));
  };

  const handleDefaultSetting = (lang: Language) => {
    const updatedValue = value.map((item) => ({
      ...item,
      default: item.id === lang.id, // Set selected language as default
    }));
    onChange(PatchEvent.from(set(updatedValue)));
  };

  const getBackgroundColor = (lang: Language) => {
    const isSelected = value.some((item) => item.id === lang.id);
    const theme = prefersDark ? "dark" : "light";

    return isSelected ? colorMap[theme].selected : colorMap[theme].default;
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
            backgroundColor: getBackgroundColor(lang),
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
                    e.stopPropagation(); // Prevent triggering card's click handler
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
    return updatedLanguages[0].id;
  }

  if (currentDefault === deselectedLang.id) {
    // Find a new default language if the current default is deselected
    return (
      supportedLanguages.find((lang) =>
        updatedLanguages.some((item) => item.id === lang.id),
      )?.id || null
    );
  }

  return currentDefault; // Return existing default
};

export default LanguageSelector;
