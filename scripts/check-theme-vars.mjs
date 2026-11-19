/**
 * Theme variable contract — run by CI as `npm run check:themes`.
 * Adapted from mars-workbench@3f741cc scripts/check-theme-vars.mjs: the site
 * has no daisyUI, and its themes are listed here until a theme toggle gives
 * them a home in src/ (mars-workbench keeps them in src/utils/theme.ts).
 *
 * Every theme declares the same set of CSS custom properties in
 * src/app/globals.css, in its `[data-theme='…']` block. The dark default (the
 * block that applies when the page sets no theme and the system is dark) is
 * held to the same contract as the theme it stands for.
 */
import {readFileSync} from 'node:fs';

const CSS_PATH = 'src/app/globals.css';

const themes = ['paper', 'ink'];

/** The selector of the system-dark default, and the theme it stands for. */
const DARK_DEFAULT = {selector: ':root:not([data-theme])', theme: 'ink'};

const stripComments = text => text.replace(/\/\*[\s\S]*?\*\//g, '');
const stripStrings = text => text.replace(/(["'])(?:\\.|(?!\1).)*\1/g, '""');

/** Every `{…}` block as {selector, body}, ignoring braces in comments and strings. */
const parseBlocks = css => {
  const blocks = [];
  const stack = [];
  let segmentStart = 0;
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    if (char === '/' && css[i + 1] === '*') {
      i = css.indexOf('*/', i + 2) + 1;
      continue;
    }
    if (char === '"' || char === "'") {
      let j = i + 1;
      while (j < css.length && css[j] !== char) j += css[j] === '\\' ? 2 : 1;
      i = j;
      continue;
    }
    if (char === '{') {
      stack.push({selector: css.slice(segmentStart, i), open: i});
      segmentStart = i + 1;
    } else if (char === '}') {
      const {selector, open} = stack.pop();
      blocks.push({
        selector: stripComments(selector).trim(),
        body: css.slice(open + 1, i),
      });
      segmentStart = i + 1;
    } else if (char === ';') {
      segmentStart = i + 1;
    }
  }
  return blocks;
};

const THEME_SCOPE = /^\[data-theme=(['"]?)([\w-]+)\1\]$/;

/** The theme a selector list declares, or null. */
const themeOf = selector => {
  for (const part of selector.split(',').map(item => item.trim())) {
    if (part === DARK_DEFAULT.selector)
      return `${DARK_DEFAULT.theme} (dark default)`;
    const theme = part.match(THEME_SCOPE)?.[2];
    if (theme) return theme;
  }
  return null;
};

/** theme name → Set of custom properties it declares */
const declared = new Map();
for (const {selector, body} of parseBlocks(readFileSync(CSS_PATH, 'utf8'))) {
  const theme = themeOf(selector);
  if (!theme) continue;

  const properties = declared.get(theme) ?? new Set();
  const declarations = stripStrings(stripComments(body)).matchAll(
    /(--[\w-]+)\s*:/g,
  );
  for (const [, property] of declarations) properties.add(property);
  declared.set(theme, properties);
}

const problems = [];
for (const theme of themes) {
  if (!declared.has(theme)) {
    problems.push(`${theme}: listed in this script but has no block`);
  }
}
for (const theme of declared.keys()) {
  if (!themes.includes(theme) && !theme.endsWith('(dark default)')) {
    problems.push(`${theme}: has a block but is not listed in this script`);
  }
}

const contract = new Set([...declared.values()].flatMap(set => [...set]));
for (const [theme, properties] of declared) {
  const missing = [...contract].filter(property => !properties.has(property));
  if (missing.length > 0) {
    problems.push(`${theme} is missing ${missing.join(', ')}`);
  }
}

if (problems.length > 0) {
  console.error('Theme variable contract broken — every theme must declare');
  console.error('the same custom properties (src/app/globals.css):');
  for (const problem of problems) console.error(`  • ${problem}`);
  process.exit(1);
}

console.log(
  `Theme variable contract OK: ${themes.length} themes (${themes.join(', ')}) declare the same ${contract.size} variables.`,
);
