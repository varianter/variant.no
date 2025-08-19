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

  return (
    <StatusTemplate
      imgSrc="/_assets/box-happy.svg"
      imgAlt={t("successTitle")}
      title={t("eventRegistration.registrationComplete.title")}
    >
      <Text type="bodyBig">
        {t("eventRegistration.registrationComplete.successMessage")} {name}!{" "}
        {t("eventRegistration.registrationComplete.emailConfirmation")}
      </Text>
      <Text type="bodyBig">
        {t("eventRegistration.registrationComplete.registerAnother")}
        <button onClick={onClick}>
          {t("eventRegistration.registrationComplete.linkText")}
        </button>
        {t("eventRegistration.registrationComplete.unsubscribeNote")}
      </Text>
    </StatusTemplate>
  );
}
