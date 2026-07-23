import { readFileSync } from "node:fs";
import { join } from "node:path";

import postcss from "postcss";

const sourceRoot = new URL("../src/", import.meta.url);
const entryCss = readFileSync(new URL("theme.css", sourceRoot), "utf8");
const imports = [...entryCss.matchAll(/@import "\.\/(.+?)";/g)].map((match) => match[1]);

function contextOf(node) {
  const parts = [];

  for (let parent = node.parent; parent; parent = parent.parent) {
    if (parent.type === "atrule") {
      parts.unshift(`@${parent.name} ${parent.params}`);
    }
  }

  return parts.join(" > ");
}

const latestDeclaration = new Map();
let hasFailures = false;

for (const filePath of imports) {
  const fullPath = new URL(join(".", filePath), sourceRoot);
  const root = postcss.parse(readFileSync(fullPath, "utf8"), { from: filePath });

  root.walkDecls((declaration) => {
    if (!declaration.parent?.selector) return;

    const key = JSON.stringify([
      contextOf(declaration),
      declaration.parent.selector,
      declaration.prop,
    ]);
    const previous = latestDeclaration.get(key);

    if (previous) {
      console.error(
        [
          `${previous.file}:${previous.line}: overridden by exact selector/property later in cascade`,
          `${filePath}:${declaration.source.start.line}: ${declaration.parent.selector} { ${declaration.prop}: ${declaration.value}; }`,
        ].join("\n")
      );
      hasFailures = true;
    }

    latestDeclaration.set(key, {
      file: filePath,
      line: declaration.source.start.line,
    });
  });
}

if (hasFailures) {
  process.exitCode = 1;
}
