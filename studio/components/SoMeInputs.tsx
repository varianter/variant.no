import React from "react";
import { ObjectInputProps, set } from "sanity";
import { Box, TextInput, Select, Stack, Label } from "@sanity/ui";

export const SoMePlatforms: { [key: string]: string } = {
  facebook: "Facebook",
  x: "X",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  snapchat: "Snapchat",
  pinterest: "Pinterest",
  medium: "Medium",
  tikTok: "Tiktok",
};

const detectPlatformFromUrl = (url: string): string | null => {
  for (const key in SoMePlatforms) {
    if (url.includes(key)) {
      return SoMePlatforms[key];
    }
  }
  return null;
};

const SoMeInputs: React.FC<ObjectInputProps<Record<string, any>>> = ({
  value = {},
  onChange,
}) => {
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    const newUrl = event.target.value;
    onChange(set(newUrl, ["url"]));
    const detectedPlatform = detectPlatformFromUrl(newUrl);
    if (detectedPlatform !== null) {
      onChange(set(detectedPlatform, ["platform"]));
    }
  };

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (!onChange) return;
    const newPlatform = event.target.value;
    onChange(set(newPlatform, ["platform"]));
  };

  const urlInputName = "social-url-input";
  const platformInputName = "social-platform-input";

  return (
    <Stack space={6}>
      <Box>
        <Stack space={3}>
          <Label htmlFor={urlInputName} as={"label"}>
            URL
          </Label>
          <TextInput
            id={urlInputName}
            name={urlInputName}
            value={value.url}
            onChange={handleUrlChange}
            placeholder="Enter URL"
          />
        </Stack>
      </Box>
      <Box>
        <Stack space={3}>
          <Label htmlFor={platformInputName} as={"label"}>
            Platform
          </Label>
          <Select
            id={platformInputName}
            name={platformInputName}
            value={value.platform}
            onChange={handlePlatformChange}
          >
            <option value="">Select Platform</option>
            {Object.values(SoMePlatforms).map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Select>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SoMeInputs;
