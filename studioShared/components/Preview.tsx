import {
  Box,
  Button,
  Card,
  Flex,
  Select,
  Spinner,
  Text,
  ThemeProvider,
} from "@sanity/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import type { SanityDocument } from "sanity";

import {
  previewDomains,
  previewLocales,
  resolveCustomerCaseUrl,
} from "studioShared/presentation/resolve";
import type {
  PreviewDomain,
  PreviewLocale,
} from "studioShared/presentation/resolve";

interface PreviewIFrameProps {
  document: {
    displayed?: SanityDocument;
  };
}

function getDocumentDomains(document?: SanityDocument): PreviewDomain[] {
  if (!Array.isArray(document?.domains)) return ["variant.no"];

  const domains = document.domains.filter((domain): domain is PreviewDomain =>
    previewDomains.includes(domain),
  );

  return domains.length > 0 ? domains : ["variant.no"];
}

function getDocumentLocales(document?: SanityDocument): PreviewLocale[] {
  if (!Array.isArray(document?.slug)) return ["no"];

  const locales = document.slug
    .map((item) => (typeof item === "object" && item ? item._key : undefined))
    .filter((locale): locale is PreviewLocale =>
      previewLocales.includes(locale as PreviewLocale),
    );

  return locales.length > 0 ? locales : ["no"];
}

export function PreviewIFrame({ document }: PreviewIFrameProps) {
  const [iframeKey, setIframeKey] = useState(1);
  const [displayUrl, setDisplayUrl] = useState("");
  const [selectedDomain, setSelectedDomain] =
    useState<PreviewDomain>("variant.no");
  const [selectedLocale, setSelectedLocale] = useState<PreviewLocale>("no");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const displayedDoc = document.displayed;
  const availableDomains = useMemo(
    () => getDocumentDomains(displayedDoc),
    [displayedDoc],
  );
  const availableLocales = useMemo(
    () => getDocumentLocales(displayedDoc),
    [displayedDoc],
  );
  const availableDomainsKey = availableDomains.join(",");
  const availableLocalesKey = availableLocales.join(",");

  useEffect(() => {
    const nextDomain = availableDomains[0] || "variant.no";
    if (!availableDomains.includes(selectedDomain)) {
      setSelectedDomain(nextDomain);
    }
  }, [availableDomains, availableDomainsKey, selectedDomain]);

  useEffect(() => {
    const nextLocale = availableLocales[0] || "no";
    if (!availableLocales.includes(selectedLocale)) {
      setSelectedLocale(nextLocale);
    }
  }, [availableLocales, availableLocalesKey, selectedLocale]);

  useEffect(() => {
    let cancelled = false;

    async function resolveUrl() {
      if (
        !displayedDoc ||
        !availableDomains.includes(selectedDomain) ||
        !availableLocales.includes(selectedLocale)
      ) {
        return;
      }

      const url = await resolveCustomerCaseUrl(
        displayedDoc,
        selectedDomain,
        selectedLocale,
      );
      if (!cancelled) setDisplayUrl(url);
    }

    setDisplayUrl("");
    void resolveUrl();

    return () => {
      cancelled = true;
    };
  }, [
    displayedDoc,
    selectedDomain,
    selectedLocale,
    availableDomains,
    availableLocales,
    availableDomainsKey,
    availableLocalesKey,
  ]);

  function handleReload() {
    if (!iframeRef.current) return;
    setIframeKey((previous) => previous + 1);
  }

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
            {availableLocales.length > 1 && (
              <Box>
                <Select
                  value={selectedLocale}
                  onChange={(event) =>
                    setSelectedLocale(
                      event.currentTarget.value as PreviewLocale,
                    )
                  }
                >
                  {availableLocales.map((locale) => (
                    <option key={locale} value={locale}>
                      {locale.toUpperCase()}
                    </option>
                  ))}
                </Select>
              </Box>
            )}
            {availableDomains.length > 1 && (
              <Box>
                <Select
                  value={selectedDomain}
                  onChange={(event) =>
                    setSelectedDomain(
                      event.currentTarget.value as PreviewDomain,
                    )
                  }
                >
                  {availableDomains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </Select>
              </Box>
            )}
            <Box flex={1}>
              <Text size={0} textOverflow="ellipsis">
                {displayUrl}
              </Text>
            </Box>
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
        </Card>

        <Card tone="transparent" padding={0} style={{ height: "100%" }}>
          <Flex align="center" justify="center" style={{ height: "100%" }}>
            <iframe
              key={iframeKey}
              ref={iframeRef}
              title="preview"
              style={{ width: "100%", height: "100%", border: 0 }}
              src={displayUrl}
              referrerPolicy="origin-when-cross-origin"
            />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  );
}
