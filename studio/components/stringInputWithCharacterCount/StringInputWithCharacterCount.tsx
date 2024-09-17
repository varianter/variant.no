"use client";
import { Box, Stack, Text } from "@sanity/ui";
import { StringInputProps } from "sanity";

import styles from "./stringInputWithCharacterCount.module.css";

type StringInputWithCharacterCountProps = StringInputProps & {
  maxCount: number;
};

const SR_COUNT_HINT_ID = "string-input-with-character-count-input-info";

export const StringInputWithCharacterCount = ({
  maxCount,
  ...defaultProps
}: StringInputWithCharacterCountProps) => {
  const characterCount = defaultProps.value?.length ?? 0;
  const charactersLeft = maxCount - characterCount;
  const isOverLimit = charactersLeft < 0;
  const countText = `${Math.abs(charactersLeft)} character${charactersLeft !== 1 ? "s" : ""} ${isOverLimit ? "over limit" : charactersLeft === maxCount ? "allowed" : "left"}`;

  return (
    <Stack space={3}>
      <Box>
        {defaultProps.renderDefault({
          ...defaultProps,
          elementProps: {
            ...defaultProps.elementProps,
            "aria-describedby": `${defaultProps.elementProps["aria-describedby"]} ${SR_COUNT_HINT_ID}`,
          },
        })}
      </Box>
      <span id={SR_COUNT_HINT_ID} className={styles.srOnly}>
        {`You can enter up to ${maxCount} character${charactersLeft !== 1 ? "s" : ""}`}
      </span>
      <Text
        size={1}
        muted
        className={isOverLimit ? styles.overLimit : ""}
        aria-live={"polite"}
      >
        {countText}
      </Text>
    </Stack>
  );
};
