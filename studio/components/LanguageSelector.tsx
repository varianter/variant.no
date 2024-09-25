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

const LanguageSelector = (props: ArrayOfObjectsInputProps<Language>) => {
  const { value = [], onChange } = props;
  const theme = useTheme();
  const prefersDark = theme.sanity.v2?.color._dark ?? false;
  const themeType = prefersDark ? "dark" : "light";
  const currentDefaultLanguage: string | null =
    value.find((lang) => lang.default)?.id || null;

  const getNextDefaultLanguage = (updatedValue: Language[], lang: Language) => {
    const indexInSupported = supportedLanguages.findIndex(
      (language) => language.id === lang.id,
    );
    return (
      supportedLanguages
        .slice(indexInSupported + 1)
        .find((language) =>
          updatedValue.some((item) => item.id === language.id),
        ) ||
      supportedLanguages.find((language) =>
        updatedValue.some((item) => item.id === language.id),
      )
    );
  };

  const handleLanguageSelection = (lang: Language, isSelected: boolean) => {
    if (isSelected && value.length === 1) return;

    let updatedValue = isSelected
      ? value.filter((item) => item.id !== lang.id)
      : [...value, { ...lang, default: false }];

    if (isSelected && lang.id === currentDefaultLanguage) {
      const nextDefaultLanguage = getNextDefaultLanguage(updatedValue, lang);
      updatedValue = updatedValue.map((item) => ({
        ...item,
        default: item.id === (nextDefaultLanguage?.id || null),
      }));
    }

    onChange(PatchEvent.from(set(updatedValue)));
  };

  const handleDefaultSetting = (lang: Language) => {
    const updatedValue = value.map((item) => ({
      ...item,
      default: item.id === lang.id,
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
                    onClick={() => handleLanguageSelection(lang, isSelected)}
                    aria-label={`Select ${lang.title}`}
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
                        e.stopPropagation();
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
