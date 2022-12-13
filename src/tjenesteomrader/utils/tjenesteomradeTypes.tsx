export const tjenesteomradePath = [
  'datadriv',
  'strategi',
  'digitalTjeneste',
  'kultur',
] as const;

export type TjenesteomradeProp = {
  prop: TjenesteomradeProps;
};

export type TjenesteomradeProps = {
  fileContents: string;
} & TjenesteomradeMetadata;

export type TjenesteomradeMetadata = {
  name: string;
  color: string;
};
