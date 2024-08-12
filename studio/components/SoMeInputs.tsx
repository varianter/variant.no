import React, { useEffect, useState } from "react";
import { ObjectInputProps, PatchEvent, set } from "sanity";
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

const SoMeInputs: React.FC<ObjectInputProps<Record<string, any>>> = ({
  value = {},
  onChange,
}) => {
  const [url, setUrl] = useState(value.url || "");
  const [platform, setPlatform] = useState(value.platform || "");

  useEffect(() => {
    let detectedPlatform = "";
    for (const key in SoMePlatforms) {
      if (url.includes(key)) {
        detectedPlatform = SoMePlatforms[key];
        break;
      }
    }
    setPlatform(detectedPlatform);
    if (onChange) {
      onChange(
        PatchEvent.from([set({ ...value, url, platform: detectedPlatform })])
      );
    }
  }, [url, onChange]);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
  };

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPlatform = event.target.value;
    setPlatform(newPlatform);
    if (onChange) {
      onChange(
        PatchEvent.from([set({ ...value, url, platform: newPlatform })])
      );
    }
  };

  return (
    <Stack space={6}>
      <Box>
        <Stack space={3}>
          <Label>URL</Label>
          <TextInput
            value={url}
            onChange={handleUrlChange}
            placeholder="Enter URL"
          />
        </Stack>
      </Box>
      <Box>
        <Stack space={3}>
          <Label>Platform</Label>
          <Select value={platform} onChange={handlePlatformChange}>
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
