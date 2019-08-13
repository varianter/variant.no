const copy = require("recursive-copy");
const fs = require("fs");
const path = require("path");

const rel = (...args) => path.join(__dirname, ...args);

async function start() {
  await copy(rel(".."), rel("../dist"), {
    filter: ["*.html", "*.css", "*.xml", "assets/**", "kalkulator/**", "utvikler/**", "london/**"],
    overwrite: true
  });
}

start()
  .then(console.log)
  .catch(console.error);
