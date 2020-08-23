import { promises as fs } from 'fs';
import path from 'path';
import { EmployeeJSON } from './typings/Employee';
import Jimp from 'jimp';
// Temp comment to retrigger deployemtn
const employeeDirectory = path.join(process.cwd(), 'public/employees');

export const handleImages = async (employee: EmployeeJSON) => {
  // Check if images exsist already
  const userFileName = toFileName(employee.name);
  try {
    await fs.stat(path.join(employeeDirectory, `${userFileName}-150.jpg`));
    // if Stat is not throwing and error we have a file.
    // and return fileName in finally block
  } catch (e) {
    try {
      await downloadAndStore(userFileName, employeeDirectory, employee.image);
    } catch (er) {
      console.error(er);
    }
  } finally {
    return userFileName;
  }
};

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
  image: any,
) => Promise<void> = async (fileName: string, dirPath: string, image: any) => {
  try {
    const request = await fetch(image.large.url);
    const buffer = Buffer.from(await request.arrayBuffer());
    await Promise.all([
      Jimp.read(buffer).then((image) =>
        image
          .cover(300, 300)
          .quality(100)
          .writeAsync(path.join(dirPath, `${fileName}-300.jpg`)),
      ),
      Jimp.read(buffer).then((image) =>
        image
          .cover(150, 150)
          .quality(100)
          .writeAsync(path.join(dirPath, `${fileName}-150.jpg`)),
      ),
    ]);
  } catch (err) {
    console.error(err);
  }
};
