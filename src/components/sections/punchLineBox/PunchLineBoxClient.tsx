"use client";
import { Fragment, useEffect, useState } from "react";

import Text from "src/components/text/Text";
import { ChewbaccaEmployee } from "src/types/employees";
import { PunchLineBoxSection } from "studio/lib/interfaces/pages";

import { FadingText } from "./FadingText";
import style from "./punchLineBox.module.css";
import { RotatingText } from "./RotatingText";
import { pickRandomSentence } from "./utils";

export interface PunchLineBoxProps {
  section: PunchLineBoxSection;
  initialSentence: PunchLineBoxSection["sentences"][number];
  contactPoints: ChewbaccaEmployee[];
  intervalInSeconds?: number;
}

export default function PunchLineBoxClient({
  section,
  initialSentence,
  contactPoints,
  intervalInSeconds = 10,
}: PunchLineBoxProps) {
  const [randomSentence, key] = usePickPeriodicallyRandomSentence(
    section.sentences,
    initialSentence,
    intervalInSeconds,
  );
  return (
    <>
      <Text type="h2">
        <RotatingText
          animationKey={`${key}-title`}
          text={randomSentence.mainPunchLine}
        />
      </Text>
      <FadingText animationKey={`${key}-line`}>
        <ActionLineTemplate
          email={randomSentence.email}
          contactPoints={contactPoints}
        >
          {randomSentence.actionLine}
        </ActionLineTemplate>
      </FadingText>
    </>
  );
}

function ActionLineTemplate({
  children,
  email,
  contactPoints,
}: {
  children: string;
  email: string;
  contactPoints: ChewbaccaEmployee[];
}) {
  const contactPoint = contactPoints?.find((cp) => cp.email === email);
  const matches = children.matchAll(/([^\\[]*)(\[\[contact\]\])([^\\[]*)/gm);

  const newChildren = matches
    .map((match, i) => {
      return [
        <Fragment key={i + "-1"}>{match[1]}</Fragment>,
        !contactPoint ? (
          <Fragment key={i + "-2"}>Variant</Fragment>
        ) : (
          <a
            key={i + "-2"}
            href={`mailto:${contactPoint?.email}`}
            className={style.actionLink}
          >
            {contactPoint?.name}
          </a>
        ),
        <Fragment key={i + "-3"}>{match[3]}</Fragment>,
      ];
    })
    .toArray();
  return <Text type="bodyBig">{newChildren.flat()}</Text>;
}

function usePickPeriodicallyRandomSentence(
  sentences: PunchLineBoxSection["sentences"],
  initialSentence: PunchLineBoxSection["sentences"][number],
  intervalInSeconds: number = 10,
): [PunchLineBoxSection["sentences"][number], number] {
  const [randomSentence, setRandomSentence] =
    useState<PunchLineBoxSection["sentences"][number]>(initialSentence);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const [randomSentence, key] = pickRandomSentence(sentences);
      setRandomSentence(randomSentence);
      setKey(key);
    }, intervalInSeconds * 1000);

    return () => clearInterval(intervalId);
  }, [sentences, intervalInSeconds]);

  return [randomSentence, key];
}
