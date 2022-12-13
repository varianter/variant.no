import matter from 'gray-matter';
import {
  TjenesteomradeMetadata,
  TjenesteomradeProps,
} from './tjenesteomradeTypes';
import * as fs from 'fs';

export const getMatterFile = async (filename: string) => {
  const file = await fs.readFileSync(
    `src/tjenesteomrader/pages/${filename}.md`,
  );

  return matter(file.toString());
};

export const getMarkdownObject = async (
  name: string,
): Promise<TjenesteomradeProps> => {
  const matterFile = await getMatterFile(name);
  const matterData = matterFile.data as TjenesteomradeMetadata;
  return {
    ...matterData,
    fileContents: matterFile.content,
  };
};
