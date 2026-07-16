import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../theme.css", import.meta.url), "utf8");
const bannedPatterns = [
  { label: "!important", pattern: /!important/ },
  { label: ":has(", pattern: /:has\(/ },
];

let hasFailures = false;

for (const [index, line] of css.split(/\r?\n/).entries()) {
  for (const { label, pattern } of bannedPatterns) {
    if (pattern.test(line)) {
      console.error(`theme.css:${index + 1}: banned CSS pattern: ${label}`);
      hasFailures = true;
    }
  }
}

if (hasFailures) {
  process.exitCode = 1;
}
