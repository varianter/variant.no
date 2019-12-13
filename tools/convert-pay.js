#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const content = fs
  .readFileSync(path.join(__dirname, "..", "..", "payscale", "tekna2019.txt"))
  .toString()
  .split("\n")
  .slice(1);

let data = {};
for (let row of content) {
  const splitted = row.split("\t");
  data[splitted[0]] = splitted[splitted.length - 1].trim().replace(/\s*/g, "");
}

const generatedCode = `
let getPay = (function () {
  const data = ${JSON.stringify(data)};
  return function getPay (year, degree) {
    let calcYear = year + 5 - degree;
    return data[calcYear];
  }
})();
`;

console.log("Generating pay file");
fs.writeFileSync(path.join(__dirname, "..", "assets", "pay.js"), generatedCode);
