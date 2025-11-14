import {
  Box,
  Button,
  Card,
  Flex,
  Spinner,
  Text,
  ThemeProvider,
} from "@sanity/ui";
import { useEffect, useRef, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import type { SanityDocument } from "sanity";

import resolveProductionUrl from "studio/presentation/resolve";

/**
 * The props Sanity passes to a custom document view component.
 */
interface PreviewIFrameProps {
  document: {
    displayed?: SanityDocument;
  };
}

export function PreviewIFrame({ document }: PreviewIFrameProps) {
  const [iframeKey, setIframeKey] = useState(1);
  const [displayUrl, setDisplayUrl] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const displayedDoc = document.displayed;

  function handleReload() {
    if (!iframeRef.current) return;
    setIframeKey((prev) => prev + 1);
  }

  useEffect(() => {
    if (!displayedDoc) return;

    const url = resolveProductionUrl(displayedDoc) ?? "";
    setDisplayUrl(url);
  }, [displayedDoc]);

  if (!displayUrl) {
    return (
      <ThemeProvider>
        <Flex padding={5} align="center" justify="center">
          <Spinner />
        </Flex>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Flex direction="column" style={{ height: "100%" }}>
        <Card padding={2} borderBottom>
          <Flex align="center" gap={2}>
            <Box flex={1}>
              <Text size={0} textOverflow="ellipsis">
                {displayUrl}
              </Text>
            </Box>
            <Flex align="center" gap={1}>
              <Button
                fontSize={[1]}
                padding={2}
                icon={AiOutlineReload}
                title="Reload"
                text="Reload"
                aria-label="Reload"
                onClick={handleReload}
              />
            </Flex>
          </Flex>
        </Card>

        <Card tone="transparent" padding={0} style={{ height: "100%" }}>
          <Flex align="center" justify="center" style={{ height: "100%" }}>
            <iframe
              key={iframeKey}
              ref={iframeRef}
              title="preview"
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                maxHeight: "100%",
              }}
              src={displayUrl}
              referrerPolicy="origin-when-cross-origin"
            />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  );
}
