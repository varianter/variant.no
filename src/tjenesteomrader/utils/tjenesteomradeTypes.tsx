export const tjenesteomradePath = [
  'datadriv',
  'strategi',
  'digitalTjeneste',
  'kultur',
] as const;

export type TjenesteomradeProps = {
  fileContents: string;
} & TjenesteomradeMetadata;

export type TjenesteomradeMetadata = {
  name: typeof tjenesteomradePath[number];
  color: string;
};
