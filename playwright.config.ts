// Adapted from mars-workbench@3f741cc playwright.config.ts: no local stack, no
// sign-in, no Design Console project.
import {defineConfig} from '@playwright/test';
import {preinstalledChromiumPath} from './test/preinstalledChromium';

const BASE_URL = 'http://localhost:3000';

const isCI = Boolean(process.env.CI);

const DESKTOP = {viewport: {width: 1280, height: 800}};
const MOBILE = {
  viewport: {width: 390, height: 844},
  isMobile: true,
  hasTouch: true,
};

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  reporter: isCI ? [['github'], ['html', {open: 'never'}]] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    launchOptions: {executablePath: preinstalledChromiumPath},
  },
  // Every page at both widths and in both themes.
  projects: [
    {name: 'desktop', use: DESKTOP},
    {name: 'mobile', use: MOBILE},
    {name: 'desktop-dark', use: {...DESKTOP, colorScheme: 'dark'}},
    {name: 'mobile-dark', use: {...MOBILE, colorScheme: 'dark'}},
  ],
  webServer: {
    // Locally, a running `npm run dev` is reused.
    command: isCI ? 'npm run build && npm run start' : 'npm run dev',
    url: BASE_URL,
    reuseExistingServer: !isCI,
    timeout: 300_000,
  },
});
