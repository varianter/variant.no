export function pickRandomSentence(
  sentences: PunchLineBoxSection["sentences"],
) {
  return sentences[Math.floor(Math.random() * sentences.length)];
}
