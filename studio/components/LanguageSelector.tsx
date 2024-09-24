import { Box, Button, Card, Checkbox, Flex, Text, useTheme } from "@sanity/ui";
import React, { useMemo } from "react";
import { PatchEvent, set } from "sanity";
import {
  Language,
  supportedLanguages,
} from "internationalization/supportedLanguages";

interface LanguageSelectorProps {
  value?: Language[];
  onChange: (event: PatchEvent) => void;
}

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

const LanguageSelector = ({ value = [], onChange }: LanguageSelectorProps) => {
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;
  const themeType = prefersDark ? "dark" : "light";

  // Find current default language
  const currentDefaultLanguage = value.find((lang) => lang.default)?.id || null;

  const handleLanguageSelection = (lang: Language) => {
    const isSelected = value.some((item) => item.id === lang.id);
    let updatedValue;

    if (isSelected) {
      // Deselect language
      updatedValue = value.filter((item) => item.id !== lang.id);

      // If deselecting the default language, assign a new default
      if (currentDefaultLanguage === lang.id && updatedValue.length > 0) {
        updatedValue[0] = { ...updatedValue[0], default: true }; // Set the first language as default
      }
    } else {
      // Add new language, without making it the default
      updatedValue = [...value, { ...lang, default: false }];
    }

    onChange(PatchEvent.from(set(updatedValue)));
  };

  const handleDefaultSetting = (lang: Language) => {
    const updatedValue = value.map((item) => ({
      ...item,
      default: item.id === lang.id, // Only one language can be the default
    }));
    onChange(PatchEvent.from(set(updatedValue)));
  };

  // Memoize value for performance and reusability
  const languageCards = useMemo(
    () =>
      supportedLanguages.map((lang) => {
        const isSelected = value.some((item) => item.id === lang.id);
        const backgroundColor = isSelected
          ? colorMap[themeType].selected
          : colorMap[themeType].default;

        return (
          <Card
            key={lang.id}
            padding={4}
            radius={2}
            shadow={1}
            style={{ cursor: "pointer", backgroundColor }}
            onClick={() => handleLanguageSelection(lang)}
          >
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Checkbox id={lang.id} checked={isSelected} readOnly />
                <Box flex={1} paddingLeft={3}>
                  <label htmlFor={lang.id}>
                    {lang.icon} {lang.title}
                  </label>
                </Box>
              </Flex>
              {isSelected && (
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
        );
      }),
    [value, currentDefaultLanguage, themeType]
  );

  return (
    <Flex direction="column" gap={3}>
      {languageCards}
    </Flex>
  );
};

export default LanguageSelector;
