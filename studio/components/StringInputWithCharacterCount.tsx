import { Box, Stack, Text } from "@sanity/ui";
import { StringInputProps } from "sanity";

type StringInputWithCharacterCountProps = StringInputProps & {
  maxCount?: number;
};

export const StringInputWithCharacterCount = ({
  maxCount,
  ...defaultProps
}: StringInputWithCharacterCountProps) => {
  const characterCount = defaultProps.value?.length ?? 0;
  const isPlural =
    (maxCount !== undefined && maxCount !== 1) ||
    (maxCount === undefined && characterCount !== 1);

  return (
    <Stack space={3}>
      <Box>{defaultProps.renderDefault(defaultProps)}</Box>
      <Text size={1} muted>
        {characterCount}
        {maxCount && `/${maxCount}`} character{isPlural ? "s" : ""}
      </Text>
    </Stack>
  );
};
