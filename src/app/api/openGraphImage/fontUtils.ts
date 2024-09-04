import { readFile } from "fs/promises";
import { join } from "path";

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type FontStyle = "normal" | "italic";
interface FontOptions {
  data: Buffer | ArrayBuffer;
  name: string;
  weight?: Weight;
  style?: FontStyle;
  lang?: string;
}

function readFont(filename: string) {
  return readFile(join(process.cwd(), "public/fonts", filename));
}

export async function getFonts(): Promise<FontOptions[]> {
  return [
    {
      data: await readFont("graphik_regular.woff"),
      name: "Graphik",
      weight: 400,
      style: "normal",
    },
    {
      data: await readFont("graphik_medium.woff"),
      name: "Graphik",
      weight: 600,
      style: "normal",
    },
    {
      data: await readFont("recoleta.ttf"),
      name: "Recoleta",
      weight: 600,
      style: "normal",
    },
  ];
}
