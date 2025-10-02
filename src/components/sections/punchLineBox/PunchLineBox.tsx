import Smiley from "src/components/smiley/Smiley";
import { fetchEmployeesByEmails } from "src/utils/employees";
import { PunchLineBoxSection } from "studio/lib/interfaces/pages";

import style from "./punchLineBox.module.css";
import PunchLineBoxClient from "./PunchLineBoxClient";
import { pickRandomSentence } from "./utils";

export interface PunchLineBoxProps {
  section: PunchLineBoxSection;
}

export default async function PunchLineBox({ section }: PunchLineBoxProps) {
  const contactPoints = await fetchEmployeesByEmails(
    section.sentences.map((sentence) => sentence.email),
  );

  if (!contactPoints.ok) {
    return null;
  }

  return (
    <article className={style.punchLineBox}>
      <Smiley smileyType="shock" smileySide="right" />
      <div className={style.content}>
        <PunchLineBoxClient
          section={section}
          initialSentence={pickRandomSentence(section.sentences)[0]}
          contactPoints={contactPoints.value}
        />
      </div>
    </article>
  );
}
