import { PunchLineBoxSection } from "studio/lib/interfaces/pages";

export function pickRandomSentence(
  sentences: PunchLineBoxSection["sentences"],
): [PunchLineBoxSection["sentences"][number], number] {
  const key = Math.floor(Math.random() * sentences.length);
  return [sentences[key], key];
}
