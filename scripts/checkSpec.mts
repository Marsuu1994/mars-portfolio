// Adapted from mars-workbench@368bed5 scripts/checkSpec.ts: no legacy docs to
// compare with main, so every doc in design/specs is a spec v2 doc and needs
// no git history. Run by Node itself, which strips the types.

/**
 * `npm run check:spec` (CI): every item in a spec is held by a test whose
 * title names it, no title names an item that isn't there, and every doc in
 * design/specs has IDs (design/specs/README.md › Items and IDs).
 *
 * `npm run check:spec -- --list home` prints home.md's items, each with where
 * it stands and the tests holding it. In CI, every spec's list goes into the
 * job summary.
 */
import {appendFileSync, readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';
import {
  findDocsWithoutIds,
  findSpecProblems,
  formatSpecList,
  formatSpecTable,
  listSpecItems,
  parseSpecItems,
} from './specCoverage.mts';

const SPECS_DIR = 'design/specs';
const TEST_ROOTS = ['src', 'e2e', 'scripts', 'test'];
const TEST_FILE = /\.(test\.tsx?|spec\.ts)$/;
const LIST_FLAG = '--list';

const docs = readdirSync(SPECS_DIR)
  .filter(name => name.endsWith('.md') && name !== 'README.md')
  .map(name => ({name, markdown: readFileSync(join(SPECS_DIR, name), 'utf8')}));

const specs = docs.map(({name, markdown}) => ({
  path: join(SPECS_DIR, name),
  markdown,
}));

const testFiles = TEST_ROOTS.flatMap(root =>
  readdirSync(root, {recursive: true, encoding: 'utf8'})
    .filter(name => TEST_FILE.test(name))
    .map(name => join(root, name)),
).map(path => ({path, source: readFileSync(path, 'utf8')}));

const listFlagIndex = process.argv.indexOf(LIST_FLAG);
if (listFlagIndex !== -1) {
  const page = process.argv[listFlagIndex + 1];
  const spec = specs.find(({path}) => path === join(SPECS_DIR, `${page}.md`));
  if (!spec) {
    console.error(
      `${LIST_FLAG} takes a spec page: ${specs.map(({path}) => path).join(', ') || 'none yet'}.`,
    );
    process.exit(1);
  }
  process.stdout.write(
    formatSpecList(spec.path, listSpecItems(spec, testFiles)),
  );
  process.exit(0);
}

const summaryPath = process.env.GITHUB_STEP_SUMMARY;
if (summaryPath) {
  for (const spec of specs) {
    appendFileSync(
      summaryPath,
      formatSpecTable(spec.path, listSpecItems(spec, testFiles)),
    );
  }
}

const problems = [
  ...findDocsWithoutIds(docs),
  ...findSpecProblems(specs, testFiles),
];

if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}

if (specs.length === 0) {
  console.warn(`No specs in ${SPECS_DIR} yet.`);
}
for (const {path, markdown} of specs) {
  const items = parseSpecItems(markdown);
  const pendingCount = items.filter(item => item.pending).length;
  console.warn(
    `${path}: ${items.length - pendingCount} items, each held by a test${
      pendingCount > 0 ? ` (${pendingCount} pending)` : ''
    }.`,
  );
}
