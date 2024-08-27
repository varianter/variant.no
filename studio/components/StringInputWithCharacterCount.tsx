import { Box, Stack, Text } from "@sanity/ui";
import { StringInputProps } from "sanity";

export const StringInputWithCharacterCount = (props: StringInputProps) => {
  const characterCount = props.value?.length ?? 0;

  return (
    <Stack space={3}>
      <Box>{props.renderDefault(props)}</Box>
      <Text size={1} muted>
        {characterCount} characters
      </Text>
    </Stack>
  );
};
