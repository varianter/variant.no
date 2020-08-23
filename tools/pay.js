#!/usr/bin/env node

// This script requires access to the private repo with payscale in
// the same directory as this repo (in the same root). It is
// just a convenience script located here to convert from stats.
// The stats are private as they contain information which we do
// not have the rights to publish.
//
// Not an optimal solution, and at some point we might create
// an API, but this works well enough.
//
// When we get new stats, update the filename constant

const fs = require('fs');
const path = require('path');
const { exit } = require('process');

// Update this on new statistics.
const PAY_FILENAME = 'tekna2019.txt';
// Change this if location is changed
const DESTINATION = path.join(
  __dirname,
  '..',
  'src',
  'salary-calculator',
  'pay.json',
);

// Contents.

const source = path.join(__dirname, '..', '..', 'payscale', PAY_FILENAME);

try {
  fs.statSync(source);
} catch (e) {
  console.error(`Could not read ${source}. Do you need to clone it?`);
  console.log(`Try command:
    
  git clone https://github.com/varianter/payscale.git ../payscale
  
`);
  exit(1);
}

console.log(`Parsing and formatting ${source}`);
const content = fs
  .readFileSync(path.join(__dirname, '..', '..', 'payscale', 'tekna2019.txt'))
  .toString()
  .split('\n')
  .slice(1);

let data = {};
for (let row of content) {
  const splitted = row.split('\t');
  data[splitted[0]] = splitted[splitted.length - 1].trim().replace(/\s*/g, '');
}

console.log(`Generating pay file at ${DESTINATION}`);
fs.writeFileSync(DESTINATION, JSON.stringify(data));
