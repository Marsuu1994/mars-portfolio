// Adapted from mars-workbench@3f741cc eslint.config.mjs: no server-only or
// read-through-actions boundaries (the site has no data layer).
import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // No leftover console.log; console.error / warn report real failures.
  // Scripts under scripts/ print freely.
  {
    files: ['src/**'],
    rules: {
      'no-console': ['error', {allow: ['error', 'warn']}],
    },
  },
  // Code style for production code (AGENTS.md → Tooling).
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'import/no-default-export': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-multi-comp': ['error', {ignoreStateless: false}],
      'id-length': [
        'error',
        {
          min: 2,
          properties: 'never',
          // _ an unused parameter, i / j index loops, a / b sort
          // comparators, T / K / V type parameters.
          exceptions: ['_', 'i', 'j', 'a', 'b', 'T', 'K', 'V'],
        },
      ],
    },
  },
  // Next.js convention files must default export, and are written as
  // function declarations.
  {
    files: [
      'src/app/**/{page,layout,loading,not-found,error,global-error,template,default,route}.{ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'react/function-component-definition': 'off',
    },
  },
  // Disable ESLint rules that conflict with Prettier formatting.
  // Keep this last so it overrides stylistic rules from the configs above.
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Test reports (gitignored)
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
  ]),
]);

export default eslintConfig;
