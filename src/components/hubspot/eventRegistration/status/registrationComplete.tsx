import React from "react";

import Text from "src/components/text/Text";

import StatusTemplate from "./statusTemplate/statusTemplate";

interface RegistrationCompleteProps {
  name: string;
  onClick?: () => void;
}

export default function RegistrationComplete({
  name,
  onClick,
}: RegistrationCompleteProps) {
  return (
    <StatusTemplate
      imgSrc="/_assets/box-happy.svg"
      imgAlt="Takk!"
      title="Takk!"
    >
      <Text type="bodyBig">
        Vi setter pris på din interesse {name}! Du vil motta en bekreftelse på
        epost.
      </Text>
      <Text type="bodyBig">
        Ønsker du å melde på flere?
        <button onClick={onClick}>Vis skjema</button> For avmelding se epost.
      </Text>
    </StatusTemplate>
  );
}
