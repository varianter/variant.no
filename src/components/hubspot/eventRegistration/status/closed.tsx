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
      imgAlt="Påmelding lukket"
      title={t("eventRegistration.closed.title")}
    >
      <Text type="bodyBig">{t("eventRegistration.closed.message")}</Text>
      <Text type="bodyBig">
        {t("eventRegistration.closed.otherEventText")}
        <a href="/events"> {t("eventRegistration.closed.events")}</a>.
      </Text>
    </StatusTemplate>
  );
}
