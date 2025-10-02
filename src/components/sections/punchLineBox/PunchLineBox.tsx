"use client";
import { useEffect, useState } from "react";

import { PunchLineBoxSection } from "studio/lib/interfaces/pages";

export interface PunchLineBoxProps {
  section: PunchLineBoxSection;
  language: string;
}

export default function PunchLineBox({ section }: PunchLineBoxProps) {
  console.log(section);
  const randomSentence = usePickPeriodicallyRandomSentence(section.sentences);
  return <div>{randomSentence.mainPunchLine}</div>;
}

function usePickPeriodicallyRandomSentence(
  sentences: PunchLineBoxSection["sentences"],
  intervalInSeconds: number = 10,
) {
  const [randomSentence, setRandomSentence] = useState<
    PunchLineBoxSection["sentences"][number]
  >(pickRandomSentence(sentences));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomSentence(pickRandomSentence(sentences));
    }, intervalInSeconds * 1000);

    return () => clearInterval(intervalId);
  }, [sentences, intervalInSeconds]);

  return randomSentence;
}

function pickRandomSentence(sentences: PunchLineBoxSection["sentences"]) {
  return sentences[Math.floor(Math.random() * sentences.length)];
}
