import Link from "next/link";
import React from "react";

import Text from "src/components/text/Text";
import { useTranslation } from "src/utils/hooks/useTranslation";

import StatusTemplate from "./statusTemplate/statusTemplate";

interface ClosedProps {
  language?: "en" | "no";
}

export default function Closed({ language }: ClosedProps) {
  const lang = language || "no";
  const { t } = useTranslation(lang);

  return (
    <StatusTemplate
      imgSrc="/_assets/box-sad.svg"
      imgAlt={t("eventRegistration.closed.imgAlt")}
      title={t("eventRegistration.closed.title")}
    >
      <Text type="bodyBig">{t("eventRegistration.closed.message")}</Text>
      <Text type="bodyBig">
        {t("eventRegistration.closed.otherEventText")}
        <Link href="/events"> {t("eventRegistration.closed.events")}</Link>.
      </Text>
    </StatusTemplate>
  );
}
