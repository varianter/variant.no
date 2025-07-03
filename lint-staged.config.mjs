import path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --no-cache --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

export default {
  "*.[tj]s?(x)": [buildEslintCommand],
  "**/*": "prettier --write --ignore-unknown",
};
