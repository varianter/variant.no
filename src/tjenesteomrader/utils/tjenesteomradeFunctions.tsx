import matter from 'gray-matter';
import {
  TjenesteomradeMetadata,
  TjenesteomradeProps,
} from './tjenesteomradeTypes';
import * as fs from 'fs';
import markdownit from 'markdown-it/lib';

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
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(matterFile.content);
  return {
    ...matterData,
    fileContents: html,
  };
};
