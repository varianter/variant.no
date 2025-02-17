"use client";

import { useTranslations } from "next-intl";
import Text from "src/components/text/Text";

export default function EventsHeader({ locale }: { locale: string }) {
  const t = useTranslations("event_section");

  return <Text type="h1">{t("all_events")}</Text>;
}
