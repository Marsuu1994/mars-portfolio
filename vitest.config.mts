// Adapted from mars-workbench@3f741cc vitest.config.mts: unit tests only, in
// production's timezone and the owner's; no integration or component layers
// until the site has data or interactive components.
import {defineConfig} from 'vitest/config';

const TIME_ZONES = {utc: 'UTC', la: 'America/Los_Angeles'};

const UNIT_TESTS = ['src/**/*.unit.test.ts', 'scripts/**/*.unit.test.ts'];

export default defineConfig({
  resolve: {tsconfigPaths: true},
  test: {
    // The skeleton has no unit tests yet; the first pure helper brings one.
    passWithNoTests: true,
    projects: Object.entries(TIME_ZONES).map(([suffix, timeZone]) => ({
      extends: true,
      test: {name: `unit-${suffix}`, include: UNIT_TESTS, env: {TZ: timeZone}},
    })),
  },
});
