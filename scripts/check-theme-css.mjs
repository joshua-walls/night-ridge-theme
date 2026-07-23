import { readdirSync, readFileSync, statSync } from "node:fs";
import { relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const sourceRoot = fileURLToPath(new URL("../src", import.meta.url));
const bannedPatterns = [
  { label: "!important", pattern: /!important/ },
  { label: ":has(", pattern: /:has\(/ },
];

let hasFailures = false;

function collectCssFiles(directory) {
  const files = [];

  for (const entry of readdirSync(directory)) {
    const filePath = `${directory}/${entry}`;
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      files.push(...collectCssFiles(filePath));
    } else if (entry.endsWith(".css")) {
      files.push(filePath);
    }
  }

  return files;
}

for (const filePath of [
  fileURLToPath(new URL("../theme.css", import.meta.url)),
  ...collectCssFiles(sourceRoot),
]) {
  const css = readFileSync(filePath, "utf8");
  const displayPath = relative(projectRoot, filePath);

  for (const [index, line] of css.split(/\r?\n/).entries()) {
    for (const { label, pattern } of bannedPatterns) {
      if (pattern.test(line)) {
        console.error(`${displayPath}:${index + 1}: banned CSS pattern: ${label}`);
        hasFailures = true;
      }
    }
  }
}

if (hasFailures) {
  process.exitCode = 1;
}
