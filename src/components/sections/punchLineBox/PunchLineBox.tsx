import { PunchLineBoxSection } from "studio/lib/interfaces/pages";

export interface PunchLineBoxProps {
  section: PunchLineBoxSection;
  language: string;
}

export default function PunchLineBox({ section }: PunchLineBoxProps) {
  return <div>{section.mainPunchLine}</div>;
}
