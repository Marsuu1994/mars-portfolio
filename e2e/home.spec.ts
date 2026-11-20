import {expect, test} from '@playwright/test';
import {HOME_HEADLINE} from '../src/app/constants';

test('The home page shows its headline, landscape and diagrams, with no console errors and no sideways scroll', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', error => errors.push(error.message));

  await page.goto('/');

  await expect(page.getByRole('heading', {level: 1})).toHaveText(HOME_HEADLINE);
  await expect(
    page.getByRole('img', {name: 'An ink landscape of layered mountains'}),
  ).toBeVisible();
  await expect(page.getByRole('img', {name: /The weekly board/})).toBeVisible();
  const scrollsSideways = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(scrollsSideways).toBe(false);
  expect(errors).toEqual([]);
});
