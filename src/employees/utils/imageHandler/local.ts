import { promises as fs, createWriteStream } from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import { ApiEmployee } from 'src/employees/types';

// Temp comment to retrigger deployemtn
const employeeDirectory = path.join(process.cwd(), 'public/employees');

export default async (employee: ApiEmployee, _regenerate: boolean = false) => {
  // Check if images exsist already
  const userFileName = toFileName(employee.name);

  // Create destination folder if it doesnt exist
  await mkdirp(employeeDirectory);

  try {
    await fs.stat(path.join(employeeDirectory, `${userFileName}.png`));
    // if Stat is not throwing and error we have a file.
    // and return fileName in finally block
  } catch (e) {
    try {
      await downloadAndStore(userFileName, employeeDirectory, employee.image);
    } catch (er) {
      console.error(er);
    }
  } finally {
    return `/employees/${userFileName}.png`;
  }
};

export async function deleteAll() {}

const toFileName = (name: string): string => {
  // Could be unstable when string is large
  const baseString = name.trimStart().replace(' ', '-');
  let hash = 0,
    i,
    chr;
  for (i = 0; i < baseString.length; i++) {
    chr = baseString.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
};

const downloadAndStore: (
  path: string,
  dir: string,
  image: ApiEmployee['image'],
) => Promise<void> = async (fileName, dirPath, image) => {
  const request = await fetch(image.fit_thumb.url);
  const buffer = Buffer.from(await request.arrayBuffer());
  const outputFileName = `${fileName}.png`;
  return new Promise<void>((resolve) => {
    let stream = createWriteStream(path.join(dirPath, outputFileName));
    stream.on('finish', resolve);
    stream.write(buffer);
    stream.end();
  });
};
