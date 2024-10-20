import * as fs from 'fs';
import matter from 'gray-matter';
import markdownit from 'markdown-it/lib';
import { getContactsByEmails } from 'src/employees/utils/getEmployeesList';
import {
  TjenesteomradeMetadata,
  TjenesteomradeProps,
} from './tjenesteomradeTypes';

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

  let contact;
  if (matterData.name == 'strategi') {
    contact = await getContactsByEmails(['te@variant.no']);
  }

  return {
    ...matterData,
    fileContents: html,
    contact: contact?.[0] ?? null,
  };
};
