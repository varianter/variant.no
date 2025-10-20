import Link from "next/link";
import React from "react";

import Text from "src/components/text/Text";
import { useTranslation } from "src/utils/hooks/useTranslation";

import StatusTemplate from "./statusTemplate/statusTemplate";

interface RegistrationCompleteProps {
  name: string;
  onClick?: () => void;
  language?: "en" | "no";
}

export default function RegistrationComplete({
  name,
  onClick,
  language,
}: RegistrationCompleteProps) {
  const lang = language || "no";
  const { t } = useTranslation(lang);
  const textType = "lead";

  return (
    <StatusTemplate
      imgSrc="/_assets/box-happy.svg"
      imgAlt={t("eventRegistration.registrationComplete.imgAlt")}
      title={t("eventRegistration.registrationComplete.title")}
    >
      <Text type={textType}>
        {t("eventRegistration.registrationComplete.successMessage")} {name}!{" "}
        {t("eventRegistration.registrationComplete.emailConfirmation")}
      </Text>
      <Text type={textType}>
        {t("eventRegistration.registrationComplete.registerAnother")}
        <button onClick={onClick}>
          {t("eventRegistration.registrationComplete.linkText")}
        </button>
      </Text>
      <Text type={textType}>
        {t("eventRegistration.registrationComplete.unsubscribeNote")}{" "}
        <Link href={t("eventRegistration.terms.link.url")}>
          {t("eventRegistration.terms.link.text")}
        </Link>{" "}
        {t("eventRegistration.registrationComplete.forEvent")}
      </Text>
    </StatusTemplate>
  );
}
