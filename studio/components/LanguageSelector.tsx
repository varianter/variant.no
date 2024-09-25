import { Box, Button, Card, Checkbox, Flex, useTheme } from "@sanity/ui";
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
  const themeType = prefersDark ? "dark" : "light";

  // Find current default language
  const currentDefaultLanguage = value.find((lang) => lang.default)?.id || null;

  const handleLanguageSelection = (lang: Language, isSelected: boolean) => {
    let updatedValue: Language[];

    if (isSelected) {
      // Deselect the language
      updatedValue = value.filter((item) => item.id !== lang.id);

      // If the deselected language is the current default
      if (lang.id === currentDefaultLanguage) {
        // Find the index of the deselected language in supportedLanguages
        const indexInSupported = supportedLanguages.findIndex(
          (language) => language.id === lang.id,
        );

        // Get the next selected language in the supportedLanguages order
        const nextDefaultLanguage =
          supportedLanguages
            .slice(indexInSupported + 1) // Get languages after the deselected one
            .find((language) =>
              updatedValue.some((item) => item.id === language.id),
            ) || updatedValue[0]; // Fallback to the first selected language if none found

        // Set the new default if there's a next selected language
        updatedValue = updatedValue.map((item) => ({
          ...item,
          default: item.id === nextDefaultLanguage.id,
        }));
      }
    } else {
      // Add the newly selected language without making it default
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

  return (
    <Flex direction="column" gap={3}>
      {supportedLanguages.map((lang) => {
        const isSelected = value.some((item) => item.id === lang.id);
        const backgroundColor = isSelected
          ? colorMap[themeType].selected
          : colorMap[themeType].default;

        return (
          <label htmlFor={lang.id} key={lang.id}>
            <Card
              padding={4}
              radius={2}
              shadow={1}
              style={{ cursor: "pointer", backgroundColor }}
            >
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Checkbox
                    id={lang.id}
                    checked={isSelected}
                    onClick={() => {
                      handleLanguageSelection(lang, isSelected);
                    }}
                    disabled={isSelected && value.length === 1}
                  />
                  <Box flex={1} paddingLeft={3}>
                    {lang.icon} {lang.title}
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
          </label>
        );
      })}
    </Flex>
  );
};

export default LanguageSelector;
