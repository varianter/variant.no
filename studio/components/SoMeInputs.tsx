import { Box, Label, Select, Stack, TextInput } from "@sanity/ui";
import React from "react";
import { ObjectInputProps, set } from "sanity";

import { SocialMediaLink } from "studio/lib/interfaces/socialMedia";

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
  github: "GitHub",
  podcast: "Podcast",
  bluesky: "Bluesky",
};

const detectPlatformFromUrl = (url: string): string | null => {
  for (const key in SoMePlatforms) {
    if (url.includes(key)) {
      return SoMePlatforms[key];
    }
  }
  return null;
};

function isDraftSocialMediaLinkType(
  value: unknown,
): value is Partial<SocialMediaLink> {
  return (
    typeof value === "object" &&
    value !== null &&
    "_type" in value &&
    typeof value._type === "string" &&
    (!("url" in value) || typeof value.url === "string") &&
    (!("platform" in value) || typeof value.platform === "string")
  );
}

const SoMeInputs: React.FC<ObjectInputProps<Record<string, unknown>>> = ({
  value = {},
  onChange,
}) => {
  if (!isDraftSocialMediaLinkType(value)) {
    console.error("Unexpected value type for SoMeInputs");
    return;
  }

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
            URL, must include https
          </Label>
          <TextInput
            id={urlInputName}
            name={urlInputName}
            value={value && value.url}
            onChange={handleUrlChange}
            placeholder="Enter URL"
          />
        </Stack>
      </Box>
      <Box>
        <Stack space={3}>
          <Label htmlFor={platformInputName} as={"label"}>
            Platform (if you can not find the right platform for your link,
            please add the link to the Footer directly through the Navigation
            Manager)
          </Label>
          <Select
            id={platformInputName}
            name={platformInputName}
            value={value && value.platform}
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
