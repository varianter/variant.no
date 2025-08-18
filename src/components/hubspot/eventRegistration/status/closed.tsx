import React from "react";

import Text from "src/components/text/Text";

import StatusTemplate from "./statusTemplate/statusTemplate";

export default function Closed() {
  return (
    <StatusTemplate
      imgSrc="/_assets/sad-box.svg"
      imgAlt="Påmelding lukket"
      title="Påmelding lukket"
    >
      <Text type="bodyBig">
        Dette arrangementet er over og det er derfor ikke mulig å melde seg på.
        Håper vi ser deg på neste arrangement!
      </Text>
      <Text type="bodyBig">
        Ta gjerne en kikk på våre andre <a href="/events">arrangementer</a>.
      </Text>
    </StatusTemplate>
  );
}
