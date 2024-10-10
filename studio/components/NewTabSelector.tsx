"use client";

import { Box, Card, Flex, Grid, Stack, Text } from "@sanity/ui";
import React from "react";
import { PatchEvent, set } from "sanity";

interface NewTabSelectorProps {
  value?: boolean;
  onChange: (event: PatchEvent) => void;
}

const NewTabSelector = ({ value = false, onChange }: NewTabSelectorProps) => {
  const handleClick = (newValue: boolean) => {
    onChange(PatchEvent.from(set(newValue)));
  };

  return (
    <Stack space={3}>
      <Text size={1} weight="medium">
        Should this link open in a new tab?
      </Text>
      <Text size={1} muted>
        Enable this option to open the link in a new browser tab. This can be
        useful for keeping the current page open.
      </Text>
      <Grid columns={2} gap={3}>
        <Card
          padding={3}
          radius={2}
          shadow={1}
          style={{
            cursor: "pointer",
            backgroundColor: value === true ? "#E3F2FD" : "white",
          }}
          onClick={() => handleClick(true)}
        >
          <Flex align="center">
            <Box marginRight={3}>✅</Box>
            <Text>Yes</Text>
          </Flex>
        </Card>
        <Card
          padding={3}
          radius={2}
          shadow={1}
          style={{
            cursor: "pointer",
            backgroundColor: value === false ? "#E3F2FD" : "white",
          }}
          onClick={() => handleClick(false)}
        >
          <Flex align="center">
            <Box marginRight={3}>❌</Box>
            <Text>No</Text>
          </Flex>
        </Card>
      </Grid>
    </Stack>
  );
};

export default NewTabSelector;
