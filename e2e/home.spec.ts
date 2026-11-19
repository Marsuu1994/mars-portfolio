import {expect, test} from '@playwright/test';
import {HELLO_TITLE} from '../src/app/constants';

test('The home page says hello, with no console errors and no sideways scroll', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', error => errors.push(error.message));

  await page.goto('/');

  await expect(page.getByRole('heading', {level: 1})).toHaveText(HELLO_TITLE);
  const scrollsSideways = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(scrollsSideways).toBe(false);
  expect(errors).toEqual([]);
});
